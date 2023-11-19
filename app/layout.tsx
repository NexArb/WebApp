import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import React from 'react'
import CustomFooter from '@/components/CustomFooter'
import AppBar from '@/components/CustomNavbar'

const dmSans = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NexArb',
  description: 'Digital Solutions for the Future'
}

type RootLayoutProps = Readonly<{
  children: React.ReactNode
}>

export default function RootLayout({
  children
}: RootLayoutProps): React.JSX.Element {
  return (
    <html lang="en">

      <body className={dmSans.className}>
        <AppBar />
        {children}
        <CustomFooter />
      </body>
    </html>
  )
}
