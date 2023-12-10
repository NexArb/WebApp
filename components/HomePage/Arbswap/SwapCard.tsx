"use client"
import React, { useState } from 'react';

const SwapCard = (): React.JSX.Element => {
    const [selectedOption, setSelectedOption] = useState('buy');

    return (
        <div className="flex justify-center">
            <div className="w-96 lg:w-96 bg-gray-900 backdrop-blur-lg rounded-3xl p-6 lg:p-10">
                <div className="flex flex-col lg:flex-row justify-between lg:items-center border border-white rounded-full">
                    <button
                        className={`w-full lg:w-48 p-2 rounded-t-full lg:rounded-l-full text-white ${selectedOption === 'buy' ? 'bg-blue-600' : 'bg-transparent text-blue-600'}`}
                        onClick={() => setSelectedOption('buy')}
                    >
                        Buy SOL
                    </button>
                    <button
                        className={`w-full lg:w-48 p-2 rounded-b-full lg:rounded-r-full text-white ${selectedOption === 'sell' ? 'bg-blue-600' : 'bg-transparent text-blue-600'}`}
                        onClick={() => setSelectedOption('sell')}
                    >
                        Sell SOL
                    </button>
                </div>
                <div className="flex flex-col lg:flex-row justify-between items-center mt-4 lg:mt-10 text-white">
                    <span className="mb-2 lg:mb-0">1 SOL = 24,342 USD</span>
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
                <p className="text-xs text-gray-400 mt-3 ml-1 lg:ml-5">Minimum : 10 USD</p>
                <div className="flex justify-center mt-5">
                    <button className="bg-gradient-to-l from-green-500 via-blue-500 to-purple-500 py-3 px-8 rounded-full text-white" type="submit">Search For Offers</button>
                </div>
            </div>
        </div>

    )
}
export default SwapCard;
