import React, { useState } from 'react';
import { performSwap } from '../utils/jupiterSwap';

const SwapInterface = () => {
  const [fromToken, setFromToken] = useState('');
  const [toToken, setToToken] = useState('');
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState('');

  const handleSwap = async () => {
    try {
      setStatus('Swapping...');
      const result = await performSwap(fromToken, toToken, amount);
      setStatus(result.success ? 'Swap successful!' : 'Swap failed.');
    } catch (e) {
      setStatus('Error: ' + e.message);
    }
  };

  return (
    <div className="bg-gray-900 p-4 rounded-xl">
      <h2 className="text-xl font-bold mb-4">Swap Tokens</h2>
      <div className="mb-2">
        <input
          type="text"
          placeholder="From Token (e.g. SOL)"
          value={fromToken}
          onChange={(e) => setFromToken(e.target.value)}
          className="w-full p-2 rounded bg-gray-800 text-white"
        />
      </div>
      <div className="mb-2">
        <input
          type="text"
          placeholder="To Token (e.g. USDC)"
          value={toToken}
          onChange={(e) => setToToken(e.target.value)}
          className="w-full p-2 rounded bg-gray-800 text-white"
        />
      </div>
      <div className="mb-2">
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 rounded bg-gray-800 text-white"
        />
      </div>
      <button
        onClick={handleSwap}
        className="bg-blue-600 hover:bg-blue-700 text-white w-full py-2 rounded mt-2"
      >
        Swap
      </button>
      <p className="mt-3 text-sm text-green-400">{status}</p>
    </div>
  );
};

export default SwapInterface;
