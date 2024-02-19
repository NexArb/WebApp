'use client'

import React from 'react'

import Button from '@/components/CommonComponents/Button'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { registerWalletDictionary } from '@/localesContent'
import Layout from '@/components/HomePage/Arbswap/Auth/Layout'

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
    <Layout>
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
          className="h-12 w-full items-center justify-center rounded-[50px] bg-gradient-button text-center shadow lg:mt-5 xl:mt-10"
          onClick={handleNext}
        >
          <div className="flex flex-row items-center justify-center gap-4">
            {registerWalletDictionary[params.lang]?.register}
          </div>
        </Button>
      </form>
    </Layout>
  )
}

export default RegisterWallet
