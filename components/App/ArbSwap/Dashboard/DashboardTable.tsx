import { Listing } from '@/types/dashboard'

import React from 'react'

import Button from '@/components/Common/Button'
import { modalStore } from '@/hooks/useStore'
import { useFormData } from '@/context/offerFormDataContext'

function DashboardTable({ listing }: Readonly<{ listing: Listing }>) {
  const { toggleModal } = modalStore()
  const { formData, updateFormData } = useFormData();
  const modalKey = 'paymentMethod'

  return (
    <tr>
      <td className="px-4 font-medium text-slate-950">
        <div className="pl-2 text-base">{listing.seller_username}</div>
      </td>
      <td className="px-10 py-5">
        <div className="ml-1 text-base font-medium">
          <span className="text-slate-950">{listing.payment_method}</span>
        </div>
      </td>
      <td className="mr-5 px-5 text-base font-medium text-slate-950">
        {listing.amount} SOL
      </td>
      <td className="ml-3 px-5 text-base font-medium text-slate-950">
        ${listing.price}
      </td>
      <td>
        <Button
          className="rounded-full bg-blue-600 px-6 py-2 outline-none"
          onClick={() => {
            updateFormData({listing_id: listing.id, seller_username: listing.seller_username})
            toggleModal(modalKey)
          }}
        >
          <span className="text-sm">MAKE AN OFFER</span>
        </Button>
      </td>
    </tr>
  )
}

export default DashboardTable
