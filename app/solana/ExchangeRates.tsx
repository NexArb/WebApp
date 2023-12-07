import React from 'react'
import Image from 'next/image'

const ExchangeRates = (): React.JSX.Element => {
  return (
    <div className="mt-72">
      <p className="text-center text-5xl">Exchange Rates</p>
      <div className="flex justify-center">
        <div className="mt-10 grid w-2/3 grid-cols-3 gap-3 p-10">
          <div className="w-80 rounded-2xl bg-indigo-950 p-5">
            <div className="flex justify-between">
              <div>Bitcoin</div>
              <div className="text-sm opacity-50">SOL/BTC</div>
            </div>
            <div className="mt-8">
              <p className="text-2xl">0,00079 BTC</p>
            </div>
            <div className="mt-6 flex justify-between">
              <div className="rounded-full bg-orange-600 px-5 py-1.5">
                +0.23%
              </div>
              <div>
                <Image
                  src={'/img/bitcoin-curve.png'}
                  alt="Bitcoin Curve"
                  width={100}
                  height={31}
                />
              </div>
            </div>
          </div>
          <div className="w-80 rounded-2xl bg-indigo-950 p-5">
            <div className="flex justify-between">
              <div>Ethereum</div>
              <div className="text-sm opacity-50">SOL/ETH</div>
            </div>
            <div className="mt-8">
              <p className="text-2xl">0,013920 ETH</p>
            </div>
            <div className="mt-6 flex justify-between">
              <div className="rounded-full bg-purple-700 px-4 py-1">+0.23%</div>
              <div>
                <Image
                  src={'/img/ethereum-curve.png'}
                  alt="Ethereum Curve"
                  width={106}
                  height={31}
                />
              </div>
            </div>
          </div>
          <div className="w-80 rounded-2xl bg-indigo-950 p-5">
            <div className="flex justify-between">
              <div>USDT</div>
              <div className="text-sm opacity-50">USDT/SOL</div>
            </div>
            <div className="mt-8">
              <p className="text-2xl">$24,342</p>
            </div>
            <div className="mt-6 flex justify-between">
              <div className="rounded-full bg-blue-500 px-4 py-1">+0.23%</div>
              <div>
                <Image
                  src={'/img/usdt-curve.png'}
                  alt="USDT Curve"
                  width={101}
                  height={31}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-14 flex justify-center">
        <button className="rounded-full border border-solid border-blue-500 px-6 py-2 text-blue-500">
          Connect Your Wallet
        </button>
      </div>
      <div className="mr-44 flex justify-end">
        <Image
          src={'/img/cryptocoin.png'}
          alt="Crypto Coin"
          width={150}
          height={150}
        />
      </div>
    </div>
  )
}

export default ExchangeRates
