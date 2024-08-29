import React from 'react'

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
    <div className="bg-gradient-main text-white">
      <Hero locale={lang} />
      <Crew locale={lang} />
      <HomeFooter locale={params.lang} />
    </div>
  )
}
