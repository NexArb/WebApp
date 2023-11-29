import React from 'react'

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
            <div className="flex justify-center backdrop-blur-lg bg-gradient-to-br from-blue-200/10 via-white/10 to-black/10 rounded-[30px] p-7 w-96 ml-72">
              <form>
                <div>
                  <button className="bg-blue-600 p-2 w-40 rounded-l-full">Buy SOL</button>
                  <button className="bg-white text-blue-600 p-2 w-40 rounded-r-full">Sell SOL</button>
                </div>
                <div className="mt-10">
                  <span className="pl-2 pr-5">1 SOL = 24,342 USD</span>
                  <span className="pl-5">12.10.2023 - 22:12</span>
                </div>
                <select className="w-full mt-5 backdrop-blur-sm bg-white/10 rounded-full" defaultValue={''} name="payment-method" id="payment-method">
                  <option value='' disabled>Payment Method</option>
                </select>
                <div className="relative">
                  <input className="w-full mt-5 backdrop-blur-sm bg-white/10 rounded-full" placeholder='Amount'/>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <span className="bg-green-500 bg-opacity-50 rounded-full px-3 mt-5 text-black">USD</span>
                  </div>
                </div>
                <p className="pl-2 mt-3">Minimum : 10 USD</p>
                <div className="flex justify-center">
                  <button className="bg-gradient-to-l from-green-500 via-blue-500 to-purple-500 mt-16 p-3 w-64 rounded-full" type="submit">Search For Offers</button>
                </div>
              </form>
            </div>
            <div className="flex justify-end mt-20 mr-32">
              <button className="bg-gradient-to-l from-purple-500 via-purple-700 to-purple-600 rounded-tl-full rounded-bl-full rounded-br-full py-4 px-12">Need Help?</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Intro
