import React from 'react'
import Image from 'next/image'

import CustomButton from '@/components/CustomButton'
import CustomNavbar from '@/components/CustomNavbar'

function Hero() {
  return (
    <section className="flex flex-col">
      <CustomNavbar />
      <Image
        src="/img/hero-bg.png"
        alt="mountains"
        fill
        className="max-md:hidden"
        quality={95}
      />
      <Image
        src="/img/hero-bg-small.png"
        alt="mountains"
        fill
        className="md:hidden"
        quality={95}
      />
      <div className="relative flex min-h-[100vh] flex-col items-end justify-center pb-[7vh]">
        <div className="mx-auto mb-6 text-center text-7xl font-bold leading-[86px] lg:w-[692px]">
          Digital Solutions for the Future
        </div>
        <div className="mx-auto mb-16 text-center text-2xl font-medium leading-loose lg:w-[794.88px]">
          Startup Framework gives you complete freedom over your creative
          process — you don’t have to think about any technical aspects. There
          are no limits and absolutely no coding.{' '}
        </div>
        <CustomButton
          className="h-16 w-60 bg-gradient-button"
          text="Let's Meet"
        />
      </div>
    </section>
  )
}

export default Hero
