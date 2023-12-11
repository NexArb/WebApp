import { OfferListing } from '@/constants'
import React, { Fragment } from 'react'
import HistoryTable from './HistoryTable'

function OfferHistory() {
  return (
    <div className="grid grid-cols-2 gap-10 text-black">
      <div>
        <span>RECEIVED</span>
        <div className="w-full border"></div>
        <table className="mx-auto max-w-full text-black">
          <tbody>
            {OfferListing.map((item, index) => (
              <Fragment key={index}>
                <HistoryTable {...item} />
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <span>SENT</span>
        <div className="w-full border"></div>
        <table className="mx-auto max-w-full text-black">
          <tbody>
            {OfferListing.map((item, index) => (
              <Fragment key={index}>
                <HistoryTable {...item} />
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default OfferHistory
