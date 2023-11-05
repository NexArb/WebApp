import { Metadata } from 'next'
import '../globals.css'
import NexBridgeCustomNavbar from '@/components/CustomNavbar/NexBridge'
import { MetamaskProvider } from "../../hooks/useMetamask";
import { Providers } from '../providers';

export const metadata: Metadata = {
  title: 'NexBridge',
  description: 'Next Gen Bridge',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Providers>
        <body style={{ "background": "url('./img/nexbridge.png')", "backgroundSize": "cover" }} >
          <NexBridgeCustomNavbar />
          {children}
        </body>
      </Providers>
    </html>
  )
}
