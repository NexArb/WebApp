'use client'

import React from 'react'

import Hero from './Hero'
import Projects from './Projects'
import Crew from './Crew'

function HomePage (): React.JSX.Element {
  return (
    <>
      <Hero />
      <Projects />
      <Crew />
    </>
  )
}

export default HomePage