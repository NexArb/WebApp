import React from 'react'
import Intro from '../../../components/HomePage/Arbswap/Intro'
import ExchangeRates from '../../../components/HomePage/Arbswap/ExchangeRates'
import SolanaStatistics from '../../../components/HomePage/Arbswap/SolanaStatistics'
import Confidentiality from '../../../components/HomePage/Arbswap/Confidentiality'
import SolanaWorld from '../../../components/HomePage/Arbswap/SolanaWorld'
import Steps from '../../../components/HomePage/Arbswap/Steps'
import ArbSwapNavbar from '@/components/CustomNavbar/ArbSwap'
import ArbSwapFooter from '@/components/CustomFooter/ArbSwap'

const Solana = ({params}: {params: {lang: string}}): React.JSX.Element => {
  const { lang } = params;
  return (
    <div className="bg-gradient-to-br from-blue-950 via-black to-purple-900">
      <ArbSwapNavbar locale={lang} />
      <Intro locale={lang}/>
      <ExchangeRates locale={lang}/>
      <SolanaStatistics locale={lang} />
      <Steps locale={lang} />
      <SolanaWorld locale={lang}/>
      <Confidentiality locale={lang} />
      <ArbSwapFooter locale={lang} />
    </div>
  )
}

export default Solana
