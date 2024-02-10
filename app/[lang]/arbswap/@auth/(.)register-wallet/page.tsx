'use client'

import React from 'react'

import Button from '@/components/CommonComponents/Button'
import Modal from '@/components/CommonComponents/Modal'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { registerWalletDictionary } from '@/localesContent'

interface RegisterWalletProps {
  readonly params: {
    readonly lang: string
  }
}

function RegisterWallet({ params }: RegisterWalletProps) {
  const router = useRouter()

  const handleNext = () => {
    router.push('/arbswap/register-wallet')
  }

  return (
    <Modal routerBack="/arbswap">
      <div className="h-[449px] w-[449px] flex-row rounded-[38px] border border-white bg-indigo-300 bg-opacity-20 p-9 backdrop-blur-[100px]">
        <div className="mx-auto p-10 text-center">
          {registerWalletDictionary[params.lang]?.connectPhantomWallet}
        </div>
        <form onSubmit={() => {}} className="flex flex-col">
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
              {registerWalletDictionary[params.lang]?.connectWallet}
            </div>
          </Button>
          <Button
            className="mt-10 h-12 w-full items-center justify-center rounded-[50px] bg-gradient-button text-center shadow"
            onClick={handleNext}
          >
            <div className="flex flex-row items-center justify-center gap-4">
              {registerWalletDictionary[params.lang]?.register}
            </div>
          </Button>
        </form>
      </div>
    </Modal>
  )
}

export default RegisterWallet
