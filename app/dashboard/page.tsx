'use client'

import CustomButton from '@/components/CustomButton'
import AppBar from '@/components/CustomNavbar'
import React, { Fragment } from 'react'
import { OfferListing } from '@/constants'
import Table from './Table'
import Modal from './Modal'
import getFormattedDateTime from './CurrentDate'

function page() {
  return (
    <section className="min-h-screen overflow-hidden bg-gradient-to-t from-purple-950 via-slate-900 to-slate-950">
      <AppBar />
      <div className="flexCenter gap-6 pt-12">
        {/* Left Rectangle */}
        <div className="max-h-[739px] rounded-3xl border bg-zinc-100 p-9 backdrop-blur-3xl">
          <div className="text-[32px] font-bold text-slate-950">Buy SOL</div>
          <div className="mt-8 text-xl text-neutral-500">
            1 SOL = 24,342 USD
          </div>
          <div className="mt-3 text-xl text-neutral-500">
            <span>{getFormattedDateTime()}</span>
          </div>
          <form className="mt-8 flex w-full flex-col rounded-lg">
            <select
              className="rounded-3xl border border-zinc-300 bg-white text-neutral-500"
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
              <label htmlFor="c1">
                <div className="flexCenter group rounded-[10px]">
                  <input
                    id="c1"
                    type="checkbox"
                    className="h-6 w-6 cursor-pointer appearance-none rounded-[10px] bg-teal-400 text-teal-400 focus:ring-teal-100"
                  />
                </div>
              </label>
            </div>
            <div className="flexCenter mt-32 flex-1">
              <CustomButton
                classText="text-lg"
                classButton="h-12 w-60 bg-gradient-button"
                text="Search for Offers"
              />
            </div>
          </form>
        </div>
        {/* Right Rectangle */}
        <div className="custom-scrollbar max-h-[739px] max-w-4xl flex-grow scroll-p-96 overflow-y-scroll rounded-3xl border bg-zinc-100 px-7 py-5 backdrop-blur-[100px]">
          <table className=" mx-auto max-w-full text-black">
            <thead>
              <tr className="border-b border-black text-lg text-neutral-400">
                <th className="px-4 pb-1 pt-2 font-medium">
                  Seller Information
                </th>
                <th className="px-4 pb-1 pt-2 font-medium">Payment Method</th>
                <th className="px-4 pb-1 pt-2 font-medium">Amount</th>
                <th className="px-4 pb-1 pt-2 font-medium">Price</th>
              </tr>
            </thead>
            <tbody>
              {OfferListing.map((item, index) => (
                <Fragment key={index}>
                  <Table {...item} />
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Modal />
    </section>
  )
}

export default page

// import React, { useState } from 'react'
// import { useForm } from 'react-hook-form'

// const StepOne = ({ onSubmit }) => {
//   const { register, handleSubmit } = useForm()
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <label htmlFor="name">Name</label>
//       <input id="name" {...register('name')} />
//       <label htmlFor="email">Email</label>
//       <input id="email" {...register('email')} />
//       <button type="submit">Next</button>
//     </form>
//   )
// }

// const StepTwo = ({ onSubmit, onBack, data }) => {
//   const { register, handleSubmit } = useForm({ defaultValues: data })
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <label htmlFor="address">Address</label>
//       <input id="address" {...register('address')} />
//       <label htmlFor="phone">Phone</label>
//       <input id="phone" {...register('phone')} />
//       <button type="button" onClick={onBack}>
//         Back
//       </button>
//       <button type="submit">Submit</button>
//     </form>
//   )
// }

// const Form = () => {
//   const [step, setStep] = useState(1)
//   const [data, setData] = useState({})

//   const handleStepOne = (values) => {
//     setData(values)
//     setStep(2)
//   }

//   const handleStepTwo = (values) => {
//     setData({ ...data, ...values })
//     // do something with the final data
//     console.log(data)
//   }

//   const handleBack = () => {
//     setStep(1)
//   }

//   return (
//     <div>
//       <h1>Form</h1>
//       {step === 1 && <StepOne onSubmit={handleStepOne} />}
//       {step === 2 && (
//         <StepTwo onSubmit={handleStepTwo} onBack={handleBack} data={data} />
//       )}
//     </div>
//   )
// }
