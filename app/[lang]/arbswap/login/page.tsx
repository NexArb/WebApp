'use client'
import React, { useEffect, useState } from 'react'

import Button from '@/components/CommonComponents/Button'
import Image from 'next/image'
import { loginDictionary } from '@/localesContent'
import Layout from '@/components/HomePage/Arbswap/Auth/Layout'

const Login = ({ params }: { params: { lang: string } }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
          <Layout>
              <form onSubmit={() => {}} className="flex flex-col">
                <span className="px-4 py-2">
                  {loginDictionary[params.lang]?.emailOrPhoneNumber}
                </span>
                <input
                  type="text"
                  name="username"
                  placeholder={loginDictionary[params.lang]?.enterUsername}
                  className="rounded-3xl border border-zinc-300 bg-white bg-opacity-0 placeholder:text-neutral-400"
                  onChange={(e) => setUsername(e.target.value)}
                />
                <span className="mt-6 px-4 py-2">
                  {loginDictionary[params.lang]?.password}
                </span>
                <input
                  type="password"
                  name="password"
                  placeholder={loginDictionary[params.lang]?.enterPassword}
                  className="rounded-3xl border border-zinc-300 bg-white bg-opacity-0 placeholder:text-neutral-400"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="mt-2 p-4">
                  <input type="checkbox" className="mr-4" />
                  {loginDictionary[params.lang]?.rememberThisDevice}
                </div>
                <Button
                  className="mt-4 h-12 bg-white text-black"
                  onClick={() => {}}
                >
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <span>
                      <Image
                        src={'/img/google-logo.svg'}
                        alt="Google Logo"
                        width={23}
                        height={23}
                      />
                    </span>
                    <p>
                      &nbsp; {loginDictionary[params.lang]?.loginWithGoogle}
                    </p>
                  </div>
                </Button>
                <Button
                  className="mt-4 h-12 bg-gradient-button"
                  onClick={() => {}}
                >
                  {loginDictionary[params.lang]?.login}
                </Button>
              </form>
          </Layout>
  )
}

export default Login
