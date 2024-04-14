"use client"

import React, { useState } from 'react'
import Image from 'next/image';

const MenuBar = () => {
  const [index, setIndex] = useState(1);  
  return (
    <div className="flex flex-col w-72 h-5/6 bg-white p-5 rounded-2xl">
        <div className={`flex p-2 mt-5 ${index === 1 ? "bg-blue-200 p-2 rounded-md" : ''}`} onClick={() => setIndex(1)}>
            <Image 
                src="/img/credit-card.svg"
                width={20}
                height={20}
                alt="Menu"
                className="text-blue-300"
            />
            <p className={`ml-3 ${index === 1 ? "text-blue-600" : "text-slate-500" }`}>Header and Footer</p>
        </div>
        <div className={`flex p-2 mt-5 ${index === 2 ? "bg-blue-200 p-2 rounded-md" : ''}`} onClick={() => setIndex(2)}>
            <Image
                src="/img/home.svg"
                width={20}
                height={20}
                alt='Home'
            />
            <p className={`ml-3 ${index === 2 ? "text-blue-600" : "text-slate-500" }`}>Landing Page</p>
        </div>
        <div className={`flex p-2 mt-5 ${index === 3 ? "bg-blue-200 p-2 rounded-md" : ''}`} onClick={() => setIndex(3)}>
            <Image
                src="/img/camera.svg"
                width={20}
                height={20}
                alt='Home'
            />
            <p className={`ml-3 ${index === 3 ? "text-blue-600" : "text-slate-500" }`}>Media</p>
        </div>
        <div className={`flex p-2 mt-5 ${index === 4 ? "bg-blue-200 p-2 rounded-md" : ''}`} onClick={() => setIndex(4)}>
            <Image
                src="/img/users.svg"
                width={20}
                height={20}
                alt='Home'
            />
            <p className={`ml-3 ${index === 4 ? "text-blue-600" : "text-slate-500" }`}>Team</p>
        </div>
        <div className={`flex p-2 mt-5 ${index === 5 ? "bg-blue-200 p-2 rounded-md" : ''}`} onClick={() => setIndex(5)}>
            <Image
                src="/img/pen-tool.svg"
                width={20}
                height={20}
                alt='Home'
            />
            <p className={`ml-3 ${index === 5 ? "text-blue-600" : "text-slate-500" }`}>Appearance</p>
        </div>
        <div className={`flex p-2 mt-5 ${index === 6 ? "bg-blue-200 p-2 rounded-md" : ''}`} onClick={() => setIndex(6)}>
            <Image
                src="/img/user.svg"
                width={20}
                height={20}
                alt='Home'
            />
            <p className={`ml-3 ${index === 6 ? "text-blue-600" : "text-slate-500" }`}>Users</p>
        </div>
        <div className={`flex p-2 mt-5 ${index === 7 ? "bg-blue-200 p-2 rounded-md" : ''}`} onClick={() => setIndex(7)}>
            <Image
                src="/img/settings.svg"
                width={20}
                height={20}
                alt='Home'
            />
            <p className={`ml-3 ${index === 7 ? "text-blue-600" : "text-slate-500" }`}>Settings</p>
            
        </div>
        <div className="mt-36 relative flex justify-center inset-x-0 bottom-0">
            <Image
                src="/img/NexArbLogo.svg"
                width={200}
                height={50}
                alt='NexArb'
            />
        </div>
    </div>
  )
}

export default MenuBar