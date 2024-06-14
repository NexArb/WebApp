import { Listing } from '@/types/dashboard'

import React from 'react'

import Button from '@/components/Common/Button'
import { modalStore } from '@/hooks/useStore'

function DashboardTable({ listing }: Readonly<{ listing: Listing }>) {
  const { toggleModal } = modalStore()
  const modalKey = 'paymentMethod'

  return (
    <tr>
      <td className="px-4 font-medium text-slate-950">
        <div className="pl-2 text-base">{listing.seller_username}</div>
      </td>
      <td className="px-10 py-5">
        <div className="ml-5 text-base font-medium">
          <span className="text-slate-950">{listing.amount}</span>
          <div className="mt-2 text-indigo-500">COBANK</div>
          <span className="text-emerald-400">APPROVED</span>
        </div>
      </td>
      <td className="mr-5 px-5 text-base font-medium text-slate-950">
        {listing.amount}
      </td>
      <td className="ml-1 px-10 text-base font-medium text-slate-950">
        {listing.currency}
      </td>
      <td>
        <Button
          className="rounded-full bg-blue-600 px-6 py-2 outline-none"
          onClick={() => toggleModal(modalKey)}
        >
          <span className="text-sm">MAKE AN OFFER</span>
        </Button>
      </td>
    </tr>
  )
}

export default DashboardTable
