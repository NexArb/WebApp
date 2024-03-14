'use client'

import React, { Fragment, useEffect, useState } from 'react'

import { OfferListing } from '@/constants'
import DashboardTable from '@/components/HomePage/Arbswap/Dashboard/DashboardTable'
import Link from 'next/link'
import Image from 'next/image'
import DashboardFilter from '@/components/HomePage/Arbswap/Dashboard/DashboardFilter'
import PaymentMethod from '@/components/HomePage/Arbswap/Dashboard/PaymentMethod'
import { useModalStore } from '@/hooks/useStore'
import Pricing from '@/components/HomePage/Arbswap/Dashboard/Pricing'

function Dashboard() {
  const { showModal } = useModalStore()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleEsc = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsModalOpen(false)
    }
  }

  useEffect(() => {
    if (isModalOpen) {
      window.addEventListener('keydown', handleEsc)
    } else {
      window.removeEventListener('keydown', handleEsc)
    }
  }, [isModalOpen])

  return (
    <section className="justify-center pt-12 md:flex">
      {/* Modal toggle */}
      <Link
        className="absolute !bottom-5 left-4 z-10 rounded-3xl bg-emerald-400 px-2 py-2 outline-none md:hidden"
        onClick={() => setIsModalOpen(true)}
        href={'/arbswap/dashboard'}
      >
        <span className="text-sm">
          <Image src="/img/filter.svg" alt="logo" width={24} height={24} />
        </span>
      </Link>

      {/* Left Rectangle */}
      <Fragment key={'dashboard-filter'}>
        <DashboardFilter
          isModalOpen={isModalOpen}
          setModalOpen={setIsModalOpen}
        />
      </Fragment>
      {/* Right Rectangle */}
      <div className="sm:w-5/5 max-h-[739px] max-w-4xl  rounded-3xl border bg-zinc-100 px-3 py-4 backdrop-blur-[100px] sm:!m-3 md:w-4/5 md:px-7">
        <div className={' custom-scrollbar !scroll-p-6 overflow-y-scroll'}>
          <div className=" text-black">
            <div className=" mx-5 my-2 whitespace-nowrap border-0 border-black text-lg font-medium text-neutral-400 md:border-b">
              <span className="mr-5">Seller Information</span>
              <span className="mr-12">Payment Method</span>
              <span className="mr-24">Amount</span>
              <span className="">Price</span>
            </div>
          </div>
          <div className="custom-scrollbar h-[655px] w-[830px] scroll-p-96  flex-col  !whitespace-nowrap bg-zinc-100 py-0 ">
            <table className={' h-[655px]  w-[830px]'}>
              <tbody>
                {OfferListing.map((item) => (
                  <Fragment key={item.id}>
                    <DashboardTable {...item} />
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {showModal.paymentMethod && <PaymentMethod />}
      {showModal.pricing && <Pricing />}
    </section>
  )
}

export default Dashboard
