'use client'
import BridgeOptions from '@/components/NexBridgeDashboard/BridgeOptions'
import ComposeBridge from '@/components/NexBridgeDashboard/ComposeBridge'
import React, { useState } from 'react'

const Dashboard = () => {
  const buttons = [
    { key: 'compose', value: 'Compose' },
    { key: 'bridgeOptions', value: 'Bridge Options' }
  ]

  const [initialActiveButton, setInitialActiveButton] = useState(buttons[0].key)

  const handleButtonClick = (props: any) => {
    setInitialActiveButton(props)
  }

  return (
    <div className="dashboard flexCenter my-40 font-semibold">
      <div className="h-[616px] justify-center rounded-2xl bg-gray-700/50 shadow-lg backdrop-blur-md md:min-w-[720px] lg:min-w-[920px] xl:min-w-[1155px]">
        <div className="mx-12 my-10 grid grid-cols-1 gap-8 px-4 md:mx-40 md:grid-cols-2 ">
          {buttons.map((button) => (
            <button
              key={button.key}
              onClick={() => handleButtonClick(button.key)}
              className={`${
                initialActiveButton === button.key
                  ? 'bg-slate-200'
                  : 'border border-emerald-500 bg-transparent text-emerald-500'
              } h-[55px] rounded-full `}
            >
              {button.value}
            </button>
          ))}
        </div>
        {initialActiveButton === 'compose' && <ComposeBridge />}
        {initialActiveButton === 'bridgeOptions' && <BridgeOptions />}
      </div>
    </div>
  )
}

export default Dashboard
