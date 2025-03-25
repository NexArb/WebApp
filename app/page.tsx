"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, Variants } from 'framer-motion'

import Crew from '@/components/App/Landing/Crew'
import HomeFooter from '@/components/CustomFooter/HomeFooter'

const chains = [
  {
    name: 'Ethereum',
    logo: '/chains/ethereum.svg',
    gradient: 'from-blue-500 to-gray-500'
  },
  {
    name: 'Polygon',
    logo: '/chains/polygon.svg',
    gradient: 'from-purple-500 to-blue-500'
  },
  {
    name: 'BNB Chain',
    logo: '/chains/bnb.svg',
    gradient: 'from-yellow-500 to-yellow-600'
  },
  {
    name: 'Arbitrum',
    logo: '/chains/arbitrum.svg',
    gradient: 'from-blue-600 to-indigo-600'
  },
  {
    name: 'Optimism',
    logo: '/chains/optimism.svg',
    gradient: 'from-red-500 to-red-600',
    comingSoon: true,
  }
]

const wallets = [
  {
    name: 'MetaMask',
    logo: '/wallets/metamask.svg',
    gradient: 'from-orange-500 to-orange-600'
  },
  {
    name: 'WalletConnect',
    logo: '/wallets/walletconnect.svg',
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    name: 'Coinbase',
    logo: '/wallets/coinbase.svg',
    gradient: 'from-blue-400 to-blue-500'
  },
]

export default function Home() {
  const defaultLocale = 'en'

  const fadeInUp: Variants = {
    initial: { 
      opacity: 0, 
      y: 40 
    },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  const staggerContainer: Variants = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <motion.main 
      initial="initial"
      animate="animate"
      className="relative min-h-screen bg-gradient-to-b from-gray-900 via-[#0A0B0D] to-black text-white overflow-hidden"
    >
      {/* Background Elements */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-purple-500/10 to-transparent"
        />
        <motion.div
          variants={fadeInUp}
          className="relative z-10 text-center max-w-4xl mx-auto"
        >
          <motion.h1 
            className="text-7xl md:text-8xl font-bold mb-8"
            variants={fadeInUp}
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              NexArb
            </span>
          </motion.h1>
          <motion.p 
            className="mt-8 text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-4"
            variants={fadeInUp}
          >
            Pioneering the Future of Blockchain Technology
          </motion.p>
          <motion.p
            className="text-gray-400 max-w-2xl mx-auto mb-12"
            variants={fadeInUp}
          >
            Building innovative solutions at the intersection of AI and blockchain technology
          </motion.p>
          <motion.div 
            className="mt-12 flex gap-6 justify-center"
            variants={fadeInUp}
          >
            <Link href="https://ai.nexarb.com">
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(147, 51, 234, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
              >
                Launch NexAI Beta
              </motion.button>
            </Link>
            <motion.button 
              whileHover={{ scale: 1.05, borderColor: "rgb(147, 51, 234)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-transparent border-2 border-gray-700 rounded-full font-semibold text-lg hover:border-purple-500 transition-all duration-300"
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </motion.div>
      </section>

      {/* Products Section */}
      <motion.section 
        className="py-32 relative"
        variants={fadeInUp}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            className="max-w-7xl mx-auto"
          >
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our Solutions
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Discover our innovative blockchain products designed to revolutionize digital interactions
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* NexAI Card */}
              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -10, boxShadow: "0 0 30px rgba(147, 51, 234, 0.2)" }}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 hover:border-purple-500/50 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="h-16 w-16 mb-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
                    NexAI
                  </h3>
                  <p className="text-gray-300 text-lg mb-6">
                    Experience the future of crypto wallet management through natural conversation with AI
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <svg className="w-6 h-6 text-purple-500 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-gray-400">Natural language interaction with your crypto wallet</p>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-6 h-6 text-purple-500 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-gray-400">Smart transaction suggestions and portfolio analysis</p>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-6 h-6 text-purple-500 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-gray-400">Advanced security features with AI-powered monitoring</p>
                    </div>
                  </div>
                  <Link href="https://ai.nexarb.com">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
                    >
                      Try Beta Version
                    </motion.button>
                  </Link>
                </div>
              </motion.div>

              {/* NexCarb Card */}
              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -10, boxShadow: "0 0 30px rgba(147, 51, 234, 0.2)" }}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 hover:border-purple-500/50 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="h-16 w-16 mb-6 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-4">
                    NexCarb
                  </h3>
                  <p className="text-gray-300 text-lg mb-6">
                    Revolutionary carbon credit trading platform - Transforming sustainability through blockchain
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <svg className="w-6 h-6 text-green-500 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-gray-400">Transparent carbon credit verification</p>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-6 h-6 text-green-500 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-gray-400">Real-time trading and settlement</p>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-6 h-6 text-green-500 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-gray-400">Advanced sustainability metrics</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center px-6 py-3 bg-gray-800/80 rounded-full font-semibold text-gray-400">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Coming Soon
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Crew Section */}
      <Crew locale={defaultLocale} />


      <HomeFooter locale={defaultLocale} />
    </motion.main>
  )
}
