import { useModalStore } from '@/lib/store'
import React from 'react'
import getFormattedDateTime from './CurrentDate'

function Modal() {
  const { showModal, toggleModal } = useModalStore()
  if (!showModal) return null

  const handleClose = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement
    if (target.id === 'wrapper') toggleModal()
  }

  return (
    <div
      id="wrapper"
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div className="flex w-[577px] flex-col rounded-3xl bg-zinc-100 p-5 text-lg text-black">
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
        <div className="mt-7 flex flex-row justify-center">
          <div className="rounded-bl-3xl rounded-tl-3xl border border-blue-600 bg-blue-600 px-24 py-1 text-white">
            Buy SOL
          </div>
          <div className="rounded-br-3xl rounded-tr-3xl border-2 border-blue-600 bg-white px-24 py-1 text-blue-600">
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
        <span className="mt-20 text-lg font-medium text-neutral-500">
          STEP 1
        </span>
        <span>PAYMENT METHOD</span>
        <div className="h-4 rounded-[9px] bg-white p-1">
          <div className="h-2 w-1/3 rounded bg-emerald-400"></div>
        </div>
        <div className="mx-auto mt-9 flex flex-row gap-3">
          <button
            className="inline-flex items-center justify-center gap-[10.50px] rounded-[36.75px] border bg-zinc-400 px-12 py-2"
            onClick={toggleModal}
          >
            <div className="text-base font-medium text-white">Previous</div>
          </button>
          <button className="inline-flex items-center justify-center gap-[10.50px] rounded-[36.75px] border bg-blue-600 px-20 py-2">
            <div className="text-base font-medium text-white">Next</div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
