import './globals.css'
import React, { ReactNode } from 'react'
import type { Metadata } from 'next'
import { DM_Sans as dmSansFont } from 'next/font/google'
import { defaultLocale } from '@/middleware'

const dmSans = dmSansFont({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NexArb',
  description: 'Digital Solutions for the Future'
}

export default function RootLayout({ children, params }: {children: ReactNode; params: {lang: string}}) {
  return (
    <html lang={params.lang ?? defaultLocale}>
      <body className={`${dmSans.className} text-white`}>{children}</body>
    </html>
  )
}
