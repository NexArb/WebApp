'use client'

import React from 'react'
import Link from 'next/link'
import { footerDictionary } from '@/constants/localesContent'

interface HomeFooterProps {
  readonly locale: string
}

function HomeFooter({ locale }: HomeFooterProps) {
  return (
    <footer className="bg-gradient-about py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Products */}
          <div>
            <h3 className="text-xl font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="https://wallet.nexarb.com"
                  className="text-gray-300 hover:text-white transition"
                >
                  NexWallet
                </Link>
              </li>
              <li>
                <span className="text-gray-400">
                  NexCarb (Coming Soon)
                </span>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/docs"
                  className="text-gray-300 hover:text-white transition"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link 
                  href="/blog"
                  className="text-gray-300 hover:text-white transition"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xl font-bold mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://twitter.com/nexarb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a 
                  href="https://discord.gg/nexarb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition"
                >
                  Discord
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} NexArb. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default HomeFooter
