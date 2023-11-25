'use client'

import Image from 'next/image'
import React from 'react'

import Contact from '@/components/HomePage/Contact'
import CustomFooter from '@/components/CustomFooter'

function HomeFooter() {
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
          <div className="max-xl:flex-col mx-auto flex w-full min-w-full flex-1 gap-28 px-6 lg:px-20 xl:px-0">
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
                  src="/img/fa-phone.svg"
                  alt="logo"
                  width={19}
                  height={19}
                />
                <div className="h-7 w-64 text-base leading-relaxed">
                  +1 555 505 5050
                </div>
              </div>
              <div className="mt-16 flex flex-row gap-5">
                <Image
                  src="/img/fa-envelope.svg"
                  alt="logo"
                  width={21}
                  height={16}
                />
                <div className="h-7 w-64 text-base leading-relaxed">
                  info@designmodo.com
                </div>
              </div>
              <div className="mt-14 flex flex-row gap-5">
                <Image
                  src="/img/fa-building-o.svg"
                  alt="logo"
                  width={19}
                  height={19}
                />
                <div className="w-72 text-base leading-relaxed">
                  San Francisco, CA560 Bush St & 20th Ave, Apt5 San Francisco,
                  230909
                </div>
              </div>
            </div>
            <Contact />
          </div>
          <CustomFooter />
        </div>
      </div>
    </section>
  )
}

export default HomeFooter
