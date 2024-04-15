import React from 'react'

import ArbSwapNavbar from '@/components/CustomNavbar/ArbSwap'

type RootLayoutProps = Readonly<{
  children: React.ReactNode
  params: { lang: string }
}>

export default function DashboardLayout({ children, params }: RootLayoutProps) {
  return (
    <section className="min-h-screen overflow-hidden bg-gradient-to-t from-purple-950 via-slate-900 to-slate-950">
      <ArbSwapNavbar locale={params.lang} />
      {children}
    </section>
  )
}
