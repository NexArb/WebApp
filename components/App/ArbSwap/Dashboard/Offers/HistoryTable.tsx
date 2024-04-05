import React, { Fragment, useEffect, useState } from 'react'
import Image from 'next/image'
import { OfferListing } from '@/constants'

import Button from '@/components/Common/Button'
import { useModalStore } from '@/hooks/useStore'

import PaymentMethod from '../PaymentMethod'

type InputProps = 'Received' | 'Sent' | 'Users'

interface ChildProps {
  input: InputProps
}

const HistoryTable: React.FC<ChildProps> = ({ input }) => {
  const { showModal, toggleModal } = useModalStore()
  const modalKey = 'paymentMethod'
  console.log('show modal', showModal)
  const [openStates, setOpenStates] = useState(
    Array.from({ length: OfferListing.length }, () => false)
  )

  const toggleDropdown = (index: number) => {
    setOpenStates((prevStates) =>
      prevStates.map((state, i) => (i === index ? !state : state))
    )
  }

  const closeDropdown = (e: MouseEvent) => {
    const dropdownElement = document.querySelector('.dropdown')
    if (dropdownElement && dropdownElement !== e.target) {
      setOpenStates(Array.from({ length: OfferListing.length }, () => false))
    }
  }

  const handleUserProfile = (
    modalKey: string,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.stopPropagation()
    toggleModal(modalKey)
  }

  useEffect(() => {
    document.body.addEventListener('click', closeDropdown)

    return () => {
      document.body.removeEventListener('click', closeDropdown)
    }
  }, [])

  return (
    <section>
      <div className="px-8">
        <span className="text-lg font-medium text-neutral-400">{input}</span>
        <div className="w-full border border-neutral-400"></div>
      </div>
      <div className="custom-scrollbar flex h-[600px] overflow-y-auto bg-zinc-100">
        <table className="mx-auto max-w-full text-black">
          <tbody>
            {input !== 'Users' ? (
              <>
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
              </>
            ) : (
              <>
                {OfferListing.map((item, index) => (
                  <Fragment key={item.id}>
                    <tr className="flex items-center justify-center overflow-hidden font-medium">
                      <td className="py-8 pr-16">
                        <span className="p-2">{item.payment.name}</span>
                      </td>
                      <td>
                        <Button className="ml-5 mr-6 border border-emerald-400 bg-emerald-400 bg-opacity-10 px-4 py-2">
                          <span className="whitespace-nowrap text-sm text-emerald-400">
                            New Transaction
                          </span>
                        </Button>
                      </td>
                      <td>
                        <Button className="mr-3 border border-red-600 bg-red-600 bg-opacity-10 px-4 py-2">
                          <span className="whitespace-nowrap text-sm text-red-600">
                            Delete User
                          </span>
                        </Button>
                      </td>
                      <td>
                        <Button className="border border-blue-600 bg-blue-600 bg-opacity-10 px-4 py-2">
                          <span className="whitespace-nowrap text-sm text-blue-600">
                            Rate User
                          </span>
                        </Button>
                      </td>
                      <td>
                        <Button
                          className="bg-opacity-10 px-4 py-2"
                          onClick={() => toggleDropdown(index)}
                        >
                          <span className="font-extrabold">...</span>
                        </Button>
                        {openStates[index] && (
                          <ul className="dropdown absolute rounded-xl bg-white p-2 shadow-md">
                            <button
                              onClick={(e) =>
                                handleUserProfile('paymentMethod', e)
                              }
                            >
                              <li className="rounded-xl p-2 hover:bg-green-200">
                                User Profile
                              </li>
                            </button>
                            <li className="rounded-xl p-2 hover:bg-green-200">
                              Comment
                            </li>
                          </ul>
                        )}
                      </td>
                    </tr>
                  </Fragment>
                ))}
              </>
            )}
          </tbody>
        </table>
      </div>
      {showModal.paymentMethod && <PaymentMethod />}
    </section>
  )
}

export default HistoryTable
