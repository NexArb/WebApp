import React from 'react'
import SwapCard from './SwapCard'

const Intro = (): React.JSX.Element => {
  return (
    <div>
        <div className="flex">
          <div className="flex-auto mt-56 w-16 ml-40">
            <h1 className="text-7xl">Fastest & secure transfer Solana</h1>
            <p className="text-xl mt-5 w-[552px]">Join our peer-to-peer trading platform and use the fastest and most secure payment method for buying and selling Solana with users just like you.</p>
            <button className="bg-blue-600 p-4 w-48 rounded-full mt-20">Get Started</button>
          </div>
          <div className="flex-auto w-16 mt-32">
            <SwapCard/>
            <div className="flex justify-end mt-20 mr-32">
              <button className="bg-gradient-to-l from-purple-500 via-purple-700 to-purple-600 rounded-tl-full rounded-bl-full rounded-br-full py-4 px-12">Need Help?</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Intro
