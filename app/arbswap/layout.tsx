import React from 'react'
import type { Metadata } from 'next'
import { DM_Sans as dmSansFont } from 'next/font/google'
import ArbSwapNavbar from '@/components/CustomNavbar/ArbSwap'

const dmSans = dmSansFont({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NexArb',
  description: 'Digital Solutions for the Future'
}

type RootLayoutProps = Readonly<{
  children: React.ReactNode
}>

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} text-white h-screen bg-gradient-to-br from-blue-950 via-black to-purple-900`}>
        <ArbSwapNavbar />
        {children}
      </body>
    </html>
  )
}
