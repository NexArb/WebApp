import React from 'react'
import CustomFooter from '@/components/CustomFooter'
import CustomTextField from '@/components/CustomTextfield'

export default function Home (): React.JSX.Element {
  return (
    <main className="flex flex-col bg-gradient-main text-white">
      <CustomTextField />
      <CustomFooter />
    </main>
  )
}
