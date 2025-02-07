'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { links } from '@/constants'
import { navbarDictionary } from '@/constants/localesContent'
import { ModeToggle } from '../mode-toggle'

interface AppBarProps {
  readonly locale: string
}

function AppBar({ locale }: AppBarProps) {
  const [nav, setNav] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-main border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/img/gradient-arbswap.png"
              alt="NexArb Logo"
              width={120}
              height={32}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-white hover:text-gray-300 transition">
              {navbarDictionary[locale]?.home}
            </Link>
            <Link 
              href="https://ai.nexarb.com"
              className="px-4 py-2 bg-gradient-button rounded-full font-semibold hover:opacity-90 transition"
            >
              NexWallet
            </Link>
            <Link 
              href="/soon/nexcarb"
              className="px-4 py-2 bg-gradient-about rounded-full font-semibold hover:opacity-90 transition"
            >
              NexCarb (Soon)
            </Link>
            <ModeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden text-white"
            onClick={() => setNav(!nav)}
          >
            <div className="space-y-2">
              <span className={`block h-0.5 w-8 bg-current transform transition duration-300 ${nav ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`block h-0.5 w-8 bg-current transition duration-300 ${nav ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-8 bg-current transform transition duration-300 ${nav ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {nav && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 text-white hover:bg-gray-800 rounded-md"
                onClick={() => setNav(false)}
              >
                {navbarDictionary[locale]?.home}
              </Link>
              <Link
                href="https://wallet.nexarb.com"
                className="block px-3 py-2 text-white hover:bg-gray-800 rounded-md"
                onClick={() => setNav(false)}
              >
                NexWallet
              </Link>
              <Link
                href="/soon/nexcarb"
                className="block px-3 py-2 text-white hover:bg-gray-800 rounded-md"
                onClick={() => setNav(false)}
              >
                NexCarb (Soon)
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default AppBar
