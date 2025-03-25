import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ChainCardProps {
  name: string;
  description: string;
  chainId: string;
  icon: string;
}

const ChainCard = ({ name, description, chainId, icon }: ChainCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative group overflow-hidden rounded-xl bg-gradient-to-br from-gray-900/40 to-gray-900/10 backdrop-blur-sm border border-gray-800 p-6 hover:border-primary/50 transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <div className="relative w-12 h-12">
          <Image
            src={`/chains/${icon}.svg`}
            alt={`${name} logo`}
            fill
            className="object-contain"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
          <p className="text-gray-400 text-sm mb-3">{description}</p>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500">Chain ID:</span>
            <span className="text-xs font-mono bg-gray-800 px-2 py-1 rounded">
              {chainId}
            </span>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
};

export default ChainCard; 