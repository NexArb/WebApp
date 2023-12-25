import React from 'react'

import { useModalStore, useStepStore } from '@/lib/store'
import getFormattedDateTime from './CurrentDate'
import CustomButton from '@/components/CustomComponents/Button'

function PaymentMethod() {
  const nextStep = useStepStore((state) => state.nextStep)

  const { showModal, toggleModal } = useModalStore()
  if (!showModal) return null

  return (
    <div className="flex w-[577px] flex-col rounded-3xl bg-zinc-100 p-10 text-lg text-black">
      <div className="rounded-2xl bg-neutral-800 px-5 py-2 text-white">
        <div className="flex flex-row justify-between">
          <div className="">1 SOL = 24,324 USD</div>
          <div>{getFormattedDateTime()}</div>
        </div>
        <div className="flex flex-row justify-between">
          <div>1 SOL = 24,324 USD</div>
          <div>{getFormattedDateTime()}</div>
        </div>
      </div>
      <div className="mt-7 grid grid-cols-2">
        <div className="rounded-bl-3xl rounded-tl-3xl border border-blue-600 bg-blue-600 py-1 text-center text-white">
          Buy SOL
        </div>
        <div className="rounded-br-3xl rounded-tr-3xl border-2 border-blue-600 bg-white py-1 text-center text-blue-600">
          Sell SOL
        </div>
      </div>
      <form className="flex flex-col">
        <select
          className="mt-7 rounded-3xl border border-zinc-300 bg-white text-neutral-500"
          name="name"
          defaultValue={'DEFAULT'}
        >
          <option hidden disabled value="DEFAULT">
            Payment Method
          </option>
          <option value="xd">xd</option>
          <option value="xd">xd</option>
        </select>
        <select
          className="mt-7 rounded-3xl border border-zinc-300 bg-white text-neutral-500"
          name="name"
          defaultValue={'DEFAULT'}
        >
          <option hidden disabled value="DEFAULT">
            Amount
          </option>
          <option value="xd">xd</option>
          <option value="xd">xd</option>
        </select>
      </form>
      <span className="ml-1 mt-20 text-lg font-medium text-neutral-500">
        STEP 1
      </span>
      <span className="ml-1 mt-1">PAYMENT METHOD</span>
      <div className="mt-2 h-4 rounded-lg bg-white p-1">
        <div className="h-2 w-1/3 rounded bg-emerald-400"></div>
      </div>
      <div className="mt-9 grid grid-cols-2 gap-3">
        <CustomButton className="border bg-zinc-400 py-2" onClick={toggleModal}>
          <span className="text-white">Previous</span>
        </CustomButton>
        <CustomButton className="border bg-blue-600 py-2" onClick={nextStep}>
          <span className="text-white">Next</span>
        </CustomButton>
      </div>
    </div>
  )
}

export default PaymentMethod
