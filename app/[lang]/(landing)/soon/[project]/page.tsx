import React from 'react'
import {
  underConstructionDictionary
} from '@/constants/localesContent'

import AppBar from '@/components/CustomNavbar'

function About({ params }: Readonly<{ params: { lang: string, project: string } }>) {
  return (
    <div className="min-h-screen bg-gradient-about">
      <AppBar locale={params.lang} />
      <div className="flex flex-col items-center justify-center">
        <h1 className="mt-20 text-6xl font-bold text-white">
          {params.project.toUpperCase()}
        </h1>
        <video
          src={params.project == "nexswap" ? "/img/nexarb-promo.mp4" : "/img/nexcarb.mp4"}
          width={750}
          height={550}
          className="mt-10"
          controls
          preload="none"
        ></video>
      </div>
    </div>
  )
}

export default About
