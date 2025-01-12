'use client'

import React, { useMemo } from 'react'
import { FormDataProvider } from '@/context/offerFormDataContext'
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'
import {
  ConnectionProvider,
  WalletProvider
} from '@solana/wallet-adapter-react'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import { clusterApiUrl } from '@solana/web3.js'

import ArbSwapNavbar from '@/components/CustomNavbar/ArbSwap'

require('@solana/wallet-adapter-react-ui/styles.css')

type RootLayoutProps = Readonly<{
  children: React.ReactNode
  params: { lang: string }
}>

export default function DashboardLayout({ children, params }: RootLayoutProps) {
  const network = WalletAdapterNetwork.Devnet
  const endpoint = useMemo(() => clusterApiUrl(network), [network])
  const wallets = useMemo(() => [], [])

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <FormDataProvider>
            <section className="min-h-screen overflow-hidden bg-gradient-to-t from-purple-950 via-slate-900 to-slate-950">
              <ArbSwapNavbar locale={params.lang} />
              {children}
            </section>
          </FormDataProvider>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}
