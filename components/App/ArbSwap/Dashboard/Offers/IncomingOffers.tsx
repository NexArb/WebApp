import React, { useEffect, useState } from 'react'
import { Offer } from '@/constants/Offer'

import { getMyOffers } from '@/services/ApiService'

import OffersTable from './OffersTable'

function IncomingOffers() {
  const [offers, setOffers] = useState<Offer[]>([])

  useEffect(() => {
    const getOffersFromApi = async () => {
      const offersApi = await getMyOffers(false)
      setOffers(offersApi.data.data)
    }

    getOffersFromApi()
  }, [])

  return (
    <div>
      <div>
        <table className="table-auto">
          <thead>
            <th className="text-slate-500">From</th>
            <th className="text-slate-500">Method</th>
            <th className="text-slate-500">Amount</th>
          </thead>
          <tbody>
            {offers.map((offer) => {
              return <OffersTable offer={offer} />
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default IncomingOffers
