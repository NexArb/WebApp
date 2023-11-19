'use client'

import Image from 'next/image'
import React from 'react'

import Link from 'next/link'
import { FooterSocials } from '@/constants'
import Contact from '@/components/HomePage/Contact'

function CustomFooter (): React.JSX.Element {
  return (
    <section className="flexCenter relative ">
      <Image
        src="/img/footer-bg.png"
        alt="mountains"
        fill
        className="max-md:hidden"
        quality={95}
      />
      <Image
        src="/img/footer-bg-small.png"
        alt="mountains"
        fill
        className="md:hidden"
        quality={95}
      />
      <div className="flexCenter z-20 flex-col ">
        <div className="mt-40 flex flex-col">
          <div className="mx-auto flex w-full max-w-[1440px] flex-1 gap-28 px-6 lg:px-20 xl:px-0">
            <div>
              <div className="mt-14 text-4xl font-bold leading-10">
                Let’s Keep in Touch
              </div>
              <div className="mt-8 h-36 w-[436px] text-2xl font-medium leading-loose">
                We have created a new product that will help designers,
                developers and companies create websites for their startups
                quickly and easily.
              </div>
              <div className="mt-20 flex flex-row gap-5">
                <Image
                  src={'/img/fa-phone.svg'}
                  alt="logo"
                  width={19}
                  height={19}
                />
                <div className="h-7 w-64 text-base font-normal leading-relaxed">
                  +1 555 505 5050
                </div>
              </div>
              <div className="mt-16 flex flex-row gap-5">
                <Image
                  src={'/img/fa-envelope.svg'}
                  alt="logo"
                  width={21}
                  height={16}
                />
                <div className="h-7 w-64 text-base font-normal leading-relaxed">
                  info@designmodo.com
                </div>
              </div>
              <div className="mt-14 flex flex-row gap-5">
                <Image
                  src={'/img/fa-building-o.svg'}
                  alt="logo"
                  width={19}
                  height={19}
                />
                <div className="h-20 w-72 text-base font-normal leading-relaxed">
                  San Francisco, CA560 Bush St & 20th Ave, Apt5 San Francisco,
                  230909
                </div>
              </div>
            </div>
            <Contact />
          </div>
          <div className="mb-10 mt-48 border bg-white bg-opacity-20" />
          <div className="mb-20 flex justify-between">
            <div className="text-sm leading-7 text-emerald-50">
              © 2023 NexArb. All Rights Reserved.
            </div>
            <div className="flex flex-row gap-6">
              {FooterSocials.map((e) => (
                <Link href="/" key={e.svg}>
                  <div className="flexCenter h-9 w-9 rounded-lg bg-white bg-opacity-20">
                    <Image src={e.svg} alt="logo" width={19} height={19} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CustomFooter
