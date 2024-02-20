import Image from 'next/image'
import React from 'react'

type LayoutProp = Readonly<{
  children: React.ReactNode
}>

const Layout = ({ children }: LayoutProp) => {
  return (
    <div className="flex w-full flex-col">
      <Image
        src="/img/cloud-storage.png"
        alt="cloud"
        fill
        className="-z-20"
        quality={95}
      />
      <Image
        src="/img/Rectangle 451.png"
        alt="cloud"
        fill
        className="-z-10"
        quality={95}
      />
      <div className="flex justify-center md:mt-0 lg:mt-6 xl:mt-12 2xl:mt-28">
        <Image
          src="/img/nexarb_layer1.png"
          alt="nexarb_layer1"
          width={200}
          height={100}
        />
      </div>
      <div className="mx-auto max-w-md rounded-[38px] border border-slate-700 bg-transparent bg-opacity-70 p-9 backdrop-blur-[100px] lg:mt-6 xl:mt-12">
        {children}
      </div>
    </div>
  )
}

export default Layout
