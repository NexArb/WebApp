'use client'

import React, { useState } from 'react'

import CustomButton from '@/components/CustomButton'
import IncomingOffers from './IncomingOffers'
import OffersSent from './OffersSent'
import OfferHistory from './OfferHistory'

function Offers() {
  const [component, setComponent] = useState<JSX.Element>(<IncomingOffers />)

  const handleClick = (componentName: string) => {
    if (componentName === 'IncomingOffers') {
      setComponent(<IncomingOffers />)
    } else if (componentName === 'OffersSent') {
      setComponent(<OffersSent />)
    } else if (componentName === 'OfferHistory') {
      setComponent(<OfferHistory />)
    }
  }

  return (
    <section className="flexCenter flex-col">
      <div className="grid grid-flow-col grid-cols-6 gap-5 p-2">
        <CustomButton
          classButton="bg-blue-600 pt-3 h-10 flex w-[140px] justify-center  rounded-3xl"
          classText="text-xs font-medium text-white"
          text="INCOMING OFFER"
          onClick={() => handleClick('IncomingOffers')}
        />
        <CustomButton
          classButton="bg-zinc-100 pt-3 h-10 flex w-[140px] justify-center border-solid border-blue-600  rounded-3xl"
          classText="text-xs font-medium !text-blue-600"
          text="OFFERS SENT"
          onClick={() => handleClick('OffersSent')}
        />
        <CustomButton
          classButton="bg-zinc-100 pt-3 h-10 flex w-[140px] justify-center border-solid border-blue-600 rounded-3xl"
          classText="text-xs font-medium !text-blue-600"
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
