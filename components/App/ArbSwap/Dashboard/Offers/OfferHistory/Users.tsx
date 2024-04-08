import React, { Fragment, useEffect, useRef, useState } from 'react'
import { OfferListing } from '@/constants'

import Button from '@/components/Common/Button'
import { useModalStore } from '@/hooks/useStore'

export default function Users() {
  const { toggleModal } = useModalStore()
  const modalKey = 'userProfile'

  const [openStates, setOpenStates] = useState(
    Array.from({ length: OfferListing.length }, () => false)
  )

  const toggleDropdown = (index: number) => {
    setOpenStates((prevStates) =>
      prevStates.map((state, i) => (i === index ? !state : state))
    )
  }

  const dropdownRef = useRef<HTMLDivElement | null>(null)
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setOpenStates(Array.from({ length: OfferListing.length }, () => false))
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])
  return (
    <section>
      <div className="px-8">
        <span className="text-lg font-medium text-neutral-400">Users</span>
        <div className="w-full border border-neutral-400"></div>
      </div>
      <div className="custom-scrollbar flex h-[600px] overflow-y-auto bg-zinc-100">
        <table className="mx-auto max-w-full text-black">
          <tbody>
            <div ref={dropdownRef}>
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
                          <button onClick={() => toggleModal(modalKey)}>
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
            </div>
          </tbody>
        </table>
      </div>
    </section>
  )
}
