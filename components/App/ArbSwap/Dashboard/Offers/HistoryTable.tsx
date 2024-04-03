import React from 'react'
import Image from 'next/image'
import { OfferListing } from '@/constants'
import { Offer } from '@/constants/Offer'

type OfferProps = (typeof OfferListing)[number]

function DashboardTable({ offer }: Readonly<{ offer: Offer }>) {
  return (
    <tr className="flex items-center justify-center overflow-hidden text-base font-medium">
      <td>
        <div className="inline-flex">
          <span className="p-2">{}</span>
          <Image
            src={'/img/arrow.svg'}
            alt="arrow image"
            width={20}
            height={2}
          />
          <span className="p-2">Your Wallet</span>
        </div>
      </td>
      <td className="mt-6 flex flex-col font-medium text-slate-950">
        <span>{offer.amount}</span>
        <span className="p-1">{offer.total_price}</span>
      </td>
      <td
        className={`pl-4 ${
          offer.is_approved ? 'text-emerald-400' : 'text-red-500'
        }`}
      >
        {offer.is_approved ? 'ACCEPTED' : 'REJECTED'}
      </td>
    </tr>
  )
}

export default DashboardTable
