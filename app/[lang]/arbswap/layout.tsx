import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NexBridge',
  description: 'Next Gen Bridge'
}

type RootLayoutProps = Readonly<{
  children: React.ReactNode
  auth: React.ReactNode
}>

export default function DashboardLayout({ children, auth }: RootLayoutProps) {
  return (
    <section>
      {children}
      {auth}
    </section>
  )
}
