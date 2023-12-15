import React, { useEffect } from 'react'

import { useDashboardStore, useStepStore } from '@/lib/store'
import PaymentMethod from './PaymentMethod'
import Pricing from './Pricing'

function Modal() {
  const { step, resetStep } = useStepStore()

  const { showModal, toggleModal } = useDashboardStore()

  // Add event listener on component mount and remove on unmount
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        toggleModal()
        resetStep()
      }
    }

    window.addEventListener('keydown', handleEsc)

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('keydown', handleEsc)
    }
  }, [resetStep, toggleModal]) // Empty dependency array ensures this runs once on mount and cleanup on unmount

  if (!showModal) return null

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLElement
    if (target.id === 'wrapper') {
      // If it's a keyboard event, only handle if 'Enter' or 'Space' was pressed
      if (
        event instanceof KeyboardEvent &&
        !['Enter', ' '].includes(event.key)
      ) {
        return
      }
      toggleModal()
      resetStep()
    }
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLElement
    if (target.id === 'wrapper') {
      toggleModal()
      resetStep()
    }
  }

  return (
    <button
      id="wrapper"
      onKeyDown={handleKeyDown}
      onClick={handleClick}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm"
      tabIndex={0}
    >
      {step === 0 && <PaymentMethod />}
      {step === 1 && <Pricing />}
    </button>
  )
}

export default Modal
