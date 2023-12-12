import React from 'react'

import { OfferListing } from '@/constants'
import CustomButton from '@/components/CustomButton'
import { useModalStore } from '@/lib/store'

type OfferProps = (typeof OfferListing)[number]

function DashboardTable({ seller, payment, amount, price }: OfferProps) {
  const { toggleModal } = useModalStore()

  return (
    <tr className="flex items-center justify-center border-b border-solid border-zinc-400">
      <td className="pr-16 font-medium text-slate-950">
        <div className="pl-2 text-base">{seller.name}</div>
      </td>
      <td className="px-8 py-5">
        <div className="text-base font-medium">
          <span className="text-slate-950">{payment.method}</span>
          <div className="mt-2 text-indigo-500">{payment.name}</div>
          <span className="text-emerald-400">{payment.check}</span>
        </div>
      </td>
      <td className="flex flex-col px-8 py-5 text-base font-medium text-slate-950">
        <span>{amount}</span>
        <span>{price}</span>
      </td>
      <td>
        <CustomButton
          classButton="border border-emerald-400 bg-emerald-400 bg-opacity-10 px-8 py-2 mr-6 ml-10"
          classText="text-xs font-medium !text-emerald-400"
          text="ACCEPT"
          onClick={toggleModal}
        />
      </td>
      <td>
        <CustomButton
          classButton="border border-red-600 bg-red-600 bg-opacity-10 px-8 py-2 mr-6"
          classText="text-xs font-medium !text-red-600"
          text="REJECT"
          onClick={toggleModal}
        />
      </td>
      <td>
        <CustomButton
          classButton="border border-blue-600 bg-blue-600 bg-opacity-10 px-8 py-2 mr-5"
          classText="text-xs font-medium !text-blue-600"
          text="REPLY"
          onClick={toggleModal}
        />
      </td>
    </tr>
  )
}

export default DashboardTable
