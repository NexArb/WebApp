'use client'

import React from 'react'

import Button from '@/components/CommonComponents/Button'
import Image from 'next/image'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { TLoginSchema, loginSchema } from '@/types/authValidation.types'
import { loginUser } from '@/services/ApiService'
import { useUserStore } from '@/hooks/useStore'
import { loginDictionary } from '@/localesContent'
import Layout from '@/components/HomePage/Arbswap/Auth/Layout'
import create from '@/services/actions'

const Login = ({ params }: { params: { lang: string } }) => {
  const router = useRouter()
  const { setIsAuthenticated } = useUserStore()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError
  } = useForm<TLoginSchema>({ resolver: zodResolver(loginSchema) })

  const onSubmit = async (data: TLoginSchema) => {
    try {
      // ApiService function pass data, return response
      const response = await loginUser(data)
      console.log("Response, ========>>>>>", response)
      const responseData = response?.data

      if (responseData.status < 200 || responseData.status >= 300) {
        // response status is not 2xx
        alert('Login failed!')
      }

      if (responseData.errors) {
        const errors = responseData.errors
        if (errors.email) {
          setError('email', {
            type: 'server',
            message: errors.email
          })
        } else if (errors.password) {
          setError('password', {
            type: 'server',
            message: errors.password
          })
        } else {
          alert('Something went wrong!')
        }
      } else {
        const token = responseData.access_token
        create(token)
        setIsAuthenticated()
        router.push('/arbswap/register-wallet')
      }
    } catch (e) {
      console.log(e)
    }

    reset()
  }

  return (
    <Layout>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <label htmlFor="email" className="px-4 py-2">
          {loginDictionary[params.lang]?.emailOrPhoneNumber}
        </label>
        <input
          {...register('email')}
          aria-label="Enter your email"
          type="text"
          placeholder={loginDictionary[params.lang]?.enterUsername}
          className="rounded-3xl border border-zinc-300 bg-white bg-opacity-0 placeholder:text-neutral-400"
        />
        {errors.email && (
          <p className="px-6 pt-2 text-red-500">{`${errors.email.message}`}</p>
        )}
        <label htmlFor="password" className="mt-6 px-4 py-2">
          {loginDictionary[params.lang]?.password}
        </label>
        <input
          {...register('password')}
          aria-label="Enter your password"
          type="password"
          placeholder={loginDictionary[params.lang]?.enterPassword}
          className="rounded-3xl border border-zinc-300 bg-white bg-opacity-0 placeholder:text-neutral-400"
          required
        />
        {errors.password && (
          <p className="px-6 pt-2 text-red-500">{`${errors.password.message}`}</p>
        )}
        <label className="mt-2 p-4">
          <input
            {...register('rememberDevice')}
            aria-label="Remember this device"
            type="checkbox"
            className="mr-4"
          />
          {loginDictionary[params.lang]?.rememberThisDevice}
        </label>
        <button
          type="submit"
          className="mt-6 h-12 w-full items-center justify-center rounded-full bg-gradient-button text-center shadow outline-none"
          disabled={isSubmitting}
        >
          <div className="flex flex-row items-center justify-center gap-4">
            {loginDictionary[params.lang]?.login}
          </div>
        </button>
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
        className="h-12 w-full items-center justify-center rounded-[50px] bg-[#9886E5] text-center shadow lg:mt-5 xl:mt-10"
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
    </Layout>
  )
}

export default Login
