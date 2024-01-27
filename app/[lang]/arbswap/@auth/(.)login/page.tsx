'use client'

import React from 'react'

import Button from '@/components/CommonComponents/Button'
import Modal from '@/components/CommonComponents/Modal'
import Image from 'next/image'
import Link from 'next/link'
import { loginDictionary } from '@/localesContent'

interface LoginProps {
  readonly params: {
    lang: string;
  }
}

function Login({params}: LoginProps) {
  return (
    <Modal routerBack="/arbswap">
      <div className="h-[595px] w-[449px] flex-row rounded-[38px] border border-white bg-indigo-300 bg-opacity-20 p-9 backdrop-blur-[100px]">
        <form onSubmit={()=>{}} className="flex flex-col">
          <span className="px-4 py-2">{loginDictionary[params.lang]?.emailOrPhoneNumber}</span>
          <input
            type="text"
            name="username"
            placeholder={loginDictionary[params.lang]?.enterUsername}
            className="rounded-3xl border border-zinc-300 bg-white bg-opacity-0 placeholder:text-neutral-400"
            required
          />
          <span className="mt-6 px-4 py-2">{loginDictionary[params.lang]?.password}</span>
          <input
            type="password"
            name="password"
            placeholder={loginDictionary[params.lang]?.enterPassword}
            className="rounded-3xl border border-zinc-300 bg-white bg-opacity-0 placeholder:text-neutral-400"
            required
          />
          <div className="mt-2 p-4">
            <input
              type="checkbox"
              className="mr-4"
            />
            {loginDictionary[params.lang]?.rememberThisDevice}
          </div>
          <Button className="mt-4 h-12 bg-gradient-button" onClick={() => {}}>
            {loginDictionary[params.lang]?.login}
          </Button>
        </form>
        <div className="p-4 text-[15px]">
          <div className="mt-2">
            {loginDictionary[params.lang]?.dontYouHaveAnAccount}{' '}
            <Link
              className="font-semibold text-emerald-400"
              href="/arbswap/register"
            >
              {loginDictionary[params.lang]?.signUpHere}
            </Link>
          </div>
          <div className="mt-2">
            {loginDictionary[params.lang]?.forgotPassword}{' '}
            <Link
              className="font-semibold text-emerald-400"
              href="/arbswap/forgot-password"
            >
              {loginDictionary[params.lang]?.verifyHere}
            </Link>
          </div>
        </div>
        <Button
          className="mt-10 h-12 w-full items-center justify-center rounded-[50px] bg-[#9886E5] text-center shadow"
          onClick={() => {}}
        >
          <div className="flex flex-row items-center justify-center gap-4">
            <Image
              width={48}
              height={48}
              alt="ghost"
              className=""
              src="/img/connect-wallet.png"
            />
            {loginDictionary[params.lang]?.connectWallet}
          </div>
        </Button>
      </div>
    </Modal>
  )
}

export default Login
