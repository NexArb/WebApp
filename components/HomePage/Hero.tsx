import React from 'react'

import Button from '@/components/CommonComponents/Button'
import CustomNavbar from '@/components/CustomNavbar'
import { homeDictionary } from '@/localesContent'

interface HeroProps {
  readonly locale: string
}

function Hero({ locale }: HeroProps) {
  return (
    <section
      style={{
        backgroundImage: "url('/img/hero-bg-small.png')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }}
      className="flex w-full flex-col"
    >
      <CustomNavbar locale={locale} />
      <div className="flex min-h-[100vh] w-full flex-col items-end justify-center pb-[7vh]">
        <div className="mx-auto mb-6 text-center text-7xl font-bold leading-[86px] lg:w-[692px]">
          {homeDictionary[locale]?.digitalSolutions}
        </div>
        <div className="mx-auto mb-16 text-center text-2xl font-medium leading-loose lg:w-[794.88px]">
          {homeDictionary[locale]?.digitalSolutionsDesc}{' '}
        </div>
        <Button className="mx-auto mt-4 h-14 w-60 rounded-full bg-gradient-button">
          <span className="text-lg">{homeDictionary[locale]?.letsMeet}</span>
        </Button>
      </div>
    </section>
  )
}

export default Hero
