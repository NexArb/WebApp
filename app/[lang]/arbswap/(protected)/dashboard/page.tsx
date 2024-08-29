'use client'

import { Listing } from '@/types/dashboard'

import React, { Fragment, useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import DashboardFilter, { SearchParams } from '@/components/App/ArbSwap/Dashboard/DashboardFilter'
import DashboardTable from '@/components/App/ArbSwap/Dashboard/DashboardTable'
import PaymentMethod from '@/components/App/ArbSwap/Dashboard/PaymentMethod'
import Pricing from '@/components/App/ArbSwap/Dashboard/Pricing'
import { modalStore } from '@/hooks/useStore'
import { getListings } from '@/services/ApiService'
import CreateListing from '@/components/App/ArbSwap/Dashboard/CreateListing'

function Dashboard() {
  const { showModal } = modalStore()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [listings, setListings] = useState<Listing[]>([])
  const [filter,setFilter] = useState<SearchParams>()
  const searchedParam = useMemo(()=>{
    let tempList = listings;
    if(filter?.amount){
      tempList = tempList.filter((listing) => listing.amount > filter.amount)
    }
    if(filter?.payment_method){
      tempList = tempList.filter((listing)=>listing.payment_method == filter.payment_method)
    }
    return tempList
  },[filter,listings])

  const handleEsc = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsModalOpen(false)
    }
  }

  const { toggleModal } = modalStore()
  const modalKey = 'createListing'

  const getListingsFromApi = async () => {
    const listingsApi = await getListings();
    setListings(listingsApi?.data)
  }

  useEffect(() => {
    if (isModalOpen) {
      window.addEventListener('keydown', handleEsc)
    } else {
      window.removeEventListener('keydown', handleEsc)
    }
  }, [isModalOpen])

  useEffect(() => {
    getListingsFromApi()
  }, [])
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
          onSearch={(searhParam:SearchParams)=>{
            setFilter(searhParam)
          }}
          isModalOpen={isModalOpen}
          setModalOpen={setIsModalOpen}
        />
      </Fragment>
      {/* Right Rectangle */}
      <div className="sm:w-5/5 max-h-[739px] max-w-4xl rounded-3xl border bg-zinc-100 px-3 py-4 backdrop-blur-[100px] sm:!m-3 md:w-4/5 md:px-7">
        <div className={'custom-scrollbar overflow-y-auto scroll-smooth max-h-[calc(100%-64px)]'}>
          <table className="table-auto w-full">
            <thead>
              <tr className="text-black">
                <th>Seller Information</th>
                <th>Payment Method</th>
                <th>Amount</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {searchedParam?.map((listing) => {
                return (
                  <DashboardTable key={listing.id} listing={listing}/>
                )
              })}
            </tbody>
          </table>
          <div className="w-full h-16 inset-x-0 absolute bottom-0 rounded-b-3xl bg-blue-600 flex justify-center gap-10">
            <button onClick={() => toggleModal(modalKey)}>Create New Listing</button>
            <button onClick={() => window.location.reload()}>Refresh Page</button>
          </div>
        </div>
      </div>
      {showModal.paymentMethod && <PaymentMethod />}
      {showModal.pricing && <Pricing />}
      {showModal.createListing && <CreateListing/>}
      
    </section>
  )
}

export default Dashboard;