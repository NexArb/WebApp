'use client'

import React from 'react'
import { useModalStore } from '@/lib/store'
import { useRouter } from 'next/navigation'

type ModalProp = Readonly<{
  children: React.ReactNode
  routerBack: string
}>

const Modal = ({ children, routerBack }: ModalProp) => {
  const router = useRouter()
  const { showModal, toggleModal } = useModalStore()
  console.log(routerBack)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLElement
    if (target.id === 'wrapper') {
      try {
        toggleModal()
        router.push(routerBack)
      } catch (e) {
        console.log(e)
      }
    }
  }

  if (!showModal) return null
  return (
    <section
      id="wrapper"
      aria-modal="true"
      onClick={handleClick}
      className="fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
    >
      {children}
    </section>
  )
}

export default Modal
