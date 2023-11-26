'use client'
import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAccount } from "wagmi";

const Dashboard = () => {
    const { address, isConnecting, isDisconnected } = useAccount();
    const params = useParams();
    const userAddress = params?.address?.toString();
    const router = useRouter()

    useEffect(() => {
        if ((isDisconnected && isConnecting) || (userAddress && userAddress !== address)) {
            router.replace("/nexbridge")
        }
    }, [isDisconnected, isConnecting, address])

    return (
        <>
        </>
    )
}

export default Dashboard;