import React from 'react'

import Crew from './Crew'
import Hero from './Hero'
import Projects from './Projects'

interface HomePageProps {
  readonly params: {
    readonly lang: string
  }
}

function HomePage({ params }: HomePageProps) {
  const { lang } = params
  return (
    <>
      <Hero locale={lang} />
      <Projects locale={lang} />
      <Crew locale={lang} />
    </>
  )
}

export default HomePage
