import React from 'react';
import { motion } from 'framer-motion';
import ChainCard from '../components/ChainCard';

const chains = [
  {
    name: 'Ethereum',
    description: 'The original smart contract platform, known for its security and decentralization.',
    chainId: '1',
    icon: 'ethereum'
  },
  {
    name: 'Optimism',
    description: 'Layer 2 scaling solution built on Ethereum, offering faster and cheaper transactions.',
    chainId: '10',
    icon: 'optimism'
  },
  {
    name: 'Polygon',
    description: 'Scalable blockchain network that enables fast, low-cost transactions.',
    chainId: '137',
    icon: 'polygon'
  },
  {
    name: 'Arbitrum',
    description: 'Layer 2 scaling solution that reduces costs while maintaining Ethereum security.',
    chainId: '42161',
    icon: 'arbitrum'
  },
  {
    name: 'Base',
    description: 'Secure and low-cost Layer 2 built to bring the next billion users to web3.',
    chainId: '8453',
    icon: 'base'
  }
];

const SupportedChains = () => {
  return (
    <section className="py-20 relative overflow-hidden" id="chains">
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-primary/5 to-black/0" />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Supported Chains
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            NexAI operates across multiple blockchain networks, providing seamless integration
            and enhanced functionality for your decentralized applications.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chains.map((chain) => (
            <ChainCard key={chain.chainId} {...chain} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportedChains; 