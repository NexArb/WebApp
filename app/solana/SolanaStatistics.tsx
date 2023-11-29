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
        <div className="bg-[url('/img/map.png')] bg-no-repeat bg-cover h-[995px] mt-16">
          <div className="bg-[url('/img/ellipses.png')] bg-no-repeat bg-cover h-[995px] mt-20">
            <div className="flex justify-center pt-80 pl-10">
              <Image
                src={'/img/cryptocoin2.png'}
                alt='Crypto Coin 2'
                width={384}
                height={300}
              />
            </div>
            <div className="pt-28">
              <p className="text-2xl tracking-widest text-orange-500 text-center">SEND AND RECEIEVE</p>
              <p className="text-5xl text-center mt-10">Easily send and recieve Solana <br/> from everywhere</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default SolanaStatistics
