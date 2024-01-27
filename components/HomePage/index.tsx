import React from 'react'

import Hero from './Hero'
import Projects from './Projects'
import Crew from './Crew'

interface HomePageProps {
  readonly params: {
    readonly lang: string;
  }
}

function HomePage({params}: HomePageProps) {
  const { lang } = params;
  return (
    <>
      <Hero locale={lang}/>
      <Projects locale={lang} />
      <Crew locale={lang}/>
    </>
  )
}

export default HomePage
