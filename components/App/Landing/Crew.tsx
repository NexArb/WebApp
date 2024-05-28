import React from 'react'
import Image from 'next/image'
import { CREW } from '@/constants'
import { homeDictionary } from '@/constants/localesContent'

type CrewItemProps = Readonly<{
  name: string
  profileImage: string
  job: string
  
}>

function CrewItem({
  name,
  job,
  profileImage
}: CrewItemProps) {
  return (
    <li className="flex w-full flex-1 flex-col items-start max-lg:p-10">
      <Image src={profileImage} alt="profile image" width={150} height={150} className="rounded-full" />
      <h2 className="mt-4 text-2xl text-center items-center font-medium leading-loose">{name}</h2>
      <p className="mt-1 text-center items-center leading-relaxed">{job}</p>
    </li>
  )
}

interface CrewProps {
  readonly locale: string
}

function Crew({ locale }: CrewProps) {
  return (
    <section id='crew' className="flexCenter mb-72 mt-96 flex-col">
      <div className="text-center text-5xl font-bold">
        {homeDictionary[locale]?.startupCrew}
      </div>
      <div className="mt-10 grid gap-10 md:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-20">
        {CREW.map((crew) => (
          <CrewItem
            key={crew.name}
            name={crew.name}
            profileImage={crew.profileImage}
            job={crew.job}
          />
        ))}
      </div>
    </section>
  )
}

export default Crew
