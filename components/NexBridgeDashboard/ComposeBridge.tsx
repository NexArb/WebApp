import Image from 'next/image'
import React from 'react'
import { nexBridgeDashboardDictionary } from '@/localesContent'

const ComposeBridge = ({locale}: {locale: string}) => {
  return (
    <div>
      <div className="mt-10 w-full px-10 md:px-20 lg:px-40">
        <label htmlFor="fromInput" className="pl-4 text-lg text-white">
          {nexBridgeDashboardDictionary[locale]?.from}
        </label>
        <input
          id="fromInput"
          className="mb-4 w-full rounded-full border-2 border-white bg-transparent"
        />

        <label htmlFor="toInput" className="pl-4 text-lg text-white">
          {nexBridgeDashboardDictionary[locale]?.to}
        </label>
        <input
          id="toInput"
          className="w-full rounded-full border-2 border-white bg-transparent"
        />
      </div>
      <div className=" mx-10 mt-10 flex justify-center space-x-4 text-white lg:ml-40 lg:justify-start lg:text-left">
        <Image
          src="/img/rectangle-857.svg"
          alt="reactangle icon"
          height={20}
          width={20}
        />

        <p className="text-sm">
          {nexBridgeDashboardDictionary[locale]?.personalData}
        </p>
      </div>
      <div className="flexCenter mt-20">
        <button className="h-14 rounded-full bg-emerald-500 px-20 md:px-40">
          {nexBridgeDashboardDictionary[locale]?.startBridge}
        </button>
      </div>
    </div>
  )
}

export default ComposeBridge
