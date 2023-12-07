import React from 'react'
import Intro from './Intro'
import ExchangeRates from './ExchangeRates'
import SolanaStatistics from './SolanaStatistics'
import Confidentiality from './Confidentiality'
import SolanaWorld from './SolanaWorld'
import Steps from './Steps'

const Solana = (): React.JSX.Element => {
  return (
    <div className="bg-gradient-to-br from-blue-950 via-black to-purple-900">
      <Intro />
      <ExchangeRates />
      <SolanaStatistics />
      <Steps />
      <SolanaWorld />
      <Confidentiality />
    </div>
  )
}

export default Solana
