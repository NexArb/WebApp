import React from 'react'

import { useModalStore } from '@/hooks/useStore'
import { Offer } from '@/constants/Offer'
import Button from '@/components/CommonComponents/Button'

function DashboardTable({ offer }: Readonly<{ offer: Offer }>) {
  const { showModal, toggleModal } = useModalStore()
  const modalKey = 'paymentMethod'
  console.log('show modal', showModal)
  return (
    <tr>
      <td className="px-4 font-medium text-slate-950">
        {/* <div className="pl-2 text-base">{offer.seller_username}</div> */}
        <div className="mt-1 flex flex-row rounded-xl bg-white p-1 lg:w-28">
          <span className="ml-2 text-xs"></span>
        </div>
      </td>
      <td className="px-4 py-5">
        <div className="text-base font-medium">
          <span className="text-slate-950"></span>
          <div className="mt-2 text-indigo-500"></div>
          <span className="text-emerald-400"></span>
        </div>
      </td>
      <td className="px-4 text-base font-medium text-slate-950"></td>
      <td className="px-4 text-base font-medium text-slate-950"></td>
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
