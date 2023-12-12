import React from 'react'
import SwapCard from './SwapCard'

const Intro = (): React.JSX.Element => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center">
      <div className="lg:w-1/2 lg:pl-24">
        <h1 className="text-4xl lg:text-7xl">Fastest & secure transfer Solana</h1>
        <p className="text-base lg:text-xl mt-4 lg:mt-5 lg:max-w-lg">
          Join our peer-to-peer trading platform and use the fastest and most secure payment method for buying and selling Solana with users just like you.
        </p>
        <button className="bg-blue-600 py-3 lg:py-4 px-6 lg:px-8 rounded-full mt-6 lg:mt-10">Get Started</button>
      </div>
        <div className="lg:w-1/2 lg:mt-0 lg:pl-12 mt-6">
          <SwapCard />
        </div>
    </div>
  )
}

export default Intro
