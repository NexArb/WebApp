import React, { FormEvent, FormEventHandler, Fragment, useEffect } from 'react'

import { useUserStore } from '@/lib/store'
import CustomButton from '@/components/CustomButton'
import Image from 'next/image'

function Modal() {
  const {
    showModal,
    toggleModal,
    login,
    emailOrPhone,
    setEmailOrPhone,
    rememberDevice,
    setRememberDevice
  } = useUserStore()

  // Add event listener on component mount and remove on unmount
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        toggleModal()
      }
    }

    window.addEventListener('keydown', handleEsc)

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('keydown', handleEsc)
    }
  }, [toggleModal]) // Empty dependency array ensures this runs once on mount and cleanup on unmount

  // If clicked outside don't show modal anymore
  if (!showModal) return null

  // If it's a keyboard event, only handle if 'Enter' or 'Space' was pressed
  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLElement
    if (target.id === 'wrapper') {
      if (
        event instanceof KeyboardEvent &&
        !['Enter', ' '].includes(event.key)
      ) {
        return
      }
      toggleModal()
    }
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLElement
    if (target.id === 'wrapper') {
      toggleModal()
    }
  }

  const handleSubmit: FormEventHandler = async (e: FormEvent) => {
    e.preventDefault()
    const formData: FormData = new FormData(e.target as HTMLFormElement)
    const formValues: { [k: string]: FormDataEntryValue } =
      Object.fromEntries(formData)

    const { username, password } = formValues

    try {
      const res = await fetch('${}/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      })

      if (res.status === 201) {
        const data = await res.json()
        login(data.access_token)
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <section
      id="wrapper"
      onKeyDown={handleKeyDown}
      onClick={handleClick}
      className="fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
      tabIndex={0}
    >
      <div className="h-[595px] w-[449px] flex-row rounded-[38px] border border-white bg-indigo-300 bg-opacity-20 p-9 backdrop-blur-[100px]">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <span className="px-4 py-2">Email or Phone number</span>
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            value={emailOrPhone}
            onChange={setEmailOrPhone}
            className="rounded-3xl border border-zinc-300 bg-white bg-opacity-0 placeholder:text-neutral-400"
            required
          />
          <span className="mt-6 px-4 py-2">Password</span>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="rounded-3xl border border-zinc-300 bg-white bg-opacity-0 placeholder:text-neutral-400"
            required
          />
          <div className="mt-2 p-4">
            <input
              type="checkbox"
              checked={rememberDevice}
              onChange={(e) => setRememberDevice(e.target.checked)}
              className="mr-4"
            />
            Remember this device:
          </div>
          <CustomButton
            className="mt-4 h-12 bg-gradient-button"
            onClick={() => {}}
          >
            Login
          </CustomButton>
        </form>
        <div className="p-4 text-[15px]">
          <div className="">
            Don't you have an account?{' '}
            <span className="font-semibold text-emerald-400">
              Sign in here!
            </span>
          </div>
          <div className="mt-2">
            Forgot Password?{' '}
            <span className="font-semibold text-emerald-400">Verify here.</span>
          </div>
        </div>
        <CustomButton
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
        </CustomButton>
      </div>
    </section>
  )
}

export default Modal
