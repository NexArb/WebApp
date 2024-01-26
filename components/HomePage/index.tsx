import React from 'react'

import Hero from './Hero'
import Projects from './Projects'
import Crew from './Crew'

function HomePage({params}: {params: {lang: string}}) {
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
