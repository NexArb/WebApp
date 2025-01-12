import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import redstone from 'redstone-api'

import Button from '@/components/Common/Button'
import { methods } from '@/components/Common/PaymentMethods'
import getFormattedDateTime from '@/hooks/useCurrentDate'

export type SearchParams = {
  payment_method: string
  amount: number
}

type FilterMenuProps = {
  isModalOpen: boolean
  setModalOpen: Function
  onSearch: (filter: SearchParams) => void
}

export default function DashboardFilter({
  isModalOpen,
  setModalOpen,
  onSearch
}: Readonly<FilterMenuProps>) {
  const [solToUSD, setSolToUSD] = useState(0.0)
  const [filter, setFilter] = useState<SearchParams>({
    payment_method: '',
    amount: 0
  })

  const closeModal = () => {
    setModalOpen(false)
  }

  const fetchSolToUSD = async () => {
    const price = await redstone.getPrice('SOL')
    setSolToUSD(price.value)
  }

  useEffect(() => {
    fetchSolToUSD()
  })

  return (
    <div
      className={`inset-0 h-[auto] w-[auto] ${
        isModalOpen
          ? 'absolute inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50'
          : 'hidden md:block'
      }`}
    >
      <div className="sm:w-5/5 md:w-2/10 mb-4 h-[739px] min-w-[100px] rounded-3xl border bg-zinc-100 p-9 backdrop-blur-3xl sm:!m-3 md:mb-0">
        <div
          className={'absolute block md:hidden'}
          style={{ right: '15px', top: '15px' }}
        >
          <button
            onClick={closeModal}
            className="z-20 rounded font-bold text-black"
          >
            <span className="text-sm">
              <Image src="/img/close.svg" alt="logo" width={24} height={24} />
            </span>
          </button>
        </div>
        <div className="text-[32px] font-bold text-slate-950">Buy SOL</div>
        <div className="mt-8 text-xl text-neutral-500">
          {solToUSD !== 0.0
            ? `1 SOL = ${solToUSD.toFixed(3)} USD`
            : 'Loading...'}
        </div>
        <div className="mt-3 text-xl text-neutral-500">
          <span>{getFormattedDateTime()}</span>
        </div>
        <div className={'w-5 text-black'}></div>

        <div className="mt-8 flex w-full flex-col rounded-lg">
          <select
            className="rounded-3xl border border-zinc-300 bg-white text-neutral-500"
            name="name"
            onChange={(event) =>
              setFilter({
                ...filter,
                payment_method: event.target.value
              })
            }
            defaultValue={'DEFAULT'}
          >
            <option hidden disabled value="DEFAULT">
              Payment Method
            </option>
            {methods.map((method) => {
              return <option value={method.value}>{method.label}</option>
            })}
          </select>
          <div className={'relative mt-7 flex items-center'}>
            <input
              className="w-full rounded-3xl border border-zinc-300 bg-white text-neutral-500"
              type="number"
              onChange={(event) =>
                setFilter({
                  ...filter,
                  amount: Number(event.target.value)
                })
              }
              placeholder="Amount"
            ></input>
            <span
              className={
                'absolute ml-[175px] flex w-[60px] justify-center rounded-3xl  bg-emerald-400 p-[0.35rem] text-center align-middle text-[14px] font-bold md:block '
              }
            >
              SOL
            </span>
          </div>
          <div className="mt-7 flex flex-row justify-around">
            <span className="text-xl font-medium text-neutral-500">
              Verified Users Only
            </span>
            <div className="flexCenter group rounded-[10px]">
              <input
                type="checkbox"
                className="h-6 w-6 cursor-pointer appearance-none rounded-[10px] bg-teal-400 text-teal-400 focus:ring-teal-100"
              />
            </div>
          </div>
          <div className="flexCenter mt-32 flex-1">
            <Button
              onClick={() => onSearch(filter)}
              className=" h-12 w-60 bg-gradient-button"
            >
              <span className="text-lg">Search for Offers</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
