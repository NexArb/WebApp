import React from 'react'
import Image from 'next/image'
import { PROJECTS } from '@/constants'

const Projects = () => {
  return (
    <section className="flexCenter mt-36 flex-col">
      <div className="text-[42px] font-bold leading-[52px] lg:w-[228px]">
        Our Works
      </div>
      <div className="mt-6 text-center text-[22px] leading-loose lg:w-[722px]">
        The most important part of the Startup Framework is the samples. The
        samples form a set of 20 usable pages you can use as is or you can add
        new blocks from UI Kit.
      </div>
      <div className="mt-10 grid gap-10 md:grid-cols-3 lg:mt-24 lg:gap-20">
        {PROJECTS.map((project) => (
          <ProjectItem
            key={project.title}
            title={project.title}
            image={project.image}
            date={project.date}
          />
        ))}
      </div>
    </section>
  )
}

type ProjectItem = {
  title: string
  image: string
  date: string
}

const ProjectItem = ({ title, image, date }: ProjectItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start justify-center">
      <Image src={image} alt="map" width={370} height={280} />
      <div className="mx-auto items-center justify-center">
        <h2 className="mt-5 text-[22px] font-medium leading-loose">{title}</h2>
        <p className="mt-2 text-center text-sm leading-relaxed tracking-widest lg:mt-[14px] lg:bg-none">
          {date}
        </p>
      </div>
    </li>
  )
}

export default Projects
