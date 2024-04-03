import React from 'react'
import { Offer } from '@/constants/Offer'

import Button from '@/components/Common/Button'

export default function OffersTable({ offer }: Readonly<{ offer: Offer }>) {
  return (
    <tr>
      <td className="p-3 font-medium text-slate-950">
        <div className="text-base">{offer?.coming_from}</div>
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
        <div>{offer.total_price} $</div>
      </td>
      <td className="pr-5">
        <Button className="border border-emerald-400 bg-emerald-400 bg-opacity-10 px-8 py-2">
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
  )
}
