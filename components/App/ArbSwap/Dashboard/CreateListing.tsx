import Modal from '@/components/Common/Modal'
import { modalStore } from '@/hooks/useStore';
import getFormattedDateTime from '@/hooks/useCurrentDate'
import React, { useState, useEffect } from 'react'
import redstone from "redstone-api";
import { createListing } from '@/services/ApiService';

const CreateListing = () => {
  const modalKey = 'createListing';
  const { toggleModal } = modalStore();

  const [solToUSD, setSolToUSD] = useState(0.0);
  const [solToETH, setSolToETH] = useState(0.0);

  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState("SOL");

  const fetchSolToUSD = async () => {
    const price = await redstone.getPrice("SOL");
    setSolToUSD(price.value);
  }

  const fetchSolToETH = async () => {
    const solPrice = await redstone.getPrice("SOL");
    const ethPrice = await redstone.getPrice("ETH");

    const solToEth = solPrice.value / ethPrice.value;

    setSolToETH(solToEth);
  }

  const handleClose = () => {
    toggleModal(modalKey);
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
  }

  useEffect(() => {
    fetchSolToUSD();
    fetchSolToETH();
  }, [])

  return (
    <Modal>
      <div className="w-[577px] flex-col rounded-3xl bg-zinc-100 p-10 text-lg text-black">
        <div className="rounded-2xl bg-neutral-800 px-5 py-2 text-white">
          <div className="flex flex-row justify-between">
            <div className="">{solToUSD !== 0.0 ? `1 SOL = ${solToUSD.toFixed(3)} USD` : 'Loading...'}</div>
            <div>{getFormattedDateTime()}</div>
          </div>
          <div className="flex flex-row justify-between">
            <div>{solToETH !== 0.0 ? `1 SOL = ${solToETH.toFixed(3)} ETH` : 'Loading...'}</div>
            <div>{getFormattedDateTime()}</div>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-2">
          <div className="rounded-bl-3xl rounded-tl-3xl border border-blue-600 bg-blue-600 py-1 text-center text-white">
            Buy SOL
          </div>
          <div className="rounded-br-3xl rounded-tr-3xl border-2 border-blue-600 bg-white py-1 text-center text-blue-600">
            Sell SOL
          </div>
        </div>
        <form onSubmit={createListingFromApi} className="flex flex-col">
          <select
            className="mt-8 rounded-3xl border border-zinc-300 bg-white text-neutral-500"
            name="paymentMethod"
            defaultValue={'DEFAULT'}
          >
            <option hidden disabled value="DEFAULT">
              Payment Method
            </option>
            <option value="creditCard">Credit Card</option>
            <option value="bankCard">Bank Card</option>
            <option value="paypal">Paypal</option>
            <option value="applePay">Apple Pay</option>
          </select>
          <select
            className="mt-8 rounded-3xl border border-zinc-300 bg-white text-neutral-500"
            name="country"
            defaultValue={'DEFAULT'}
          >
            <option hidden disabled value="DEFAULT">
              Country
            </option>
            <option value="tr">Turkey</option>
            <option value="us">United States</option>
            <option value="uk">United Kindom</option>
            <option value="de">Germany</option>
          </select>
          <input
            className="mt-8 rounded-3xl border border-zinc-300 bg-white text-neutral-500"
            type="text"
            placeholder="Wallet Address"
          ></input>
          <div className="relative mt-8">
            <input
              className="w-full rounded-full border-zinc-300 bg-white text-neutral-500 px-5 py-3 backdrop-blur-sm"
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
          <label className="text-sm opacity-30 ml-8 mt-2">Minimum: 10 SOL</label>
          <div className="relative mt-5">
            <input
              className="w-full rounded-full border-zinc-300 bg-white text-neutral-500 px-5 py-3 backdrop-blur-sm"
              placeholder="Price"
            />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <span className="rounded-full bg-green-400 px-4 py-1 font-bold text-black">
                USD
              </span>
            </div>
          </div>
          <label className="text-sm opacity-30 ml-8 mt-2">Minimum: 10 USD</label>
          <div className="mt-7 ml-4 flex flex-row gap-5">
            <div className="flexCenter group rounded-[10px]">
              <input
                type="checkbox"
                className="h-6 w-6 cursor-pointer appearance-none rounded-[10px] bg-teal-400 text-teal-400 focus:ring-teal-100"
              />
            </div>
            <span className="text-lg font-medium text-neutral-500">
              Will the offer be accepted automatically?
            </span>
          </div>
          <div className="flex justify-center text-white gap-4 mt-7">
            <button type="reset" onClick={handleClose} className="p-2 w-56 rounded-full bg-gray-600">Cancel</button>
            <button type="submit" className="p-2 w-56 rounded-full bg-blue-600">Save Listing</button>
          </div>
        </form>
      </div>
    </Modal>
  )
}

export default CreateListing
