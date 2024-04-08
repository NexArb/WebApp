'use client'

import React from 'react'

import Button from '@/components/Common/Button'
import Modal from '@/components/Common/Modal'
import StarRating from '@/components/Common/StarRating'
import { useModalStore } from '@/hooks/useStore'

export default function UserProfile() {
  const modalKey = 'userProfile'

  const { toggleModal } = useModalStore()

  const handleClick = () => {
    toggleModal(modalKey)
  }

  return (
    // TODO: Add rhf along api service
    <Modal>
      <div className="flex w-[577px] flex-col gap-5 rounded-3xl bg-zinc-200 p-10 text-lg text-black">
        <div className="flex justify-between">
          <span>Dolphin0077</span>
          <div className="rounded-xl bg-zinc-100 p-2">
            <StarRating rating={3.5} />
          </div>
        </div>
        <input type="text" className="rounded-xl border-0 p-10" />
        <Button
          onClick={() => handleClick()}
          className="rounded-full bg-blue-600 px-6 py-2 text-white outline-none"
        >
          Review User
        </Button>
      </div>
    </Modal>
  )
}
