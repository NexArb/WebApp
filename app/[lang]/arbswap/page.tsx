import React from 'react'

import Confidentiality from '@/components/App/ArbSwap/Confidentiality'
import ExchangeRates from '@/components/App/ArbSwap/ExchangeRates'
import Intro from '@/components/App/ArbSwap/Intro'
import SolanaStatistics from '@/components/App/ArbSwap/SolanaStatistics'
import SolanaWorld from '@/components/App/ArbSwap/SolanaWorld'
import Steps from '@/components/App/ArbSwap/Steps'
import ArbSwapFooter from '@/components/CustomFooter/ArbSwap'
import ArbSwapNavbar from '@/components/CustomNavbar/ArbSwap'

const Solana = ({
  params
}: {
  params: { lang: string }
}): React.JSX.Element => {
  const { lang } = params
  return (
    <div className="bg-gradient-to-br from-blue-950 via-black to-purple-900">
      <ArbSwapNavbar locale={lang} />
      <Intro locale={lang} />
      <ExchangeRates locale={lang} />
      <SolanaStatistics locale={lang} />
      <Steps locale={lang} />
      <SolanaWorld locale={lang} />
      <Confidentiality locale={lang} />
      <ArbSwapFooter locale={lang} />
    </div>
  )
}

export default Solana
