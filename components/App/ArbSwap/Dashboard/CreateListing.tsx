import React, { useEffect, useState } from 'react'
import { useWallet } from '@solana/wallet-adapter-react'
import redstone from 'redstone-api'
import Modal from '@/components/Common/Modal'
import { methods } from '@/components/Common/PaymentMethods'
import getFormattedDateTime from '@/hooks/useCurrentDate'
import { modalStore } from '@/hooks/useStore'
import { createListing } from '@/services/ApiService'

const CreateListing = () => {
  const modalKey = 'createListing'
  const { toggleModal } = modalStore()

  const [solToUSD, setSolToUSD] = useState(0.0)
  const [solToETH, setSolToETH] = useState(0.0)
  const wallet = useWallet()

  const [amount, setAmount] = useState(0)
  const [paymentMethod, setPaymentMethod] = useState(methods[0].value)
  const [iban, setIban] = useState('')
  const [value, setValue] = useState(0)

  //const [currency, setCurrency] = useState("SOL");

  const fetchSolToUSD = async () => {
    const price = await redstone.getPrice('SOL')
    setSolToUSD(price.value)
  }

  const fetchSolToETH = async () => {
    const solPrice = await redstone.getPrice('SOL')
    const ethPrice = await redstone.getPrice('ETH')

    const solToEth = solPrice.value / ethPrice.value

    setSolToETH(solToEth)
  }

  const handleClose = () => {
    toggleModal(modalKey)
  }

  const handleMake = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const response = await createListing({
      amount: amount,
      payment_method: paymentMethod,
      value: value,
      currency: 'USD',
      iban: iban,
      wallet: wallet.publicKey?.toString() ?? ''
    })
    if (response) {
      toggleModal('createListing')
    }
  }
  /*
  const handleRefund = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const idlJson = idl as anchor.Idl
    const connection = new Connection(clusterApiUrl('devnet'), 'confirmed')
    const provider = new anchor.AnchorProvider(
      connection,
      wallet as AnchorWallet
    )
    const program = new anchor.Program<AnchorEscrow>(
      JSON.parse(JSON.stringify(idlJson)),
      provider
    )
    const tx = await program.methods.refund().rpc()

    console.log(tx)
  }
  
  const handleTake = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const idlJson = idl as anchor.Idl
    const connection = new Connection(clusterApiUrl('devnet'), 'confirmed')
    const provider = new anchor.AnchorProvider(
      connection,
      wallet as AnchorWallet
    )
    const program = new anchor.Program<AnchorEscrow>(
      JSON.parse(JSON.stringify(idlJson)),
      provider
    )

    const tx = await program.methods.take().rpc()

    console.log(tx)
  }

  const createListingFromApi = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = {
      amount: amount,
      currency: currency
    }

    try {
      const responseStatus = await createListing(body);

      if (responseStatus === 200) {
        window.location.reload();
      }
    }
    catch (err) {
      console.error(err);
    }
  }*/

  useEffect(() => {
    fetchSolToUSD()
    fetchSolToETH()
  }, [])

  return (
    <Modal>
      <div className="w-[577px] flex-col rounded-3xl bg-zinc-100 p-10 text-lg text-black">
        <div className="rounded-2xl bg-neutral-800 px-5 py-2 text-white">
          <div className="flex flex-row justify-between">
            <div className="">
              {solToUSD !== 0.0
                ? `1 SOL = ${solToUSD.toFixed(3)} USD`
                : 'Loading...'}
            </div>
            <div>{getFormattedDateTime()}</div>
          </div>
          <div className="flex flex-row justify-between">
            <div>
              {solToETH !== 0.0
                ? `1 SOL = ${solToETH.toFixed(3)} ETH`
                : 'Loading...'}
            </div>
            <div>{getFormattedDateTime()}</div>
          </div>
        </div>

        <form onSubmit={handleMake} className="flex flex-col">
          <select
            className="mt-8 rounded-3xl border border-zinc-300 bg-white text-neutral-500"
            name="paymentMethod"
            onChange={(event) => setPaymentMethod(event.target.value)}
            defaultValue={'DEFAULT'}
          >
            <option hidden disabled value="DEFAULT">
              Payment Method
            </option>
            {methods.map((method) => {
              return <option value={method.value}>{method.label}</option>
            })}
          </select>
          <input
            className="mt-8 rounded-3xl border border-zinc-300 bg-white text-neutral-500"
            type="text"
            placeholder={
              paymentMethod === methods[0].value ? 'Iban' : 'Wallet Address'
            }
            onChange={(event) => setIban(event.target.value)}
            value={
              paymentMethod === methods[0].value
                ? iban
                : String(wallet.publicKey)
            }
            readOnly={paymentMethod !== methods[0].value}
          ></input>
          <div className="relative mt-8">
            <input
              className="w-full rounded-full border-zinc-300 bg-white px-5 py-3 text-neutral-500 backdrop-blur-sm"
              placeholder="Amount"
              type="number"
              onChange={(e) => setAmount(Number(e.target.value))}
            />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <span className="rounded-full bg-green-400 px-4 py-1 font-bold text-black">
                SOL
              </span>
            </div>
          </div>
          <div className="relative mt-5">
            <input
              className="w-full rounded-full border-zinc-300 bg-white px-5 py-3 text-neutral-500 backdrop-blur-sm"
              onChange={(event) => setValue(Number(event.target.value))}
              placeholder="Price"
            />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <span className="rounded-full bg-green-400 px-4 py-1 font-bold text-black">
                USD
              </span>
            </div>
          </div>
          {/*<div className="mt-7 ml-4 flex flex-row gap-5">
            <div className="flexCenter group rounded-[10px]">
              <input
                type="checkbox"
                className="h-6 w-6 cursor-pointer appearance-none rounded-[10px] bg-teal-400 text-teal-400 focus:ring-teal-100"
              />
            </div>
            <span className="text-lg font-medium text-neutral-500">
              Will the offer be accepted automatically?
            </span>
          </div>*/}
          <div className="mt-7 flex justify-center gap-4 text-white">
            <button
              type="reset"
              onClick={handleClose}
              className="w-56 rounded-full bg-gray-600 p-2"
            >
              Cancel
            </button>
            <button type="submit" className="w-56 rounded-full bg-blue-600 p-2">
              Save Listing
            </button>
          </div>
        </form>
      </div>
    </Modal>
  )
}

export default CreateListing
