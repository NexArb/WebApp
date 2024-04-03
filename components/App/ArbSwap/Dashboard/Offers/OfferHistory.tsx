import React, { Fragment, useEffect, useState } from 'react'
import { OfferListing } from '@/constants'
import { Offer } from '@/constants/Offer'

import { getMyOffers } from '@/services/ApiService'

// import HistoryTable from './HistoryTable'

function OfferHistory() {
  const [offers, setOffers] = useState<Offer[]>([])

  useEffect(() => {
    const getPastOffers = async () => {
      const pastOffersApi = await getMyOffers(false)
      setOffers(pastOffersApi.data.data)
    }

    getPastOffers()
  }, [])

  return (
    <div className="grid grid-cols-2 gap-4 text-black">
      <div>
        <div className="px-8">
          <span className="text-lg font-medium text-neutral-400">RECEIVED</span>
          <div className="w-full border border-neutral-400"></div>
        </div>
        <div className="custom-scrollbar mx-auto h-[600px] overflow-y-auto bg-zinc-100">
          <table className="mx-auto max-w-full text-black">
            <tbody></tbody>
          </table>
        </div>
      </div>
      <div>
        <div className="px-8">
          <span className="text-lg font-medium text-neutral-400">SENT</span>
          <div className="w-full border border-neutral-400"></div>
        </div>
        <div className="custom-scrollbar mx-auto h-[600px] overflow-y-auto bg-zinc-100">
          <table className="mx-auto max-w-full text-black">
            <tbody></tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default OfferHistory
