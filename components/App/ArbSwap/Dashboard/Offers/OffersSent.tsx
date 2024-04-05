import React from 'react'
import { Offer } from '@/constants/Offer'

function OffersSent({ offers }: { offers: Offer[] }) {
  return (
    <div className="text-black">
      {offers.map((offer) => {
        return offer.amount
      })}
    </div>
  )
}

export default OffersSent
