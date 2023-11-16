import { type Metadata } from 'next'
import '../globals.css'
import { Providers } from '../providers'
import React from 'react'
import NexBridgeCustomNavbar from '../../components/CustomNavbar/NexBridge'

export const metadata: Metadata = {
  title: 'NexBridge',
  description: 'Next Gen Bridge'
}

type RootLayoutProps = Readonly<{
  children: React.ReactNode
}>
export default function RootLayout ({ children }: RootLayoutProps): React.JSX.Element {
  return (
    <html lang="en">
      <Providers>
        <body
          style={{
            background: "url('./img/nexbridge.png')",
            backgroundSize: 'cover'
          }}
        >
          <NexBridgeCustomNavbar />
          {children}
        </body>
      </Providers>
    </html>
  )
}
