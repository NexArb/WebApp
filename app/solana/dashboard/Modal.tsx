import React from 'react'

import { useModalStore, useStepStore } from '@/lib/store'
import PaymentMethod from './PaymentMethod'
import Pricing from './Pricing'

function Modal() {
  const { step, resetStep } = useStepStore()

  const { showModal, toggleModal } = useModalStore()
  if (!showModal) return null

  const handleClose = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement
    if (target.id === 'wrapper') {
      toggleModal()
      resetStep()
    }
  }

  return (
    <div
      id="wrapper"
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm"
      onClick={handleClose}
    >
      {step === 0 && <PaymentMethod />}
      {step === 1 && <Pricing />}
    </div>
  )
}

export default Modal
