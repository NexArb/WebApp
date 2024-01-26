import React from 'react'
import HomePage from '@/components/HomePage'
import HomeFooter from '@/components/CustomFooter/HomeFooter'

export default function Home({params}: {params: {lang: string}}) {
  return (
    <div className="bg-gradient-main text-white">
      <HomePage params={params}/>
      <HomeFooter locale={params.lang}/>
    </div>
  )
}
