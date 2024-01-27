import React from 'react'
import Image from 'next/image'
import { arbSwapHomeDictionary } from '@/localesContent'

interface SolanaWorldProps {
  readonly locale: string;
}

const SolanaWorld: React.FC<SolanaWorldProps> = ({locale}) => {
  return (
    <div className="mt-72">
      <div className="flex justify-center">
        <Image
          src={'/img/solana-world.png'}
          alt="Solana World"
          width={1255}
          height={715}
        />
      </div>
      <div className="flex justify-center">
        <p className="text-center text-5xl">
          {arbSwapHomeDictionary[locale]?.solanaWorld}
        </p>
      </div>
      <div className="mt-8 flex justify-center">
        <p>
          {arbSwapHomeDictionary[locale]?.solanaWorldDescription}
        </p>
      </div>
      <div className="mt-20 flex justify-center">
        <button className="rounded-full bg-blue-600 px-10 py-4">
          {arbSwapHomeDictionary[locale]?.signUpNow}
        </button>
      </div>
    </div>
  )
}

export default SolanaWorld
