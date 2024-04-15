import React from 'react'
import Image from 'next/image'
import { arbSwapHomeDictionary } from '@/constants/localesContent'

interface SolanaStatisticsProps {
  readonly locale: string
}

const SolanaStatistics: React.FC<SolanaStatisticsProps> = ({ locale }) => {
  return (
    <div>
      <div className="mt-32 flex justify-evenly">
        <div>
          <h1 className="text-center text-5xl">5M+</h1>
          <p className="opacity-50">
            {arbSwapHomeDictionary[locale]?.userWorldwide}
          </p>
        </div>
        <div>
          <h1 className="text-center text-5xl">120</h1>
          <p className="opacity-50">
            {arbSwapHomeDictionary[locale]?.countrySupported}
          </p>
        </div>
        <div>
          <h1 className="text-center text-5xl">43M+</h1>
          <p className="opacity-50">
            {arbSwapHomeDictionary[locale]?.cryptoTransactions}
          </p>
        </div>
        <div>
          <h1 className="text-center text-5xl">$470B</h1>
          <p className="opacity-50">
            {arbSwapHomeDictionary[locale]?.assetsOnPlatform}
          </p>
        </div>
      </div>
      <div className="mt-16 h-[995px] bg-[url('/img/map.png')] bg-cover bg-no-repeat">
        <div className="mt-20 h-[995px] bg-[url('/img/ellipses.png')] bg-cover bg-no-repeat">
          <div className="flex justify-center pl-10 pt-80">
            <Image
              src={'/img/cryptocoin2.png'}
              alt="Crypto Coin 2"
              width={384}
              height={300}
            />
          </div>
          <div className="pt-28">
            <p className="text-center text-2xl tracking-widest text-orange-500">
              {arbSwapHomeDictionary[locale]?.sendAndRecieve}
            </p>
            <p className="mt-10 text-center text-5xl">
              {arbSwapHomeDictionary[locale]?.sendAndRecieveDesc}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SolanaStatistics
