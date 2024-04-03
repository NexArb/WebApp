import React from 'react'

import HomePage from '@/components/App/Landing'
import HomeFooter from '@/components/CustomFooter/HomeFooter'

interface HomeProps {
  readonly params: {
    readonly lang: string
  }
}

export default function Home({ params }: HomeProps) {
  return (
    <div className="bg-gradient-main text-white">
      <HomePage params={params} />
      <HomeFooter locale={params.lang} />
    </div>
  )
}
