import { OfferListing } from '@/constants'
import React, { Fragment } from 'react'
import OffersTable from './OffersTable'

function IncomingOffers() {
  return (
    <div>
      {' '}
      <div className="inline-grid grid-cols-4 border-b border-neutral-400 text-lg text-neutral-400">
        <div className="ml-3 px-2 pb-1 pt-2 font-medium">From</div>
        <div className="mr-2 pb-1 pt-2 font-medium">Method</div>
        <div className="ml-2 px-10 pb-1 pt-2 font-medium">Amount</div>
      </div>
      <div className="custom-scrollbar mx-auto overflow-y-scroll bg-zinc-100 backdrop-blur-[100px]">
        <table className=" mx-auto max-w-full text-black">
          <tbody>
            {OfferListing.map((item, index) => (
              <Fragment key={index}>
                <OffersTable {...item} />
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default IncomingOffers
