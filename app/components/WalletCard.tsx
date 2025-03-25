import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface WalletCardProps {
  name: string;
  icon: string;
  onClick: () => void;
}

const WalletCard = ({ name, icon, onClick }: WalletCardProps) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="w-full p-4 rounded-xl bg-gradient-to-br from-gray-900/40 to-gray-900/10 backdrop-blur-sm 
        border border-gray-800 hover:border-primary/50 transition-all duration-300 group"
    >
      <div className="flex items-center gap-4">
        <div className="relative w-12 h-12">
          <Image
            src={`/wallets/${icon}.svg`}
            alt={`${name} logo`}
            fill
            className="object-contain"
          />
        </div>
        <span className="text-lg font-medium text-white group-hover:text-primary transition-colors">
          {name}
        </span>
      </div>
    </motion.button>
  );
};

export default WalletCard; 