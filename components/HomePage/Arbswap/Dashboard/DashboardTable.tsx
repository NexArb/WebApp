import React from 'react'

import { useModalStore } from '@/hooks/useStore'
import Button from '@/components/CommonComponents/Button'
import { Listing } from '@/constants/Listing'

function DashboardTable({listing}: {listing: Listing}) {
  const { toggleModal } = useModalStore()
  const modalKey = 'paymentMethod'

  return (
    <tr>
      <td className="px-4 font-medium text-slate-950">
        <div className="pl-2 text-base">{listing?.seller_username}</div>
      </td>
      <td className="px-10 py-5">
        <div className="text-base ml-5 font-medium">
          <span className="text-slate-950">{listing?.amount}</span>
          <div className="mt-2 text-indigo-500">COBANK</div>
          <span className="text-emerald-400">APPROVED</span>
        </div>
      </td>
      <td className="px-5 mr-5 text-base font-medium text-slate-950">{listing?.amount}</td>
      <td className="px-10 ml-1 text-base font-medium text-slate-950">{listing?.currency}</td>
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
