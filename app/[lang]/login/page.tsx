"use client"
import React, { useState } from 'react'

import Button from '@/components/CommonComponents/Button'
import Image from 'next/image'
import { loginDictionary } from '@/localesContent'

const Login = ({params}: {params: {lang: string}}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="relative h-[997px]">
        <div className="absolute inset-0 bg-[url('/img/cloud-storage.png')] bg-cover bg-no-repeat bg-center">
            <div className="relative z-10 flex justify-center items-center h-full">
                <div className="mr-[850px]">
                    <div className="relative z-20 ml-32">
                        <Image
                            src={"/img/nexarb_layer1.png"}
                            alt='NexArb Layer1'
                            width={200}
                            height={50}
                        />
                    </div>
                    <div className="h-[495px] w-[449px] flex-row rounded-[38px] border border-slate-700 bg-transparent bg-opacity-70 p-9 backdrop-blur-[100px] mt-12">
                        <form onSubmit={()=>{}} className="flex flex-col">
                            <span className="px-4 py-2">{loginDictionary[params.lang]?.emailOrPhoneNumber}</span>
                            <input
                                type="text"
                                name="username"
                                placeholder={loginDictionary[params.lang]?.enterUsername}
                                className="rounded-3xl border border-zinc-300 bg-white bg-opacity-0 placeholder:text-neutral-400"
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                            <span className="mt-6 px-4 py-2">{loginDictionary[params.lang]?.password}</span>
                            <input
                                type="password"
                                name="password"
                                placeholder={loginDictionary[params.lang]?.enterPassword}
                                className="rounded-3xl border border-zinc-300 bg-white bg-opacity-0 placeholder:text-neutral-400"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <div className="mt-2 p-4">
                                <input
                                type="checkbox"
                                className="mr-4"
                                />
                                {loginDictionary[params.lang]?.rememberThisDevice}
                            </div>
                            <Button className="mt-4 h-12 bg-white text-black" onClick={() => {}}>
                                <div style={{display: "flex", justifyContent: "center", }}>
                                    <span>
                                        <Image 
                                            src={"/img/google-logo.svg"} 
                                            alt='Google Logo' 
                                            width={23} 
                                            height={23}
                                        />
                                    </span> 
                                    <p>&nbsp; {loginDictionary[params.lang]?.loginWithGoogle}</p>
                                </div>
                            </Button>
                            <Button className="mt-4 h-12 bg-gradient-button" onClick={() => {}}>
                                {loginDictionary[params.lang]?.login}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Login