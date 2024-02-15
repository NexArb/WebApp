import React from 'react'

import AppBar from '@/components/CustomNavbar'

type RootLayoutProps = Readonly<{
  children: React.ReactNode
  form: React.ReactNode
  params: {lang: string}
}>

export default function DashboardLayout({ children, form, params }: RootLayoutProps) {
  return (
    <section className="min-h-screen overflow-hidden bg-gradient-to-t from-purple-950 via-slate-900 to-slate-950">
      <AppBar locale={params.lang} />
      {children}
      {form}
    </section>
  )
}
