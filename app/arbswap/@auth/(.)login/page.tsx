'use client'

import React from 'react'

import Button from '@/components/CommonComponents/Button'
import Modal from '@/components/CommonComponents/Modal'
import Image from 'next/image'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { TLoginSchema, loginSchema } from '@/types/authValidation.types'
import { loginUser } from '@/services/ApiService'
import { useUserStore } from '@/hooks/useStore'

function Login() {
  const router = useRouter()
  const { setToken } = useUserStore()
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
      const responseData = response.data()

      if (response.status < 200 || response.status >= 300) {
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
        const token = responseData.token
        setToken(token)
        router.push('/arbswap/dashboard')
      }
    } catch (e) {
      console.log(e)
    }

    reset()
  }

  return (
    <Modal routerBack="/arbswap">
      <div className="h-[595px] w-[449px] flex-row rounded-[38px] border border-white bg-indigo-300 bg-opacity-20 p-9 backdrop-blur-[100px]">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <label htmlFor="email" className="px-4 py-2">
            Email or Phone number
          </label>
          <input
            {...register('email')}
            aria-label="Enter your email"
            type="text"
            placeholder="Enter your email"
            className="rounded-3xl border border-zinc-300 bg-white bg-opacity-0 placeholder:text-neutral-400"
          />
          {errors.email && (
            <p className="px-6 pt-2 text-red-500">{`${errors.email.message}`}</p>
          )}
          <label htmlFor="password" className="mt-6 px-4 py-2">
            Password
          </label>
          <input
            {...register('password')}
            aria-label="Enter your password"
            type="password"
            placeholder="Enter your password"
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
            Remember this device:
          </label>
          <button
            type="submit"
            className="mt-6 h-12 w-full items-center justify-center rounded-full bg-gradient-button text-center shadow outline-none"
            disabled={isSubmitting}
          >
            <div className="flex flex-row items-center justify-center gap-4">
              Login
            </div>
          </button>
        </form>
        <div className="p-4 text-[15px]">
          <div className="mt-2">
            Don't you have an account?{' '}
            <Link
              className="font-semibold text-emerald-400"
              href="/arbswap/register"
            >
              Sign in here!
            </Link>
          </div>
          <div className="mt-2">
            Forgot Password?{' '}
            <Link
              className="font-semibold text-emerald-400"
              href="/arbswap/forgot-password"
            >
              Verify here.
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
            Connect Wallet
          </div>
        </Button>
      </div>
    </Modal>
  )
}

export default Login
