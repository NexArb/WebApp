import Image from 'next/image'
import React from 'react'

const Solana = (): React.JSX.Element => {
  return (
    <div className="bg-gradient-to-br from-[#12056A] via-[#020A07] to-[#4A056A]">
      <div>
        <div className="flex">
          <div className="flex-auto mt-56 w-16 ml-40">
            <h1 className="text-7xl">Fastest & secure transfer Solana</h1>
            <p className="text-xl mt-5 w-[552px]">Join our peer-to-peer trading platform and use the fastest and most secure payment method for buying and selling Solana with users just like you.</p>
            <button className="bg-blue-600 p-4 w-48 rounded-full mt-20">Get Started</button>
          </div>
          <div className="flex-auto w-16 mt-32">
            <div className="flex justify-center backdrop-blur-lg bg-gradient-to-br from-[#A4B7FF]/10 via-[#FFFFFF]/10 to-[#000000]/10 rounded-[30px] p-7 w-96 ml-72">
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
                    <span className="bg-[#14E4A6] bg-opacity-50 rounded-full px-3 mt-5 text-black">USD</span>
                  </div>
                </div>
                <p className="pl-2 mt-3">Minimum : 10 USD</p>
                <div className="flex justify-center">
                  <button className="bg-gradient-to-l from-[#10E9A2] via-[#429FD6] to-[#9749FB] mt-16 p-3 w-64 rounded-full" type="submit">Search For Offers</button>
                </div>
              </form>
            </div>
            <div className="flex justify-end mt-20 mr-32">
              <button className="bg-gradient-to-l from-[#BB55FF] via-[#901EF1] to-[#9749FB] rounded-tl-full rounded-bl-full rounded-br-full py-4 px-12">Need Help?</button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-72">
        <p className="text-5xl text-center">Exchange Rates</p>
        <div className="flex justify-center">
          <div className="grid grid-cols-3 gap-3 w-2/3 mt-10 p-10">
            <div className="bg-[#171D33] w-80 rounded-2xl p-5">
              <div className="flex justify-between">
                <div>Bitcoin</div>
                <div className="text-sm opacity-50">SOL/BTC</div>
              </div>
              <div className="mt-8">
                <p className="text-2xl">0,00079 BTC</p>
              </div>
              <div className="flex justify-between mt-6">
                <div className="bg-[#FF8811] rounded-full py-1.5 px-5">
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
            <div className="bg-[#171D33] w-80 rounded-2xl p-5">
              <div className="flex justify-between">
                <div>Ethereum</div>
                <div className="text-sm opacity-50">SOL/ETH</div>
              </div>
              <div className="mt-8">
                <p className="text-2xl">0,013920 ETH</p>
              </div>
              <div className="flex justify-between mt-6">
                <div className="bg-[#9111FF] rounded-full py-1 px-4">
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
            <div className="bg-[#171D33] w-80 rounded-2xl p-5">
              <div className="flex justify-between">
                <div>USDT</div>
                <div className="text-sm opacity-50">USDT/SOL</div>
              </div>
              <div className="mt-8">
                <p className="text-2xl">$24,342</p>
              </div>
              <div className="flex justify-between mt-6">
                <div className="bg-[#11BBFF] rounded-full py-1 px-4">
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
      <div>
        <p className="text-5xl text-start ml-52 mt-48">Simple steps to get started</p>
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
        <div className="mt-72">
          <div className="flex justify-center">
            <Image
              src={'/img/solana-world.png'}
              alt='Solana World'
              width={1255}
              height={715}
            />
          </div>
          <div className="flex justify-center">
            <p className="text-5xl text-center">Get ready to explore the <br/> Solana world</p>
          </div>
          <div className="flex justify-center mt-8">
            <p>Join <b>NexArb</b> to get the latest news and start trading now.</p>
          </div>
          <div className="flex justify-center mt-20">
            <button className="bg-blue-600 rounded-full py-4 px-10">
              Sign Up Now
            </button>
          </div>
        </div>
        <div className="mt-48 mr-16">
          <div className="flex justify-center">
            <div>
              <Image
                src={'/img/comp.svg'}
                alt='Confidentiality'
                width={573}
                height={526}
              />
            </div>
            <div className="mt-36">
              <p className="text-5xl">Confidentiality</p>
              <p className="mt-8 w-96">We do not store personal data on our servers and never transfer it to third parties.</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Solana
