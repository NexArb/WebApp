"use client"

const NexBridgeHomePage = () => {
    return (
        <>
            <div className="self-stretch h-screen w-screen flex flex-col justify-between">
                <div className="self-center flex flex-col justify-between w-3/5 ">
                    <div className="flex flex-col gap-8 mt-32 items-center">
                        <div className="self-stretch relative flex flex-col items-center pb-16">
                            <div className="text-center text-xl font-['DM_Sans'] font-medium leading-[32px] text-white absolute mt-32 left-0 h-24 w-full">
                                Join our peer-to-peer trading platform and use the fastest and most secure payment method for buying and selling Solana with users just like you.
                            </div>
                            <div
                                className="text-center text-6xl font-['DM_Sans'] font-bold tracking-[-1] leading-[86px] text-white relative w-full"
                            >
                                Cross-chain Bridge
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NexBridgeHomePage;