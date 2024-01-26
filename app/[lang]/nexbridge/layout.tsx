import { Metadata } from 'next'
import React from 'react'
import { Providers } from '../providers'
import NexBridgeCustomNavbar from '@/components/CustomNavbar/NexBridge'

export const metadata: Metadata = {
  title: 'NexBridge',
  description: 'Next Gen Bridge'
}

export default function RootLayout({ children, params }: {children: React.ReactNode, params: {lang: string}}) {
  const { lang } = params;
  return (
    <section>
      <Providers>
        <div
          style={{
            background: "url('/img/nexbridge.png')",
            backgroundSize: 'cover'
          }}
        >
          <NexBridgeCustomNavbar locale={lang} />
          {children}
        </div>
      </Providers>
    </section>
  )
}
