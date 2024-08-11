import Modal from '@/components/Common/Modal'
import { modalStore } from '@/hooks/useStore';
import getFormattedDateTime from '@/hooks/useCurrentDate'
import React, { useState, useEffect } from 'react'
import redstone from "redstone-api";
//import { createListing } from '@/services/ApiService';
import { AnchorWallet, useWallet } from '@solana/wallet-adapter-react';
import idl from "@/target/idl/anchor_escrow.json";
import { AnchorEscrow } from '@/target/types/anchor_escrow';
import * as anchor from "@coral-xyz/anchor";
import { clusterApiUrl, Connection, Keypair, PublicKey } from '@solana/web3.js';
import { randomBytes } from 'crypto';
import { createMint, getAssociatedTokenAddressSync, getMint, TOKEN_2022_PROGRAM_ID } from "@solana/spl-token";

const CreateListing = () => {
  const modalKey = 'createListing';
  const { toggleModal } = modalStore();

  const [solToUSD, setSolToUSD] = useState(0.0);
  const [solToETH, setSolToETH] = useState(0.0);
  const wallet = useWallet();

  const [amount, setAmount] = useState(0);
  //const [currency, setCurrency] = useState("SOL");

  const fetchSolToUSD = async () => {
    const price = await redstone.getPrice("SOL");
    setSolToUSD(price.value);
  }

  const fetchSolToETH = async () => {
    const solPrice = await redstone.getPrice("SOL");
    const ethPrice = await redstone.getPrice("ETH");

    const solToEth = solPrice.value / ethPrice.value;

    setSolToETH(solToEth);
  }

  const handleClose = () => {
    toggleModal(modalKey);
  }

  const handleMake = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const idlJson = idl as anchor.Idl;
    const connection = new Connection("https://api.devnet.solana.com", "confirmed");
    const provider = new anchor.AnchorProvider(connection, wallet as AnchorWallet);
    const program = new anchor.Program<AnchorEscrow>(JSON.parse(JSON.stringify(idlJson)), provider);
    
    if (!wallet?.publicKey) {
      throw new Error("Wallet public key is null");
    }

    const seedBuffer = new anchor.BN(randomBytes(8));
    const seed = new anchor.BN(seedBuffer);
    const maker = wallet.publicKey;
    const mintA = Keypair.generate().publicKey;
    const mintB = Keypair.generate().publicKey;
    const makerAtaA = new PublicKey(getAssociatedTokenAddressSync(mintA, maker, false, TOKEN_2022_PROGRAM_ID));
    const escrow = PublicKey.findProgramAddressSync(
      [Buffer.from("escrow"), maker.toBuffer(), seedBuffer],
      program.programId
    )[0];
    const vault = new PublicKey(getAssociatedTokenAddressSync(mintA, escrow, true, TOKEN_2022_PROGRAM_ID));
            
    try {
      const tx = await program.methods
            .make(seed, new anchor.BN(amount), new anchor.BN(amount))
            .accounts(
              {
                maker: maker, 
                mintA: mintA, 
                mintB: mintB, 
                makerAtaA: makerAtaA,
                vault: vault,
                tokenProgram: TOKEN_2022_PROGRAM_ID,
              }
            )
            .rpc();
      console.log(tx);
    }
    catch (err) {
      console.error(err);
    }
  }

  const handleRefund = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const idlJson = idl as anchor.Idl;
    const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
    const provider = new anchor.AnchorProvider(connection, wallet as AnchorWallet);
    const program = new anchor.Program<AnchorEscrow>(JSON.parse(JSON.stringify(idlJson)), provider);
    const tx = await program.methods
        .refund()
        .rpc();
    
    console.log(tx);
  }

  const handleTake = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const idlJson = idl as anchor.Idl;
    const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
    const provider = new anchor.AnchorProvider(connection, wallet as AnchorWallet);
    const program = new anchor.Program<AnchorEscrow>(JSON.parse(JSON.stringify(idlJson)),provider);

    const tx = await program.methods
        .take()
        .rpc();
    
    console.log(tx);
  }

  /*const createListingFromApi = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = {
      amount: amount,
      currency: currency
    }

    try {
      const responseStatus = await createListing(body);

      if (responseStatus === 200) {
        window.location.reload();
      }
    }
    catch (err) {
      console.error(err);
    }
  }*/

  useEffect(() => {
    fetchSolToUSD();
    fetchSolToETH();
  }, [])

  return (
    <Modal>
      <div className="w-[577px] flex-col rounded-3xl bg-zinc-100 p-10 text-lg text-black">
        <div className="rounded-2xl bg-neutral-800 px-5 py-2 text-white">
          <div className="flex flex-row justify-between">
            <div className="">{solToUSD !== 0.0 ? `1 SOL = ${solToUSD.toFixed(3)} USD` : 'Loading...'}</div>
            <div>{getFormattedDateTime()}</div>
          </div>
          <div className="flex flex-row justify-between">
            <div>{solToETH !== 0.0 ? `1 SOL = ${solToETH.toFixed(3)} ETH` : 'Loading...'}</div>
            <div>{getFormattedDateTime()}</div>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-2">
          <div className="rounded-bl-3xl rounded-tl-3xl border border-blue-600 bg-blue-600 py-1 text-center text-white">
            Buy SOL
          </div>
          <div className="rounded-br-3xl rounded-tr-3xl border-2 border-blue-600 bg-white py-1 text-center text-blue-600">
            Sell SOL
          </div>
        </div>
        <form onSubmit={handleMake} className="flex flex-col">
          <select
            className="mt-8 rounded-3xl border border-zinc-300 bg-white text-neutral-500"
            name="paymentMethod"
            defaultValue={'DEFAULT'}
          >
            <option hidden disabled value="DEFAULT">
              Payment Method
            </option>
            <option value="creditCard">Credit Card</option>
            <option value="bankCard">Bank Card</option>
            <option value="paypal">Paypal</option>
            <option value="applePay">Apple Pay</option>
          </select>
          <select
            className="mt-8 rounded-3xl border border-zinc-300 bg-white text-neutral-500"
            name="country"
            defaultValue={'DEFAULT'}
          >
            <option hidden disabled value="DEFAULT">
              Country
            </option>
            <option value="tr">Turkey</option>
            <option value="us">United States</option>
            <option value="uk">United Kindom</option>
            <option value="de">Germany</option>
          </select>
          <input
            className="mt-8 rounded-3xl border border-zinc-300 bg-white text-neutral-500"
            type="text"
            placeholder="Wallet Address"
            value={String(wallet.publicKey)}
            readOnly
          ></input>
          <div className="relative mt-8">
            <input
              className="w-full rounded-full border-zinc-300 bg-white text-neutral-500 px-5 py-3 backdrop-blur-sm"
              placeholder="Amount"
              type="number"
              onChange={(e) => setAmount(Number(e.target.value))}
            />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <span className="rounded-full bg-green-400 px-4 py-1 font-bold text-black">
                SOL
              </span>
            </div>
          </div>
          <label className="text-sm opacity-30 ml-8 mt-2">Minimum: 10 SOL</label>
          {/*<div className="relative mt-5">
            <input
              className="w-full rounded-full border-zinc-300 bg-white text-neutral-500 px-5 py-3 backdrop-blur-sm"
              placeholder="Price"
            />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <span className="rounded-full bg-green-400 px-4 py-1 font-bold text-black">
                USD
              </span>
            </div>
          </div>
          <label className="text-sm opacity-30 ml-8 mt-2">Minimum: 10 USD</label>*/}
          <div className="mt-7 ml-4 flex flex-row gap-5">
            <div className="flexCenter group rounded-[10px]">
              <input
                type="checkbox"
                className="h-6 w-6 cursor-pointer appearance-none rounded-[10px] bg-teal-400 text-teal-400 focus:ring-teal-100"
              />
            </div>
            <span className="text-lg font-medium text-neutral-500">
              Will the offer be accepted automatically?
            </span>
          </div>
          <div className="flex justify-center text-white gap-4 mt-7">
            <button type="reset" onClick={handleClose} className="p-2 w-56 rounded-full bg-gray-600">Cancel</button>
            <button type="submit" className="p-2 w-56 rounded-full bg-blue-600">Save Listing</button>
          </div>
        </form>
      </div>
    </Modal>
  )
}

export default CreateListing
