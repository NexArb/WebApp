import React from 'react'
import { arbSwapHomeDictionary } from '@/constants/localesContent'

interface StepsProps {
  readonly locale: string
}

const Steps: React.FC<StepsProps> = ({ locale }) => {
  return (
    <div>
      <p className="mx-auto mt-48 text-center text-5xl">
        {arbSwapHomeDictionary[locale]?.stepsHeader}
      </p>
      <div className="mt-24 grid grid-flow-col grid-rows-3 justify-evenly gap-20">
        <div>
          <div className="flex">
            <div className="mr-4">
              <p className="text-5xl opacity-50">01.</p>
            </div>
            <div>
              <p className="text-xl">
                {arbSwapHomeDictionary[locale]?.quickSignUp}
              </p>
              <p className="mt-3 opacity-60">
                {arbSwapHomeDictionary[locale]?.quickSignUpDesc}
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex">
            <div className="mr-4">
              <p className="text-5xl opacity-50">02.</p>
            </div>
            <div>
              <p className="text-xl">
                {arbSwapHomeDictionary[locale]?.securitySetup}
              </p>
              <p className="mt-3 opacity-60">
                {arbSwapHomeDictionary[locale]?.quickSignUpDesc}
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex">
            <div className="mr-4">
              <p className="text-5xl opacity-50">03.</p>
            </div>
            <div>
              <p className="text-xl">
                {arbSwapHomeDictionary[locale]?.connectWallet}
              </p>
              <p className="mt-3 opacity-60">
                {arbSwapHomeDictionary[locale]?.quickSignUpDesc}
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex">
            <div className="mr-4">
              <p className="text-5xl opacity-50">04.</p>
            </div>
            <div>
              <p className="text-xl">
                {arbSwapHomeDictionary[locale]?.startTrading}
              </p>
              <p className="mt-3 opacity-60">
                {arbSwapHomeDictionary[locale]?.startTradingDesc}
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex">
            <div className="mr-4">
              <p className="text-5xl opacity-50">06.</p>
            </div>
            <div>
              <p className="text-xl">
                {arbSwapHomeDictionary[locale]?.quickSignUp}
              </p>
              <p className="mt-3 opacity-60">
                {arbSwapHomeDictionary[locale]?.quickSignUpDesc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Steps
