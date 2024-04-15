import React from 'react'

import OffersTable from './OffersTable'

function IncomingOffers() {
  return (
    <div>
      <div>
        <table className="table-auto">
          <thead>
            <th className="text-slate-500">From</th>
            <th className="text-slate-500">Method</th>
            <th className="text-slate-500">Amount</th>
          </thead>
          <OffersTable />
        </table>
      </div>
    </div>
  )
}

export default IncomingOffers
