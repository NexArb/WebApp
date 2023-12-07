import React from 'react'

const Intro = (): React.JSX.Element => {
  return (
    <div>
      <div className="flex">
        <div className="ml-40 mt-56 w-16 flex-auto">
          <h1 className="text-7xl">Fastest & secure transfer Solana</h1>
          <p className="mt-5 w-[552px] text-xl">
            Join our peer-to-peer trading platform and use the fastest and most
            secure payment method for buying and selling Solana with users just
            like you.
          </p>
          <button className="mt-20 w-48 rounded-full bg-blue-600 p-4">
            Get Started
          </button>
        </div>
        <div className="mt-32 w-16 flex-auto">
          <div className="ml-72 flex w-96 justify-center rounded-[30px] bg-gradient-to-br from-blue-200/10 via-white/10 to-black/10 p-7 backdrop-blur-lg">
            <form>
              <div>
                <button className="w-40 rounded-l-full bg-blue-600 p-2">
                  Buy SOL
                </button>
                <button className="w-40 rounded-r-full bg-white p-2 text-blue-600">
                  Sell SOL
                </button>
              </div>
              <div className="mt-10">
                <span className="pl-2 pr-5">1 SOL = 24,342 USD</span>
                <span className="pl-5">12.10.2023 - 22:12</span>
              </div>
              <select
                className="mt-5 w-full rounded-full bg-white/10 backdrop-blur-sm"
                defaultValue={''}
                name="payment-method"
                id="payment-method"
              >
                <option value="" disabled>
                  Payment Method
                </option>
              </select>
              <div className="relative">
                <input
                  className="mt-5 w-full rounded-full bg-white/10 backdrop-blur-sm"
                  placeholder="Amount"
                />
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <span className="mt-5 rounded-full bg-green-500 bg-opacity-50 px-3 text-black">
                    USD
                  </span>
                </div>
              </div>
              <p className="mt-3 pl-2">Minimum : 10 USD</p>
              <div className="flex justify-center">
                <button
                  className="mt-16 w-64 rounded-full bg-gradient-to-l from-green-500 via-blue-500 to-purple-500 p-3"
                  type="submit"
                >
                  Search For Offers
                </button>
              </div>
            </form>
          </div>
          <div className="mr-32 mt-20 flex justify-end">
            <button className="rounded-bl-full rounded-br-full rounded-tl-full bg-gradient-to-l from-purple-500 via-purple-700 to-purple-600 px-12 py-4">
              Need Help?
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro
