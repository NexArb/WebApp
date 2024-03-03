import React from 'react'
import Button from '@/components/CommonComponents/Button'
import getFormattedDateTime from './CurrentDate'
import Image from 'next/image'

type FilterMenuProps = { isModalOpen: boolean; setModalOpen: Function }

const FilterMenu = ({ isModalOpen, setModalOpen }: FilterMenuProps) => {
  const closeModal = () => {
    setModalOpen(false)
  }

  const FilterForm = () => {
    return (
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
        <div className="mt-8 text-xl text-neutral-500">1 SOL = 24,342 USD</div>
        <div className="mt-3 text-xl text-neutral-500">
          <span>{getFormattedDateTime()}</span>
        </div>
        <div className={'w-5 text-black'}></div>

        <form className="mt-8 flex w-full flex-col rounded-lg">
          <select
            className="rounded-3xl border border-zinc-300 bg-white text-neutral-500"
            name="name"
            defaultValue={'DEFAULT'}
          >
            <option hidden disabled value="DEFAULT">
              Payment Method
            </option>
            <option value="">All</option>
            <option value="CreditCard">Credit Card</option>
            <option value="BankTransfer">Bank Transfer</option>
            <option value="PayPal">PayPal</option>
          </select>
          <div className={'relative mt-7 flex items-center'}>
            <input
              className="w-full rounded-3xl border border-zinc-300 bg-white text-neutral-500"
              type="number"
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
          <span className="ml-3 mt-1 text-sm text-neutral-400">
            Minimum : 10 USD
          </span>
          <select
            className="mt-5 rounded-3xl border border-zinc-300 bg-white text-neutral-500"
            name="name"
            defaultValue={'DEFAULT'}
          >
            <option hidden disabled value="DEFAULT">
              Offer Location
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
              Offer Owner Location
            </option>
            <option value="xd">xd</option>
            <option value="xd">xd</option>
          </select>
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
            <Button className=" h-12 w-60 bg-gradient-button">
              <span className="text-lg">Search for Offers</span>
            </Button>
          </div>
        </form>
      </div>
    )
  }

  return (
    <div className={'inset-0 h-[auto] w-[auto]'}>
      {isModalOpen ? (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
          {FilterForm()}
        </div>
      ) : (
        <div className={'hidden md:block'}>{FilterForm()}</div>
      )}
    </div>
  )
}

export default FilterMenu
