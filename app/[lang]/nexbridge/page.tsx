'use client'

import React from 'react'
import { nexBridgeHomeDictionary } from '@/localesContent'

interface NexBridgeHomePageProps {
  readonly params: {
    readonly lang: string
  }
}

function NexBridgeHomePage({ params }: NexBridgeHomePageProps) {
  return (
    <div className="flex h-screen w-screen flex-col justify-between self-stretch">
      <div className="flex w-3/5 flex-col justify-between self-center ">
        <div className="mt-32 flex flex-col items-center gap-8">
          <div className="relative flex flex-col items-center self-stretch pb-16">
            <div className="absolute left-0 mt-32 h-24 w-full text-center text-xl font-medium leading-[32px] text-white">
              {nexBridgeHomeDictionary[params.lang]?.description}
            </div>
            <div className="relative w-full text-center text-6xl font-bold leading-[86px] tracking-[-1] text-white">
              {nexBridgeHomeDictionary[params.lang]?.crossChain}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NexBridgeHomePage
