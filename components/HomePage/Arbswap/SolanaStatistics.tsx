import React from 'react'
import Image from 'next/image'

const SolanaStatistics = (): React.JSX.Element => {
  return (
    <div>
        <div className="flex justify-evenly mt-32">
          <div>
            <h1 className="text-5xl text-center">5M+</h1>
            <p className="opacity-50">User worldwide</p>
          </div>
          <div>
            <h1 className="text-5xl text-center">120</h1>
            <p className="opacity-50">Country Supported</p>
          </div>
            <div>
              <h1 className="text-5xl text-center">43M+</h1>
              <p className="opacity-50">Crypto Transactions</p>
            </div>
            <div>
              <h1 className="text-5xl text-center">$470B</h1>
              <p className="opacity-50">Assets on Platform</p>
            </div>
        </div>
        <div className="bg-[url('/img/map.png')] bg-no-repeat bg-contain lg:bg-cover w-full h-auto mt-16">
          <div className="bg-[url('/img/ellipses.png')] bg-no-repeat bg-contain lg:bg-cover w-full h-auto mt-20">
            <div className="flex justify-center lg:pt-80 lg:pl-10">
              <Image
                src={'/img/cryptocoin2.png'}
                alt='Crypto Coin 2'
                width={384}
                height={300}
                className="mx-auto max-w-full"
              />
            </div>
            <div className="lg:pt-28">
              <p className="text-xl lg:text-2xl tracking-widest text-orange-500 text-center">SEND AND RECEIEVE</p>
              <p className="text-3xl lg:text-5xl text-center mt-4 lg:mt-10">Easily send and recieve Solana <br/> from everywhere</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default SolanaStatistics
