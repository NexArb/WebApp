'use client'

import React from 'react'

import { useRouter } from 'next/navigation'
import { useModalStore } from '@/hooks/useStore'
import getFormattedDateTime from '@/hooks/useCurrentDate'
import Button from '@/components/CommonComponents/Button'
import Modal from '@/components/CommonComponents/Modal'

function Pricing() {
  const router = useRouter()
  const { toggleModal } = useModalStore()
  const modalKey = 'pricing'
  const otherModalKey = 'paymentMethod'
  const handlePrevious = () => {
    toggleModal(modalKey)
    toggleModal(otherModalKey)
  }

  const handleNext = () => {
    router.push('/arbswap/dashboard/offers')
    toggleModal(modalKey)
  }
  return (
    <Modal routerBack="/arbswap/dashboard">
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
        <div className="mt-8 grid grid-cols-2">
          <div className="rounded-bl-3xl rounded-tl-3xl border border-emerald-400  bg-emerald-400 py-1 text-center text-white">
            Buy SOL
          </div>
          <div className="rounded-br-3xl rounded-tr-3xl border-2 border-emerald-400 bg-white py-1 text-center  text-emerald-400">
            Sell SOL
          </div>
        </div>
        <form className="flex flex-col">
          <select
            className="mt-8 rounded-3xl border border-zinc-300 bg-white text-neutral-500"
            name="name"
            defaultValue={'DEFAULT'}
          >
            <option hidden disabled value="DEFAULT">
              Amount
            </option>
            <option value="xd">xd</option>
            <option value="xd">xd</option>
          </select>
          <select
            className="mt-8 rounded-3xl border border-zinc-300 bg-white text-neutral-500"
            name="name"
            defaultValue={'DEFAULT'}
          >
            <option hidden disabled value="DEFAULT">
              Price
            </option>
            <option value="xd">xd</option>
            <option value="xd">xd</option>
          </select>
        </form>
        <span className="ml-1 mt-16 text-lg font-medium text-neutral-500">
          STEP 2
        </span>
        <span className="ml-1 mt-1">PRICING</span>
        <div className="mt-2 h-4 rounded-lg bg-white p-1">
          <div className="h-2 w-2/3 rounded bg-emerald-400"></div>
        </div>
        <div className="mt-9 grid grid-cols-2 gap-3">
          <Button className="border bg-blue-600 py-2" onClick={handlePrevious}>
            <span className="text-white">Previous</span>
          </Button>
          <Button className="border bg-blue-600 py-2" onClick={handleNext}>
            <span className="text-white">Next</span>
          </Button>
        </div>
      </div>
    </Modal>
  )
}

export default Pricing
