import * as anchor from "@coral-xyz/anchor";
import { AnchorEscrow } from "@/target/types/anchor_escrow";
import { Connection, PublicKey } from "@solana/web3.js";

declare global {
    interface Window {
        solana: any;
    }
}

const getProvider = () => {
    const connection = new Connection("https://api.devnet.solana.com", "processed");
    const provider = new anchor.AnchorProvider(connection, window.solana, {
        preflightCommitment: "processed",
    });

    anchor.setProvider(provider);
    return provider;
}

const getProgram = async () => {
    const provider = getProvider(); 
    const programId = new PublicKey("6BLPdL9narQPFQsqS7AXuRBRS4VoyKmHHzdwkgnLaAps");
    const idl = await anchor.Program.fetchIdl(programId, provider);
    
    
    if (!idl) {
        throw new Error("Failed to fetch IDL");
    }

    const program = new anchor.Program(idl, provider) as unknown as anchor.Program<AnchorEscrow>;
    return program;
}


export { getProvider, getProgram };