'use client'

import Link from 'next/link'
import React, { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { useModalStore } from '@/lib/store'

type ModalProp = Readonly<{
  children: React.ReactNode
}>

const Modal = ({ children }: ModalProp) => {
  const pathname = usePathname()
  const { showModal, toggleModal } = useModalStore()

  // Add event listener on component mount and remove on unmount
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        toggleModal()
      }
    }

    window.addEventListener('keydown', handleEsc)

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('keydown', handleEsc)
    }
  }, [toggleModal]) // Empty dependency array ensures this runs once on mount and cleanup on unmount

  // If clicked outside don't show modal anymore
  if (!showModal) return null

  // If it's a keyboard event, only handle if 'Enter' or 'Space' was pressed
  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLElement
    if (target.id === 'wrapper') {
      if (
        event instanceof KeyboardEvent &&
        !['Enter', ' '].includes(event.key)
      ) {
        return
      }
      toggleModal()
    }
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLElement
    if (target.id === 'wrapper') {
      toggleModal()
    }
  }

  if (pathname === '/') return null
  return (
    <section
      id="wrapper"
      onKeyDown={handleKeyDown}
      onClick={handleClick}
      className="fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
      tabIndex={0}
    >
      <Link href="/" className="" />
      {children}
    </section>
  )
}

export default Modal
