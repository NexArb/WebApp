"use client"
import React from 'react'

const LandingPage = () => {
  return (
    <div className="h-5/6 bg-white ml-10 rounded-2xl p-10">
        <div className="flex">
            <div className="w-1/2 p-5">
                <form>
                    <h1 className="text-2xl text-blue-500">Call to action</h1>
                    <input type="text" className="w-full text-slate-500" placeholder={"Fastest and Secure way to Solana"}/>
                    <textarea name="description" id="desc" className="mt-5 w-full h-28 text-slate-500" placeholder='...'></textarea>
                </form>
            </div>
            <div className="w-1/2 p-5 ml-5">
                <h1 className="text-2xl text-blue-500">Explainer Section</h1>
                <form>
                    <input type="text" className="w-full" placeholder='Simple steps to get started...'/>
                    <div className="flex justify-between">
                        <div className="flex flex-col mt-5">
                            <input type="text" className="w-40 mb-3 text-slate-600"/>
                            <input type="text" className="w-40 text-slate-600" />
                        </div>
                        <div className="flex flex-col mt-5 ml-3">
                            <input type="text" className="w-40 mb-3 text-slate-600"/>
                            <input type="text" className="w-40 text-slate-600" />
                        </div>
                        <div className="flex flex-col mt-5 ml-3">
                            <input type="text" className="w-40 mb-3 text-slate-600"/>
                            <input type="text" className="w-40 text-slate-600" />
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex flex-col mt-5">
                            <input type="text" className="w-40 mb-3 text-slate-600"/>
                            <input type="text" className="w-40 text-slate-600" />
                        </div>
                        <div className="flex flex-col mt-5 ml-3">
                            <input type="text" className="w-40 mb-3 text-slate-600"/>
                            <input type="text" className="w-40 text-slate-600" />
                        </div>
                        <div className="flex flex-col mt-5 ml-3">
                            <input type="text" className="w-40 mb-3 text-slate-600"/>
                            <input type="text" className="w-40 text-slate-600" />
                        </div>
                    </div>
                    
                </form>
            </div>
        </div>
        <div className="flex">
            <div className="p-5 w-1/2">
                <h1 className="text-2xl text-blue-600">About</h1>
                <form>
                    <input type="text" className="w-full" placeholder="SEND AND RECIEVE" />
                    <textarea className="mt-4 w-full" placeholder='...'></textarea>
                </form>
            </div>
            <div className="p-5 w-1/2">
                <h1 className="text-2xl text-blue-600">Last Section</h1>
                <form>
                    <input type="text" className="w-full" placeholder="Confidentiality" />
                    <input type="text" className="w-full mt-4" placeholder="We do not store personal data on our servers and never transfer it to third parties." />
                </form>
            </div>
        </div>
        <div className="flex justify-end">
            <button className="bg-blue-600 p-2 rounded-full w-44 mr-12 mt-3">Save</button>
        </div>
    </div>
  )
}

export default LandingPage