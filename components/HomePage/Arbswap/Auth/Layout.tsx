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
      <div className="ml-3 mt-32 flex justify-center">
        <Image
          src="/img/nexarb_layer1.png"
          alt="nexarb_layer1"
          width={200}
          height={100}
        />
      </div>
      <div className="mt-12 h-[495px] w-[449px] rounded-[38px] border border-slate-700 bg-transparent bg-opacity-70 p-9 backdrop-blur-[100px] mx-auto">
        {children}
      </div>
    </div>
  )
}

export default Layout
