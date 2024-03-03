import React from 'react'
import SwapCard from './SwapCard'
import { arbSwapHomeDictionary } from '@/localesContent'

interface IntroProps {
  readonly locale: string
}

const Intro: React.FC<IntroProps> = ({ locale }) => {
  return (
    <div className="mx-auto flex w-4/5 flex-col lg:flex-row lg:items-center">
      {/* // <div className="flex  flex-col lg:flex-row lg:items-center"> */}
      <div className="flex flex-col items-center p-16 lg:w-1/2 lg:pl-24">
        <h1 className="text-4xl lg:text-7xl">
          {arbSwapHomeDictionary[locale]?.introHeader}
        </h1>
        <p className="mt-4 max-w-md text-base lg:mt-5 lg:max-w-lg lg:text-xl">
          {arbSwapHomeDictionary[locale]?.introDescription}
        </p>
        <button className="mt-6 rounded-full bg-blue-600 px-6 py-3 lg:mt-10 lg:px-8 lg:py-4">
          {arbSwapHomeDictionary[locale]?.getStarted}
        </button>
      </div>
      <div className="mt-6 lg:mt-0 lg:w-1/2 lg:pl-12">
        <SwapCard locale={locale} />
      </div>
    </div>
  )
}

export default Intro
