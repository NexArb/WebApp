import Image from 'next/image'
import React from 'react'

const HeaderAndFooter = () => {
  return (
    <div className="flex w-2/3 bg-white rounded-2xl p-5 gap-36">
        <div className="flex flex-col">
            <div className="mt-5">
                <p className="text-blue-600 text-xl">Header Photo</p>
                <form className="mt-4">
                    <input type="file"/>
                </form>
            </div>
            <div className="mt-10">
                <p className="text-blue-600 text-xl">Navigation Menu</p>
                <form>
                    <div className="flex gap-3 mt-3">
                        <input type="text" className="w-1/3 text-slate-700" placeholder='About'/>
                        <input type="text" className="w-2/3 text-slate-700" placeholder='https://nexarb.com/about'/>
                        <Image src={"/img/trash-2.svg"} alt='Trash Icon' width={25} height={25}/>
                    </div>
                    <div className="flex gap-3 mt-3">
                        <input type="text" className="w-1/3 text-slate-700" placeholder='Create Offer'/>
                        <input type="text" className="w-2/3 text-slate-700" placeholder='https://nexarb.com/create-offer'/>
                        <Image src={"/img/trash-2.svg"} alt='Trash Icon' width={25} height={25}/>
                    </div>
                    <div className="flex gap-3 mt-3">
                        <input type="text" className="w-1/3 text-slate-700" placeholder='Wallet'/>
                        <input type="text" className="w-2/3 text-slate-700" placeholder='https://nexarb.com/wallet'/>
                        <Image src={"/img/trash-2.svg"} alt='Trash Icon' width={25} height={25}/>
                    </div>
                    <div className="flex gap-3 mt-3">
                        <input type="text" className="w-1/3 text-slate-700" placeholder='Support'/>
                        <input type="text" className="w-2/3 text-slate-700" placeholder='https://nexarb.com/support'/>
                        <Image src={"/img/trash-2.svg"} alt='Trash Icon' width={25} height={25}/>
                    </div>
                    <div className="flex gap-2 mt-10 justify-start items-center">
                        <Image src={"/img/edit.svg"} alt='Edit Icon' width={25} height={25}/>
                        <p className="text-blue-600 text-xl">Add New Page</p>
                    </div>
                </form>
            </div>
            <div className="mt-10">
                <p className="text-blue-600 text-xl">Social Links</p>
                <form>
                    <div className="flex justify-between gap-4 mt-3">
                        <p className="text-slate-600 text-center">Facebook:</p>
                        <input type="text" className="text-slate-700"/>
                    </div>
                    <div className="flex justify-between gap-4 mt-3">
                        <p className="text-slate-600 text-center">Instagram:</p>
                        <input type="text" className="text-slate-700"/>
                    </div>
                    <div className="flex justify-between gap-4 mt-3">
                        <p className="text-slate-600 text-center">X:</p>
                        <input type="text" className="text-slate-700"/>
                    </div>
                    <div className="flex justify-between gap-4 mt-3">
                        <p className="text-slate-600">LinkedIn:</p>
                        <input type="text" className="text-slate-700"/>
                    </div>
                    <div className="flex justify-between gap-4 mt-3">
                        <p className="text-slate-600">YouTube:</p>
                        <input type="text" className="text-slate-700"/>
                    </div>
                </form>
            </div>
        </div>
        <div className="flex flex-col">
            <div className="flex flex-col mt-5">
                <div className="flex justify-between">
                    <p className="text-blue-600 text-xl">Footer Icon</p>
                    <Image src={"/img/trash-2.svg"} alt='Trash Icon' width={20} height={20}/>
                </div>
                <form className="mt-4">
                    <input type="file" />
                </form>
            </div>
            <div className="mt-5">
                <p className="text-blue-600 text-xl">Footer Menu</p>
                <div className="flex mt-3 bg-blue-400 rounded-xl">
                    <div className="w-28 p-2">
                        <p className="text-blue-600">Column 1</p>
                    </div>
                    <div className="w-28 p-2">
                        <p className="text-blue-600">Column 2</p>
                    </div>
                    <div className="w-28 p-2">
                        <p className="text-blue-600">Column 3</p>
                    </div>
                    <div className="p-2">
                        <p className="text-blue-600">Column 4</p>
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <div>
                    <form className="flex justify-around items-center">
                        <p className="text-slate-600">Column Name:</p>
                        <input type="text" className="w-64 justify-end" placeholder="COMPANY"/>
                    </form>
                </div>
                <div className="mt-5">
                    <form className="flex justify-between gap-4">
                        <input type="text" placeholder='About' />
                        <input type="text" className="w-64" placeholder="https://nexarb.com/about"/>
                        <Image
                            src={"/img/trash-2.svg"}
                            alt='Delete Icon'
                            width={25}
                            height={25}
                        />
                    </form>
                </div>
                <div className="mt-5">
                    <form className="flex justify-between gap-4">
                        <input type="text" placeholder='Contact' />
                        <input type="text" className="w-64" placeholder="https://nexarb.com/contact"/>
                        <Image
                            src={"/img/trash-2.svg"}
                            alt='Delete Icon'
                            width={25}
                            height={25}
                        />
                    </form>
                </div>
                <div className="mt-5">
                    <form className="flex justify-between gap-4">
                        <input type="text" placeholder='Affiliates' />
                        <input type="text" className="w-64" placeholder="https://nexarb.com/affiliates"/>
                        <Image
                            src={"/img/trash-2.svg"}
                            alt='Delete Icon'
                            width={25}
                            height={25}
                        />
                    </form>
                </div>
            </div>
            <div className="flex gap-4 mt-10 items-center">
                <Image
                    src={"/img/edit.svg"}
                    alt='Edit Icon'
                    width={30}
                    height={30}
                />
                <p className="text-blue-600 text-3xl">Add New Page</p>
            </div>
            <div className="mt-5">
                <textarea className="w-full h-24" placeholder='*NexArb* is the best platform to buy, sell and exchange Solana with ease.'></textarea>
            </div>
            <div className="mt-10 flex justify-end">
                <button className="p-2 w-56 bg-blue-600 text-white rounded-full">Save</button>
            </div>
        </div>
    </div>
  )
}

export default HeaderAndFooter