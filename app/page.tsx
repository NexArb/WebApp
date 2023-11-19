import React from 'react'
import CustomFooter from '@/components/CustomFooter'
import HomePage from '@/components/HomePage'

export default function Home (): React.JSX.Element {
  return (
    <div className="flex flex-col bg-gradient-main text-white">
      <HomePage/>
    </div>
  )
}
