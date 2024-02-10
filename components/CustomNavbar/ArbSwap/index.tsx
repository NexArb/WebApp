'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useModalStore } from '@/hooks/useStore'
import { arbswapNavbarLinks } from '@/constants'
import { arbswapNavbarDictionary } from '@/localesContent'

interface ArbSwapNavbarProps {
  readonly locale: string;
}

function ArbSwapNavbar({locale}: ArbSwapNavbarProps) {
  const [nav, setNav] = useState(false)
  const { toggleModal } = useModalStore()

  const commonStyles =
    'block h-1 rounded-sm bg-white transition-all duration-300 ease-out -translate-y-0.5'

  return (
    <nav className="z-10 p-10">
      <div className="flex items-center justify-evenly p-0">
        <button
          type="button"
          aria-label="nav"
          onClick={() => setNav(!nav)}
          className="z-20 pr-4 text-gray-500 md:hidden"
        >
          <div className="justify-end space-y-2">
            <span
              className={`${commonStyles} w-9 ${
                nav ? 'translate-y-1.5 rotate-45' : ''
              }`}
            />
            <span
              className={`${commonStyles} mx-3 w-6 ${nav ? 'hidden' : ''}`}
            />
            <span
              className={`${commonStyles} -mx-1 w-10 ${
                nav
                  ? 'mx-0 w-9 -translate-y-1.5 -rotate-45'
                  : '-translate-y-0.5'
              }`}
            />
          </div>
        </button>
        <div className="z-20 mr-0.5 mt-3">
          <Image
            src="/img/gradient-arbswap.png"
            width={162}
            height={36}
            alt="Arbswap Logo"
          />
        </div>
        <div className="mt-4 hidden items-center text-base font-semibold md:flex">
          <Link className="px-2 lg:px-5" href="/about">
            {arbswapNavbarDictionary[locale]?.aboutUs}
          </Link>
          <Link className="px-2 lg:px-5" href="/arbswap/offer">
            {arbswapNavbarDictionary[locale]?.createOffer}
          </Link>
          <Link className="px-2 lg:px-5" href="/arbswap/wallet">
            {arbswapNavbarDictionary[locale]?.wallet}
          </Link>
          <Link className="px-2 lg:px-5" href="/arbswap/support">
            {arbswapNavbarDictionary[locale]?.support}
          </Link>
          <Link
            className="px-1 lg:px-3"
            onClick={toggleModal}
            href="/arbswap/login"
          >
            <div className="rounded-full bg-gradient-button p-px">
              <div className="rounded-full bg-gradient-about px-4 py-1 text-center">
                {arbswapNavbarDictionary[locale]?.login}
              </div>
            </div>
          </Link>
        </div>
        {nav && (
          <ul className="absolute left-0 top-0 z-10 flex h-screen w-full flex-col items-center justify-center bg-gradient-main">
            {arbswapNavbarLinks.map(({ id, link }) => (
              <li key={id} className="cursor-pointer py-4 text-4xl capitalize">
                <Link onClick={() => setNav(!nav)} href={link}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  )
}

export default ArbSwapNavbar
