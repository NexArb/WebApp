import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className="flex justify-between bg-gradient-to-br from-[#12056A] via-[#020A07] to-[#06012E] h-24">
        <div className="flex justify-center items-center gap-5">
          <p className="text-2xl ml-5">Ayşe Yılmaz</p>
          <p className="bg-gradient-to-r from-purple-600 via-blue-500 to-green-500 rounded-xl w-32 h-8 pt-0.5 text-lg items-center text-center">Admin</p>
        </div>
        <div className="mr-16 mt-3">
          <Image
            src={"/img/NexArbLogoGradient.svg"}
            alt='NexArb Logo'
            width={250}
            height={50}
          />
        </div>
        <div className="flex justify-center items-center">
          <p className="mr-5">Log Off</p>
        </div>
    </div>
  )
}

export default Navbar