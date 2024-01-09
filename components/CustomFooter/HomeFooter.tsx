'use client'

import Image from 'next/image'
import React from 'react'

import Contact from '@/components/HomePage/Contact'
import CustomFooter from '@/components/CustomFooter'

function HomeFooter() {
  return (
    <section
      style={{
        background: "url('/img/footer-bg-small.png')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }}
      className="flexCenter "
    >
      <div className="flexCenter z-20 flex-col ">
        <div className="mt-40 flex flex-col">
          <div className="flex w-full min-w-full flex-1 px-6 max-xl:flex-col lg:px-20 xl:px-0">
            <div className="mb-6 w-1/2 px-6">
              <div className="mt-14 text-4xl font-bold leading-10">
                Let’s Keep in Touch
              </div>
              <div className="my-8 text-2xl font-medium leading-loose">
                We have created a new product that will help blockchain users,
                developers and companies to swap their assets or send messages on cross chain.
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-5">
                  <Image
                    src="/img/fa-phone.svg"
                    alt="logo"
                    width={19}
                    height={19}
                  />
                  <div className="text-base leading-relaxed">
                    +49 176 844 918 89
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <Image
                    src="/img/fa-envelope.svg"
                    alt="logo"
                    width={21}
                    height={16}
                  />
                  <div className="text-base leading-relaxed">
                    business@nexarb.com
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <Image
                    src="/img/fa-building-o.svg"
                    alt="logo"
                    width={19}
                    height={19}
                  />
                  <div className="text-base leading-relaxed">
                    Munich, Germany
                  </div>
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
