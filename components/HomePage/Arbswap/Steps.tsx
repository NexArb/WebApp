import React from 'react'

const Steps = (): React.JSX.Element => {
  return (
    <div>
        <p className="text-5xl text-start lg:text-center lg:mr-[500px] mt-48">Simple steps to get started</p>
        <div className="grid grid-rows-3 grid-flow-col gap-20 justify-evenly mt-24">
          <div>
            <div className="flex">
              <div className="mr-4">
                <p className="text-5xl opacity-50">01.</p>
              </div>
              <div>
                <p className="text-xl">Quick sign-up</p>
                <p className="mt-3 opacity-60">It`ll take you 1 minutes top</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex">
              <div className="mr-4">
                <p className="text-5xl opacity-50">02.</p>
              </div>
              <div>
                <p className="text-xl">Security setup</p>
                <p className="mt-3 opacity-60">It`ll take you 1 minutes top</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex">
              <div className="mr-4">
                <p className="text-5xl opacity-50">03.</p>
              </div>
              <div>
                <p className="text-xl">Connect Wallet</p>
                <p className="mt-3 opacity-60">It`ll take you 1 minutes top</p>
              </div>
            </div>
          </div>
            <div>
              <div className="flex">
                <div className="mr-4">
                  <p className="text-5xl opacity-50">04.</p>
                </div>
                <div>
                  <p className="text-xl">Start trading</p>
                  <p className="mt-3 opacity-60">Start trading at your desired rate, and get paid.</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex">
                <div className="mr-4">
                  <p className="text-5xl opacity-50">05.</p>
                </div>
                <div>
                  <p className="text-xl">Lunch</p>
                  <p className="mt-3 opacity-60">Enjoy your trading experience</p>
                </div>
              </div>
            </div>
            <div>
              <button className="bg-blue-600 rounded-full py-3 px-8">Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Steps
