import React from 'react'
import Image from 'next/image'

const SolanaWorld = (): React.JSX.Element => {
  return (
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
  )
}

export default SolanaWorld
