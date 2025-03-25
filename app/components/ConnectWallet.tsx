import React from 'react';
import { motion } from 'framer-motion';
import WalletCard from './WalletCard';

const wallets = [
  {
    name: 'MetaMask',
    icon: 'metamask',
  },
  {
    name: 'WalletConnect',
    icon: 'walletconnect',
  },
  {
    name: 'Coinbase Wallet',
    icon: 'coinbase',
  },
];

const ConnectWallet = () => {
  const handleConnect = (walletName: string) => {
    console.log(`Connecting to ${walletName}...`);
    // Add wallet connection logic here
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="w-full max-w-md p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700"
      >
        <h2 className="text-2xl font-bold text-white mb-2">Connect Wallet</h2>
        <p className="text-gray-400 mb-6">
          Choose your preferred wallet to connect to our dApp
        </p>
        <div className="space-y-3">
          {wallets.map((wallet) => (
            <WalletCard
              key={wallet.name}
              name={wallet.name}
              icon={wallet.icon}
              onClick={() => handleConnect(wallet.name)}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ConnectWallet; 