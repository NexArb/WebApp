'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import Modal from '@/components/CommonComponents/Modal'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { TRegisterSchema, registerSchema } from '@/types/authValidation.types'

function Register() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError
  } = useForm<TRegisterSchema>({ resolver: zodResolver(registerSchema) })

  const handleNext = () => {
    router.push('/arbswap/register-wallet')
  }

  const onSubmit = async (data: TRegisterSchema) => {
    try {
      // ApiService function pass data, return response
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
        {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      const responseData = await response.json()

      if (!response.ok) {
        // response status is not 2xx
        alert('Submitting form failed!')
        handleNext()
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
        } else if (errors.confirmPassword) {
          setError('confirmPassword', {
            type: 'server',
            message: errors.confirmPassword
          })
        } else {
          alert('Something went wrong!')
        }
      }
    } catch (err) {
      console.log(err)
    }

    reset()
  }

  return (
    <Modal routerBack="/arbswap">
      <div className="flex-row rounded-[38px] border border-white bg-indigo-300 bg-opacity-20 p-9 backdrop-blur-[100px]">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <label htmlFor="email" className="px-4 py-2">
            Email
          </label>
          <input
            {...register('email')}
            aria-label="Enter a valid email"
            type="text"
            id="email"
            placeholder="Enter a valid email"
            className="rounded-3xl border border-zinc-300 bg-white bg-opacity-0 placeholder:text-neutral-400"
          />
          {errors.email && (
            <p className="px-6 pt-2 text-red-500">{`${errors.email.message}`}</p>
          )}
          <label htmlFor="password" className="mt-4 px-4 py-2">
            Choose Password
          </label>
          <input
            {...register('password')}
            type="password"
            placeholder="Enter your password"
            className="rounded-3xl border border-zinc-300 bg-white bg-opacity-0 placeholder:text-neutral-400"
          />
          {errors.password && (
            <p className="px-6 pt-2 text-red-500">{`${errors.password.message}`}</p>
          )}
          <label htmlFor="confirmPassword" className="mt-4 px-4 py-2">
            Password Again
          </label>
          <input
            {...register('confirmPassword')}
            type="password"
            placeholder="Confirm your password"
            className="rounded-3xl border border-zinc-300 bg-white bg-opacity-0 placeholder:text-neutral-400"
          />
          {errors.confirmPassword && (
            <p className="px-6 pt-2 text-red-500">{`${errors.confirmPassword.message}`}</p>
          )}
          <label className="mt-2 px-1 py-2">
            <input
              type="checkbox"
              {...register('acceptTerms')}
              className="mr-4"
            />
            Accept the terms and conditions...
          </label>
          {errors.acceptTerms && (
            <p className="px-6 text-red-500">{`${errors.acceptTerms.message}`}</p>
          )}
          <button
            type="submit"
            className="mt-6 h-12 w-full items-center justify-center rounded-full bg-gradient-button text-center shadow outline-none"
            disabled={isSubmitting}
          >
            <div className="flex flex-row items-center justify-center gap-4">
              Next
            </div>
          </button>
        </form>
      </div>
    </Modal>
  )
}

export default Register
