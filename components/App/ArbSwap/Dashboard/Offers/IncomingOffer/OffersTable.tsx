import { Offer } from '@/types/dashboard'

import React, { useEffect, useState } from 'react'

import Button from '@/components/Common/Button'
import { getMyOffers } from '@/services/ApiService'
import { useAnchorWallet, useWallet } from '@solana/wallet-adapter-react'
import { Connection, PublicKey } from '@solana/web3.js'
import idl from "@/target/idl/anchor_escrow.json"
import { AnchorProvider } from '@coral-xyz/anchor'
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'

const programID = new PublicKey(idl.address);
const network = WalletAdapterNetwork.Devnet;
const opts = { preflightCommitment: "processed" };

export default function OffersTable() {
  const [offers, setOffers] = useState<Offer[]>([])
  const wallet = useAnchorWallet();
  const { connected } = useWallet();
  const [makeAccountPublicKey, setMakeAccountPublicKey] = useState(null);
  const [error, setError] = useState("");

  const getOffersFromApi = async () => {
    const offersApi = await getMyOffers(false)
    setOffers(offersApi.data)
  }

  useEffect(() => {
    getOffersFromApi()
  }, [])

  return (
    <tbody>
      {offers?.map((offer) => (
        <tr key={offer.user_id}>
          {' '}
          {/* Make sure each offer has a unique 'id' property */}
          <td className="p-3 font-medium text-slate-950">
            <div className="text-base">{offer.coming_from}</div>
          </td>
          <td>
            <div className="p-3 text-base font-medium">
              <span className="text-slate-950">Bank Transaction</span>
              <div className="mt-2 text-indigo-500">COBANK</div>
              <span className="text-emerald-400"></span>
            </div>
          </td>
          <td className="p-5 text-base font-medium text-slate-950">
            <div>{offer.amount} SOL</div>
            <div>${offer.total_price}</div>
          </td>
          <td className="pr-5">
            <Button className="border border-emerald-400 bg-emerald-400 bg-opacity-10 px-8 py-2" onClick={() => {}}>
              <span className="text-emerald-400 ">ACCEPT</span>
            </Button>
          </td>
          <td className="pr-5">
            <Button className="border border-red-600 bg-red-600 bg-opacity-10 px-8 py-2">
              <span className="text-red-600">REJECT</span>
            </Button>
          </td>
          <td className="pr-5">
            <Button className="border border-blue-600 bg-blue-600 bg-opacity-10 px-8 py-2">
              <span className="text-blue-600">REPLY</span>
            </Button>
          </td>
        </tr>
      ))}
    </tbody>
  )
}
