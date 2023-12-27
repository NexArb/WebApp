'use client'

import React, { FormEvent, FormEventHandler } from 'react'

import { useUserStore } from '@/lib/store'
import Button from '@/components/CommonComponents/Button'
import Modal from '@/components/CommonComponents/Modal'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

function RegisterWallet() {
  const router = useRouter()
  const { login } = useUserStore()

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

  const handleNext = () => {
    router.push('/arbswap/register-wallet')
  }

  return (
    <Modal routerBack="/arbswap">
      <div className="h-[449px] w-[449px] flex-row rounded-[38px] border border-white bg-indigo-300 bg-opacity-20 p-9 backdrop-blur-[100px]">
        <div className="mx-auto p-10 text-center">
          Connect your Phantom wallet to continue register.
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col">
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
          <Button
            className="mt-10 h-12 w-full items-center justify-center rounded-[50px] bg-gradient-button text-center shadow"
            onClick={handleNext}
          >
            <div className="flex flex-row items-center justify-center gap-4">
              Register
            </div>
          </Button>
        </form>
      </div>
    </Modal>
  )
}

export default RegisterWallet
