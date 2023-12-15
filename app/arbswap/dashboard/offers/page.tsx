'use client'

import React, { useState } from 'react'

import CustomButton from '@/components/CustomButton'
import IncomingOffers from '@/components/HomePage/Arbswap/Dashboard/Offers/IncomingOffers'
import OffersSent from '@/components/HomePage/Arbswap/Dashboard/Offers/OffersSent'
import OfferHistory from '@/components/HomePage/Arbswap/Dashboard/Offers/OfferHistory'

function Offers() {
  const [component, setComponent] = useState<JSX.Element>(<IncomingOffers />)
  const [selected, setSelected] = useState<string>('IncomingOffers')

  const handleClick = (componentName: string) => {
    if (componentName === 'IncomingOffers') {
      setComponent(<IncomingOffers />)
      setSelected('IncomingOffers')
    } else if (componentName === 'OffersSent') {
      setComponent(<OffersSent />)
      setSelected('OffersSent')
    } else if (componentName === 'OfferHistory') {
      setComponent(<OfferHistory />)
      setSelected('OfferHistory')
    }
  }

  return (
    <section className="flex flex-col items-center">
      <div className="my-4 grid grid-cols-6 gap-5">
        <CustomButton
          classButton={`${selected === 'IncomingOffers' ? 'bg-blue-600' : 'bg-zinc-100'
            } pt-3 h-10 flex w-[140px] justify-center rounded-3xl mr-2`}
          classText={`${selected === 'IncomingOffers' ? 'text-white' : '!text-blue-600'
            } text-xs font-medium`}
          text="INCOMING OFFER"
          onClick={() => handleClick('IncomingOffers')}
        />
        <CustomButton
          classButton={`${selected === 'OffersSent' ? 'bg-blue-600' : 'bg-zinc-100'
            } bg-blue-600 pt-3 h-10 flex w-[140px] justify-center rounded-3xl`}
          classText={`${selected === 'OffersSent' ? 'text-white' : '!text-blue-600'
            } text-xs font-medium`}
          text="OFFERS SENT"
          onClick={() => handleClick('OffersSent')}
        />
        <CustomButton
          classButton={`${selected === 'OfferHistory' ? 'bg-blue-600' : 'bg-zinc-100'
            } bg-blue-600 pt-3 h-10 flex w-[140px] justify-center rounded-3xl`}
          classText={`${selected === 'OfferHistory' ? 'text-white' : '!text-blue-600'
            } text-xs font-medium`}
          text="OFFER HISTORY"
          onClick={() => handleClick('OfferHistory')}
        />
      </div>
      <div className="flex max-h-[691px] w-[1000px] flex-col rounded-3xl bg-zinc-100 p-5">
        {component}
      </div>
    </section>
  )
}

export default Offers
