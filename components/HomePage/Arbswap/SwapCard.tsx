"use client"
import { useState } from 'react';

const SwapCard = () => {
    const [selectedOption, setSelectedOption] = useState('buy');

    return (
        <div className="flex justify-center backdrop-blur-lg bg-gray-900 rounded-3xl p-10 w-96 ml-72">
            <div>
                <div className="flex border rounded-full border-white justify-between">
                    <button 
                        className={`p-2 w-40 rounded-l-full text-white ${selectedOption === 'buy' ? 'bg-blue-600' : 'bg-transparent text-blue-600'}`}
                        onClick={() => setSelectedOption('buy')}
                    >
                        Buy SOL
                    </button>
                    <button 
                        className={`p-2 w-40 rounded-r-full text-white ${selectedOption === 'sell' ? 'bg-blue-600' : 'bg-transparent text-blue-600'}`}
                        onClick={() => setSelectedOption('sell')}
                    >
                        Sell SOL
                    </button>
                </div>
                <div className="flex justify-between items-center mt-10 text-white">
                    <span>1 SOL = 24,342 USD</span>
                    <span>12.10.2023 - 22:12</span>
                </div>
                <select className="w-full mt-5 text-white backdrop-blur-sm py-3 px-5 bg-gray-900 rounded-full" defaultValue={'coin'} name="coin" id="coin">
                    <option value='coin'>Coin</option>
                    {/* Add additional coin options here */}
                </select>
                <div className="relative mt-5">
                    <input className="w-full text-white backdrop-blur-sm bg-gray-900 py-3 px-5 rounded-full" placeholder='Amount' />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <span className="bg-green-400 rounded-full px-4 py-1 text-black font-bold">USD</span>
                    </div>
                </div>
                <p className="text-xs text-gray-400 mt-3 ml-5">Minimum : 10 USD</p>
                <div className="flex justify-center">
                    <button className="bg-gradient-to-l from-green-500 via-blue-500 to-purple-500 mt-5 py-3 px-8 rounded-full text-white" type="submit">Search For Offers</button>
                </div>
            </div>
        </div>
    )
}
export default SwapCard;
