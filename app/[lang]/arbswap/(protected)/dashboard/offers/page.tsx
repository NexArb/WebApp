'use client'

import React, { useEffect, useState } from 'react'
import { Offer } from '@/constants/Offer'

import IncomingOffers from '@/components/App/ArbSwap/Dashboard/Offers/IncomingOffers'
import OfferHistory from '@/components/App/ArbSwap/Dashboard/Offers/OfferHistory'
import OffersSent from '@/components/App/ArbSwap/Dashboard/Offers/OffersSent'
import PaymentMethod from '@/components/App/ArbSwap/Dashboard/PaymentMethod'
import Button from '@/components/Common/Button'
import { useModalStore } from '@/hooks/useStore'
import { getMyOffers } from '@/services/ApiService'

function Offers() {
  const [component, setComponent] = useState<JSX.Element>(<IncomingOffers />)
  const [selected, setSelected] = useState<string>('IncomingOffers')
  const [offers, setOffers] = useState<Offer[]>([])

  const { showModal } = useModalStore()
  console.log('show modal', showModal)
  const handleClick = (componentName: string) => {
    if (componentName === 'IncomingOffers') {
      setComponent(<IncomingOffers />)
      setSelected('IncomingOffers')
    } else if (componentName === 'OffersSent') {
      setComponent(<OffersSent offers={offers} />)
      setSelected('OffersSent')
    } else if (componentName === 'OfferHistory') {
      setComponent(<OfferHistory />)
      setSelected('OfferHistory')
    }
  }

  useEffect(() => {
    const getOffersFromApi = async () => {
      const offersApi = await getMyOffers(false)
      setOffers(offersApi.data.data)
    }

    getOffersFromApi()
  }, [])

  return (
    <section className="flex flex-col items-center">
      <div className="my-4 grid grid-cols-6 gap-5">
        <Button
          className={`${
            selected === 'IncomingOffers' ? 'bg-blue-600' : 'bg-zinc-100'
          } mr-2 flex h-10 w-[140px] justify-center rounded-3xl pt-3`}
          onClick={() => handleClick('IncomingOffers')}
        >
          <span
            className={`${
              selected === 'IncomingOffers' ? 'text-white' : '!text-blue-600'
            } text-xs`}
          >
            INCOMING OFFER
          </span>
        </Button>
        <Button
          className={`${
            selected === 'OffersSent' ? 'bg-blue-600' : 'bg-zinc-100'
          } flex h-10 w-[140px] justify-center rounded-3xl bg-blue-600 pt-3`}
          onClick={() => handleClick('OffersSent')}
        >
          <span
            className={`${
              selected === 'OffersSent' ? 'text-white' : '!text-blue-600'
            } text-xs font-medium`}
          >
            OFFERS SENT
          </span>
        </Button>
        <Button
          className={`${
            selected === 'OfferHistory' ? 'bg-blue-600' : 'bg-zinc-100'
          } flex h-10 w-[140px] justify-center rounded-3xl bg-blue-600 pt-3`}
          onClick={() => handleClick('OfferHistory')}
        >
          <span
            className={`${
              selected === 'OfferHistory' ? 'text-white' : '!text-blue-600'
            } text-xs font-medium`}
          >
            OFFER HISTORY
          </span>
        </Button>
      </div>
      <div className="flex max-h-[691px] w-[1000px] flex-col rounded-3xl bg-zinc-100 p-5">
        {component}
      </div>
      {showModal.paymentMethod && <PaymentMethod />}
    </section>
  )
}

export default Offers
