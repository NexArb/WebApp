import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function AppBar() {
  return (
    <nav className="z-10">
      <div className="flex items-center justify-evenly p-0">
        <div className="mr-0.5 mt-3">
          <Image
            src="/img/nexarb_logo.png"
            width={170}
            height={38}
            alt="Nexarb Logo"
          />
        </div>
        <div className="mt-5 flex items-center p-6 text-base font-semibold">
          <Link className="px-5" href="/about">
            About Us
          </Link>
          <Link className="px-5" href="/team">
            Our Team
          </Link>
          <Link className="px-5" href="/contact">
            Contact
          </Link>
          <Link className="px-3" href="/solana">
            <div className="rounded-full bg-gradient-button p-px">
              <div className="rounded-full bg-gradient-about px-4 py-1 text-center">
                SOLANA
              </div>
            </div>
          </Link>
          <Link className="px-3" href="/near">
            <div className="mx-2 rounded-full bg-gradient-button p-px">
              <div className="rounded-full bg-gradient-about px-4 py-1 text-center">
                NEAR
              </div>
            </div>
          </Link>
          <Link className="px-3" href="/join-us">
            <div className="rounded-full bg-blue-500 px-5 py-1">
              <span className="text-sm font-medium">Join Us</span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default AppBar
