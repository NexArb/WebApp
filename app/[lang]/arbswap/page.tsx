import React from 'react'

import Confidentiality from '@/components/App/Arbswap/Confidentiality'
import ExchangeRates from '@/components/App/Arbswap/ExchangeRates'
import Intro from '@/components/App/Arbswap/Intro'
import SolanaStatistics from '@/components/App/Arbswap/SolanaStatistics'
import SolanaWorld from '@/components/App/Arbswap/SolanaWorld'
import Steps from '@/components/App/Arbswap/Steps'
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
