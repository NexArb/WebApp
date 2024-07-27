import * as anchor from "@coral-xyz/anchor";
import { Program, BN } from "@coral-xyz/anchor";
import { AnchorEscrow } from "@/target/types/anchor_escrow";
import { Keypair, LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
import { createAssociatedTokenAccountIdempotentInstruction, createInitializeMint2Instruction, createMintToInstruction, getAssociatedTokenAddress, getAssociatedTokenAddressSync, getMinimumBalanceForRentExemptAccount, MINT_SIZE } from "@solana/spl-token";
import { randomBytes } from "crypto";

declare global {
    interface Window {
        solana: any;
    }
}

anchor.setProvider(anchor.AnchorProvider.env());
const provider = anchor.getProvider();
const connection = provider.connection;
const program = anchor.workspace.AnchorEscrow as Program<AnchorEscrow>;
const programId = new PublicKey("6BLPdL9narQPFQsqS7AXuRBRS4VoyKmHHzdwkgnLaAps");

const confirm = async (signature: string): Promise<string> => {
    const block = await connection.getLatestBlockhash();
    await connection.confirmTransaction({
        signature,
        ...block,
    });
    return signature;
}

const log = async (signature: string): Promise<string> => {
    console.log(
        `Your transaction signature: https://explorer.solana.com/transaction/${signature}?cluster=custom&customUrl=${connection.rpcEndpoint}`
    );
    return signature;
}

const seed = new BN(randomBytes(8));

const [maker, taker, mintA, mintB] = Array.from({length: 4}, () => 
    Keypair.generate()
);

const [makerAtA, makerAtB, takerAtaA, takerAtaB] = [maker, taker]
    .map((a) =>
        [mintA, mintB].map((m) =>
        getAssociatedTokenAddress(m.publicKey, a.publicKey, false, programId)
    )
).flat();

const escrow = PublicKey.findProgramAddressSync(
    [Buffer.from("escrow"), maker.publicKey.toBuffer(), seed.toArrayLike(Buffer, "le", 8)],
    program.programId
)[0];

const vault = getAssociatedTokenAddressSync(mintA.publicKey, escrow, true, programId);

const accounts = {
    maker: maker.publicKey,
    taker: taker.publicKey,
    mintA: mintA.publicKey,
    mintB: mintB.publicKey,
    makerAtA,
    makerAtB,
    takerAtaA,
    takerAtaB,
    escrow,
    vault,
    programId,
}

const airdropAndCreateMints = async () => {
    let lamports = await getMinimumBalanceForRentExemptAccount(connection);
    let tx = new Transaction();
    tx.instructions = [
        ...[maker, taker].map((account) => 
            SystemProgram.transfer({
                fromPubkey: provider.publicKey,
                toPubkey: account.publicKey,
                lamports: 10 * LAMPORTS_PER_SOL,
            })
        ),
        ...[mintA, mintB].map((mint) =>
            SystemProgram.createAccount({
                fromPubkey: provider.publicKey,
                newAccountPubkey: mint.publicKey,
                lamports,
                space: MINT_SIZE,
                programId: programId,
            })
        ),
        ...[
            {mint: mintA.publicKey, authority: maker.publicKey, ata: makerAtA},
            {mint: mintB.publicKey, authority: taker.publicKey, ata: takerAtaB},
        ]
        .flatMap((x) => [
            createInitializeMint2Instruction(x.mint, 6, x.authority, null, programId),
            createAssociatedTokenAccountIdempotentInstruction(provider.publicKey, x.ata, x.authority, x.mint, programId),
            createMintToInstruction(x.mint, x.ata, x.authority, 1e9, undefined, programId),
        ])
    ];

    await provider.sendAndConfirm(tx, [mintA, mintB, maker, taker]).then(log);
}

const make = async () => {
    await program.methods
        .make(seed, new BN(1e6), new BN(1e6))
        .accounts({
            ...accounts,
            makerAtaA: "",
            tokenProgram: programId
        })
        .signers([maker])
        .rpc()
        .then(confirm)
        .then(log);
}

const refund = async () => {
    await program.methods
        .refund()
        .accounts({
            ...accounts,
            makerAtaA: "",
            tokenProgram: programId
        })
        .signers([maker])
        .rpc()
        .then(confirm)
        .then(log);
};

const take = async () => {
    try {
        await program.methods
            .take()
            .accounts({
                ...accounts,
                makerAtaB: "",
                tokenProgram: "",
            })
            .signers([taker])
            .rpc()
            .then(confirm)
            .then(log)
    }
    catch (err) {
        console.log(err);
        throw(err);
    }   
}


export default { airdropAndCreateMints, make, refund, take };
