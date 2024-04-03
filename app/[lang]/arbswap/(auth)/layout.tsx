import React from 'react'
import Image from 'next/image'

type RootLayoutProps = Readonly<{
  children: React.ReactNode
}>

export default function DashboardLayout({ children }: RootLayoutProps) {
  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-center">
      <Image
        src="/img/auth-cloud.png"
        alt="cloud"
        fill
        className="-z-20"
        quality={95}
      />
      <Image
        src="/img/auth-gradient.png"
        alt="gradient"
        fill
        className="-z-10"
        quality={95}
      />
      <Image
        src="/img/auth_nexarb_logo.png"
        alt="nexarb logo"
        width={200}
        height={45}
        quality={95}
        priority
      />
      <div className="rounded-3xl border border-slate-700 bg-transparent bg-opacity-70 p-9 backdrop-blur-[100px] lg:mt-6 xl:mt-12">
        {children}
      </div>
    </section>
  )
}
