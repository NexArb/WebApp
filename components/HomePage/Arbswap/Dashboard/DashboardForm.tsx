import React, { useEffect } from 'react'

import { useStepStore } from '@/lib/store'
import PaymentMethod from './PaymentMethod'
import Pricing from './Pricing'
import Modal from '@/components/CommonComponents/Modal'

function DashboardForm() {
  const { step, resetStep } = useStepStore()

  useEffect(() => {
    resetStep()
  }, [resetStep])

  return (
    <Modal>
      {step === 0 && <PaymentMethod />}
      {step === 1 && <Pricing />}
    </Modal>
  )
}

export default DashboardForm
