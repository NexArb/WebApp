'use client'

import React, { useEffect, useRef } from 'react'
import { useModalStore } from '@/lib/store'
import { useRouter } from 'next/navigation'

type ModalProp = Readonly<{
  children: React.ReactNode
}>

const Modal = ({ children }: ModalProp) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const router = useRouter()
  const { showModal, toggleModal } = useModalStore()

  // Add event listener on component mount and remove on unmount
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        toggleModal()
        router.back()
      }
    }
    const handleOutSideClick = (event: MouseEvent): void => {
      if (!ref.current?.contains(event.target as Node)) {
        toggleModal()
        router.back()
      }
    }

    window.addEventListener('keydown', handleEsc)
    window.addEventListener('mousedown', handleOutSideClick)
    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('keydown', handleEsc)
      window.removeEventListener('mousedown', handleOutSideClick)
    }
  }, [router, toggleModal])

  // If clicked outside don't show modal anymore
  if (!showModal) return null
  return (
    <section
      id="wrapper"
      aria-modal="true"
      className="fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
    >
      <div ref={ref}>{children}</div>
    </section>
  )
}

export default Modal
