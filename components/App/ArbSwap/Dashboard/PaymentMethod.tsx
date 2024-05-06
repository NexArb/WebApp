'use client'

import React, { useEffect, useState } from 'react'

import Button from '@/components/Common/Button'
import Modal from '@/components/Common/Modal'
import getFormattedDateTime from '@/hooks/useCurrentDate'
import { modalStore } from '@/hooks/useStore'
import redstone from "redstone-api";

function PaymentMethod() {
  const modalKey = 'paymentMethod'
  const otherModalKey = 'pricing'
  const [solToUSD, setSolToUSD] = useState(0.0);

  const { toggleModal } = modalStore()

  const handleNext = () => {
    toggleModal(modalKey)
    toggleModal(otherModalKey)
  }


  const handleClose = () => {
    toggleModal(modalKey)
  }

  const fetchSolToUSD = async () => {
    const price = await redstone.getPrice("SOL");
    setSolToUSD(price.value);
  }

  useEffect(() => {
    fetchSolToUSD();
  })

  return (
    <Modal>
      <div className="w-[577px] flex-col rounded-3xl bg-zinc-100 p-10 text-lg text-black">
        <div className="rounded-2xl bg-neutral-800 px-5 py-2 text-white">
          <div className="flex flex-row justify-between">
            <div className="">{solToUSD !== 0.0 ? `1 SOL = ${solToUSD.toFixed(3)} USD` : 'Loading...'}</div>
            <div>{getFormattedDateTime()}</div>
          </div>
          <div className="flex flex-row justify-between">
            <div>{solToUSD !== 0.0 ? `1 SOL = ${solToUSD.toFixed(3)} USD` : 'Loading...'}</div>
            <div>{getFormattedDateTime()}</div>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-2">
          <div className="rounded-bl-3xl rounded-tl-3xl border border-blue-600 bg-blue-600 py-1 text-center text-white">
            Buy SOL
          </div>
          <div className="rounded-br-3xl rounded-tr-3xl border-2 border-blue-600 bg-white py-1 text-center text-blue-600">
            Sell SOL
          </div>
        </div>
        <form className="flex flex-col">
          <select
            className="mt-8 rounded-3xl border border-zinc-300 bg-white text-neutral-500"
            name="paymentMethod"
            defaultValue={'DEFAULT'}
          >
            <option hidden disabled value="DEFAULT">
              Payment Method
            </option>
            <option value="creditCard">Credit Card</option>
            <option value="bankCard">Bank Card</option>
            <option value="paypal">Paypal</option>
            <option value="applePay">Apple Pay</option>
          </select>
          <select
            className="mt-8 rounded-3xl border border-zinc-300 bg-white text-neutral-500"
            name="country"
            defaultValue={'DEFAULT'}
          >
            <option hidden disabled value="DEFAULT">
              Country
            </option>
            <option value="tr">Turkey</option>
            <option value="us">United States</option>
            <option value="uk">United Kindom</option>
            <option value="de">Germany</option>
          </select>
          <input
            className="mt-8 rounded-3xl border border-zinc-300 bg-white text-neutral-500"
            type="text"
            placeholder="Wallet Address"
          ></input>
        </form>
        <div className="flex flex-col">
          <span className="ml-1 mt-16 text-lg font-medium text-neutral-500">
            STEP 1
          </span>
          <span className="ml-1 mt-1">PAYMENT METHOD</span>
        </div>
        <div className="mt-2 h-4 rounded-lg bg-white p-1">
          <div className="h-2 w-1/3 rounded bg-emerald-400"></div>
        </div>
        <div className="mt-9 grid grid-cols-2 gap-3">
          <Button className="border bg-zinc-400 py-2" onClick={handleClose}>
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

export default PaymentMethod
