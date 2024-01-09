import React from 'react'
import Intro from '../../components/HomePage/Arbswap/Intro'
import ExchangeRates from '../../components/HomePage/Arbswap/ExchangeRates'
import SolanaStatistics from '../../components/HomePage/Arbswap/SolanaStatistics'
import Confidentiality from '../../components/HomePage/Arbswap/Confidentiality'
import SolanaWorld from '../../components/HomePage/Arbswap/SolanaWorld'
import Steps from '../../components/HomePage/Arbswap/Steps'
import ArbSwapNavbar from '@/components/CustomNavbar/ArbSwap'
import ArbSwapFooter from '@/components/CustomFooter/ArbSwap'

const Solana = (): React.JSX.Element => {
  return (
    <div className="">
      <Intro/>
      <ExchangeRates/>
      <SolanaStatistics/>
      <Steps/>
      <SolanaWorld/>
      <Confidentiality/>
      <ArbSwapFooter/>
    </div>
  )
}

export default Solana
