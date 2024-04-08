import React, { Fragment } from 'react'
import Image from 'next/image'
import { OfferListing } from '@/constants'

export default function Sent() {
  return (
    <section>
      <div className="px-8">
        <span className="text-lg font-medium text-neutral-400">Sent</span>
        <div className="w-full border border-neutral-400"></div>
      </div>
      <div className="custom-scrollbar flex h-[600px] overflow-y-auto bg-zinc-100">
        <table className="mx-auto max-w-full text-black">
          <tbody>
            {OfferListing.map((item) => (
              <Fragment key={item.id}>
                <tr className="flex items-center justify-center overflow-hidden font-medium">
                  <td className="pr-32">
                    <div className="inline-flex">
                      <span className="p-2">{item.payment.name}</span>
                      <Image
                        src={'/img/arrow.svg'}
                        alt="arrow image"
                        width={20}
                        height={2}
                      />
                      <span className="p-2">Your Wallet</span>
                    </div>
                  </td>
                  <td className="mt-6 flex flex-col pr-6 font-medium text-slate-950">
                    <span>{item.amount}</span>
                    <span className="p-1">{item.price}</span>
                  </td>
                  <td
                    className={`pl-4 ${
                      item.payment.check === 'APPROVED'
                        ? 'text-emerald-400'
                        : 'text-red-500'
                    }`}
                  >
                    {item.payment.check === 'APPROVED'
                      ? 'ACCEPTED'
                      : 'REJECTED'}
                  </td>
                </tr>
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
