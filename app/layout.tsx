import './globals.css'

import React from 'react'
import type { Metadata } from 'next'
import { DM_Sans as dmSansFont } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import AppBar from '@/components/CustomNavbar'

const dmSans = dmSansFont({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NexArb - Digital Solutions for the Future',
  description: 'Explore NexArb\'s ecosystem of digital solutions including NexWallet and NexCarb'
}

type RootLayoutProps = Readonly<{
  children: React.ReactNode
}>

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html suppressHydrationWarning>
      <body className={`${dmSans.className} min-h-screen bg-gradient-main`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="nexarb-theme"
        >
          <AppBar locale={"en"} />
          <div className="pt-16">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
