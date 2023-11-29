import React from 'react'
import Image from 'next/image'

const ExchangeRates = (): React.JSX.Element => {
  return (
    <div className="mt-72">
        <p className="text-5xl text-center">Exchange Rates</p>
        <div className="flex justify-center">
          <div className="grid grid-cols-3 gap-3 w-2/3 mt-10 p-10">
            <div className="bg-indigo-950 w-80 rounded-2xl p-5">
              <div className="flex justify-between">
                <div>Bitcoin</div>
                <div className="text-sm opacity-50">SOL/BTC</div>
              </div>
              <div className="mt-8">
                <p className="text-2xl">0,00079 BTC</p>
              </div>
              <div className="flex justify-between mt-6">
                <div className="bg-orange-600 rounded-full py-1.5 px-5">
                  +0.23%
                </div>
                <div>
                  <Image
                    src={'/img/bitcoin-curve.png'}
                    alt='Bitcoin Curve'
                    width={100}
                    height={31}
                  />
                </div>
              </div>
            </div>
            <div className="bg-indigo-950 w-80 rounded-2xl p-5">
              <div className="flex justify-between">
                <div>Ethereum</div>
                <div className="text-sm opacity-50">SOL/ETH</div>
              </div>
              <div className="mt-8">
                <p className="text-2xl">0,013920 ETH</p>
              </div>
              <div className="flex justify-between mt-6">
                <div className="bg-purple-700 rounded-full py-1 px-4">
                  +0.23%
                </div>
                <div>
                  <Image
                    src={'/img/ethereum-curve.png'}
                    alt='Ethereum Curve'
                    width={106}
                    height={31}
                  />
                </div>
              </div>
            </div>
            <div className="bg-indigo-950 w-80 rounded-2xl p-5">
              <div className="flex justify-between">
                <div>USDT</div>
                <div className="text-sm opacity-50">USDT/SOL</div>
              </div>
              <div className="mt-8">
                <p className="text-2xl">$24,342</p>
              </div>
              <div className="flex justify-between mt-6">
                <div className="bg-blue-500 rounded-full py-1 px-4">
                  +0.23%
                </div>
                <div>
                  <Image
                    src={'/img/usdt-curve.png'}
                    alt='USDT Curve'
                    width={101}
                    height={31}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-14">
          <button className="border border-solid border-blue-500 text-blue-500 px-6 py-2 rounded-full">Connect Your Wallet</button>
        </div>
        <div className="flex justify-end mr-44">
          <Image
            src={'/img/cryptocoin.png'}
            alt='Crypto Coin'
            width={150}
            height={150}
          />
        </div>
    </div>
  )
}

export default ExchangeRates
