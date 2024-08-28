import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NexBridge',
  description: 'Next Gen Bridge'
}

type RootLayoutProps = Readonly<{
  children: React.ReactNode
}>


export default function DashboardLayout({ children }: RootLayoutProps) {
  return (
    <section>
      {children}
    </section>
        
)
}
