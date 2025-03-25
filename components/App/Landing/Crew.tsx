import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { CREW } from '@/constants'
import { homeDictionary } from '@/constants/localesContent'

type CrewItemProps = Readonly<{
  name: string
  profileImage: string
  job: string
}>

function CrewItem({ name, job, profileImage }: CrewItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative group"
    >
      <div className="relative overflow-hidden rounded-xl bg-gradient-card backdrop-blur-sm border border-gray-800/50">
        <div className="relative h-72 w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-button opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          <Image
            src={profileImage}
            alt={name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
            {name}
          </h3>
          <p className="text-gray-300 text-sm mb-4">{job}</p>
        </div>
      </div>
      <div className="absolute inset-0 rounded-xl bg-gradient-button opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
    </motion.div>
  )
}

interface CrewProps {
  readonly locale: string
}

function Crew({ locale }: CrewProps) {
  return (
    <section className="relative py-24 overflow-hidden" id="crew">
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent opacity-50" />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
            {homeDictionary[locale]?.startupCrew}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our dedicated team brings together expertise in blockchain technology, business strategy, and technical innovation. Together, we're building the future of decentralized AI solutions.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {CREW.map((crew, index) => (
            <motion.div
              key={crew.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CrewItem
                name={crew.name}
                profileImage={crew.profileImage}
                job={crew.job}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Crew
