import React from 'react'

import Confidentiality from '@/components/App/ArbSwap/Confidentiality'
import ExchangeRates from '@/components/App/ArbSwap/ExchangeRates'
import Intro from '@/components/App/ArbSwap/Intro'
import SolanaStatistics from '@/components/App/ArbSwap/SolanaStatistics'
import SolanaWorld from '@/components/App/ArbSwap/SolanaWorld'
import Steps from '@/components/App/ArbSwap/Steps'
import ArbSwapFooter from '@/components/CustomFooter/ArbSwap'
import ArbSwapNavbar from '@/components/CustomNavbar/ArbSwap'
import { underConstructionDictionary } from '@/constants/localesContent'

const Solana = ({
  params
}: {
  params: { lang: string }
}): React.JSX.Element => {
  const { lang } = params
  return (
    <div className="h-screen bg-gradient-to-br from-blue-950 via-black to-purple-900">
      {/*<ArbSwapNavbar locale={lang} />
      <Intro locale={lang} />
      <ExchangeRates locale={lang} />
      <SolanaStatistics locale={lang} />
      <Steps locale={lang} />
      <SolanaWorld locale={lang} />
      <Confidentiality locale={lang} />
      <ArbSwapFooter locale={lang} />*/}
      <div className="flex justify-center flex-col items-center">
        <h1 className="text-6xl font-bold text-white mt-20">{underConstructionDictionary[lang]?.underConstruction}</h1>
        <p className="text-white text-3xl mt-20">{underConstructionDictionary[lang]?.promoVideoDesc}</p>
        <video src="img/nexarb-promo.mp4" width={750} height={550} className="mt-10" controls preload='none'>
        </video>
      </div>
      
    </div>
  )
}

export default Solana
