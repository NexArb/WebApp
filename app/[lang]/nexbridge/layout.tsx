import React from 'react'
import { Metadata } from 'next'

// import NexBridgeCustomNavbar from '@/components/CustomNavbar/NexBridge'

// import { Providers } from '../providers'

export const metadata: Metadata = {
  title: 'NexBridge',
  description: 'Next Gen Bridge'
}

type RootLayoutProps = { children: React.ReactNode, params: { lang: string } }

export default function RootLayout({
  children // params
}: Readonly<RootLayoutProps>) {
  // const { lang } = params;
  return (
    <section>
      {/* <Providers> */}
      <div
        style={{
          background: "url('/img/nexbridge.png')",
          backgroundSize: 'cover'
        }}
      >
        {/*<NexBridgeCustomNavbar locale={lang} />*/}
        {children}
      </div>
      {/* </Providers> */}
    </section>
  )
}
