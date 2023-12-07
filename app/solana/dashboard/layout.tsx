import React from 'react'

import AppBar from '@/components/CustomNavbar'

type RootLayoutProps = Readonly<{
  children: React.ReactNode
}>

export default function DashboardLayout({ children }: RootLayoutProps) {
  return (
    <section>
      <AppBar />
      {children}
    </section>
  )
}
