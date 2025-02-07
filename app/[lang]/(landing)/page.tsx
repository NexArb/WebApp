import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Crew from '@/components/App/Landing/Crew'
import Hero from '@/components/App/Landing/Hero'
import Projects from '@/components/App/Landing/Projects'
import HomeFooter from '@/components/CustomFooter/HomeFooter'

interface HomeProps {
  readonly params: {
    readonly lang: string
  }
}

export default function Home({ params }: HomeProps) {
  const { lang } = params
  return (
    <main className="flex min-h-screen flex-col bg-gradient-main text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-4 py-20 text-center">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          NexArb
        </h1>
        <p className="mt-6 text-xl text-gray-200 max-w-2xl">
          Digital Solutions for the Future
        </p>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* NexWallet Card */}
            <div className="flex flex-col items-center p-8 bg-gradient-about rounded-lg border border-gray-700">
              <div className="h-16 w-16 mb-4">
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent mb-3">
                NexWallet
              </h3>
              <p className="text-gray-300 text-center mb-6">
                Manage your crypto wallet through natural conversation with AI
              </p>
              <Link 
                href="https://ai.nexarb.com" 
                className="px-6 py-2 bg-gradient-button rounded-full font-semibold hover:opacity-90 transition"
              >
                Launch App
              </Link>
            </div>

            {/* NexCarb Card */}
            <div className="flex flex-col items-center p-8 bg-gradient-about rounded-lg border border-gray-700">
              <div className="h-16 w-16 mb-4">
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-3">
                NexCarb
              </h3>
              <p className="text-gray-300 text-center mb-6">
                Revolutionary carbon credit trading platform
              </p>
              <span className="px-6 py-2 bg-gray-800 rounded-full font-semibold text-gray-400">
                Coming Soon
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Chains Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Supported Chains</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {chains.map((chain) => (
              <div key={chain.name} className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <Image
                  src={chain.logo}
                  alt={chain.name}
                  width={64}
                  height={64}
                  className="mb-4"
                />
                <h3 className="text-xl font-semibold">{chain.name}</h3>
                {chain.comingSoon && (
                  <span className="mt-2 text-sm text-gray-500">Coming Soon</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Wallet Integrations</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {wallets.map((wallet) => (
              <div key={wallet.name} className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <Image
                  src={wallet.logo}
                  alt={wallet.name}
                  width={48}
                  height={48}
                  className="mb-4"
                />
                <h3 className="text-lg font-semibold">{wallet.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Hero locale={lang} />
      <Projects locale={lang} />
      <Crew locale={lang} />
      <HomeFooter locale={params.lang} />
    </main>
  )
}

const chains = [
  { name: 'Solana', logo: '/protocols/solana.svg' },
  { name: 'Base', logo: '/protocols/base.svg' },
  { name: 'Ethereum', logo: '/protocols/ethereum.svg' },
  { name: 'Arbitrum', logo: '/protocols/arbitrum.svg', comingSoon: true },
  { name: 'StarkNet', logo: '/protocols/starknet.svg', comingSoon: true },
]

const wallets = [
  { name: 'Reown Wallet', logo: '/protocols/reown.svg' },
  { name: 'Privy', logo: '/protocols/privy.png' },
  { name: 'MetaMask', logo: '/protocols/metamask.png' },
  { name: 'Phantom', logo: '/protocols/phantom.svg' },
]
