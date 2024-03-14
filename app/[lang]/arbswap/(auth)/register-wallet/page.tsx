'use client'

import React, { useCallback, useEffect, useState } from 'react'

import Button from '@/components/CommonComponents/Button'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { registerWalletDictionary } from '@/localesContent'
import Layout from '@/components/HomePage/Arbswap/Auth/Layout'
import { PublicKey } from '@solana/web3.js'
import { registerWallet } from '@/services/ApiService'

interface RegisterWalletProps {
  readonly params: {
    readonly lang: string
  }
}

function RegisterWallet({ params }: RegisterWalletProps) {
  const router = useRouter()
  const [pubKey, setPubKey] = useState<PublicKey | null>(null)

  const getProvider = () => {
    if ('phantom' in window) {
      const provider = window.phantom?.solana

      if (provider?.isPhantom) {
        return provider
      }
    }

    window.open('https://phantom.app/', '_blank')
  }

  const provider = getProvider()

  const handleNext = async () => {
    try {
      const response = await registerWallet(pubKey)
      const responseData = response?.data
      if (responseData?.status === 200) {
        router.push('/arbswap/dashboard')
      } else {
        throw new Error('Wallet registration failed. Please try again later.')
      }
    } catch (error) {
      // Handle the error (e.g., display an error message to the user)
    }
  }

  /** Connect */
  const handleConnect = useCallback(async () => {
    if (!provider) return

    try {
      const resp = await provider.request({ method: 'connect' })
      setPubKey(resp.publicKey.toString())
    } catch (error) {
      console.log(error)
    }
  }, [provider])

  useEffect(() => {
    if (!provider) return

    // attempt to eagerly connect
    provider
      .connect({ onlyIfTrusted: true })
      .then(({ publicKey }: any) => {
        setPubKey(publicKey)
        // router.push('/arbswap/dashboard')
      })
      .catch(() => {
        // fail silently
      })

    provider.on('connect', (publicKey: PublicKey) => {
      setPubKey(publicKey)
    })

    // TODO: move below code to logout
    // Forget user's public key once they disconnect
    // provider.on('disconnect', () => {
    //   setPubKey(null)
    // })

    provider.on('accountChanged', (publicKey: PublicKey | null) => {
      if (publicKey) {
        console.log({
          status: 'info',
          method: 'accountChanged',
          message: `Switched to account ${publicKey.toBase58()}`
        })
      } else {
        /**
         * In this case dApps could...
         *
         * 1. Not do anything
         * 2. Only re-connect to the new account if it is trusted
         *
         * ```
         * provider.connect({ onlyIfTrusted: true }).catch((err) => {
         *  // fail silently
         * });
         * ```
         *
         * 3. Always attempt to reconnect
         */

        console.log({
          status: 'info',
          method: 'accountChanged',
          message: 'Attempting to switch accounts.'
        })

        provider.connect().catch((error: any) => {
          console.log({
            status: 'error',
            method: 'accountChanged',
            message: `Failed to re-connect: ${error.message}`
          })
        })
      }
    })

    return () => {
      provider.disconnect()
    }
  }, [provider])

  return (
    <Layout>
      <div className="mx-auto p-10 text-center">
        {registerWalletDictionary[params.lang]?.connectPhantomWallet}
      </div>
      <Button
        className="mt-10 h-12 w-full items-center justify-center rounded-[50px] bg-[#9886E5] text-center shadow"
        onClick={handleConnect}
      >
        <div className="flex flex-row items-center justify-center gap-4">
          <Image
            width={48}
            height={48}
            alt="ghost"
            className=""
            src="/img/connect-wallet.png"
          />
          {provider.isConnected
            ? registerWalletDictionary[params.lang]?.walletConnected
            : registerWalletDictionary[params.lang]?.connectWallet}
        </div>
      </Button>
      {/* <form onSubmit={() => {}} className="flex flex-col"> */}
      <Button
        className="h-12 w-full items-center justify-center rounded-[50px] bg-gradient-button text-center shadow lg:mt-5 xl:mt-10"
        onClick={handleNext}
      >
        <div className="flex flex-row items-center justify-center gap-4">
          {registerWalletDictionary[params.lang]?.register}
        </div>
      </Button>
      {/* </form> */}
    </Layout>
  )
}

export default RegisterWallet
