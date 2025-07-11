// src/pages/Home.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  generateMnemonic,
  saveMnemonic,
  getWalletKeypair,
} from "../utils/walletManager";
import * as bip39 from "bip39";

export default function Home() {
  const [step, setStep] = useState(0);
  const [seed, setSeed] = useState("");      
  const [confirmInput, setConfirmInput] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Nếu đã có ví → vào tokens
  useEffect(() => {
    if (getWalletKeypair()) navigate("/tokens", { replace: true });
  }, [navigate]);

  // Step 0: Welcome
  if (step === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 p-6">
        <h1 className="text-4xl font-bold text-white mb-12">
          Welcome to Solyx
        </h1>
        <button
          onClick={() => {
            const m = generateMnemonic();
            setSeed(m);
            setError("");
            setStep(1);
          }}
          className="w-full max-w-md bg-white bg-opacity-20 hover:bg-opacity-30 text-white py-4 rounded-xl mb-4 flex items-center justify-center"
        >
          Create a New Wallet
        </button>
        <button
          onClick={() => {
            setSeed("");
            setError("");
            setStep(4);
          }}
          className="w-full max-w-md bg-white bg-opacity-20 hover:bg-opacity-30 text-white py-4 rounded-xl"
        >
          Import Existing Wallet
        </button>
      </div>
    );
  }

  // Step 1: Hiển thị mnemonic để backup
  if (step === 1) {
    return (
      <div className="p-6 min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 text-white">
        <h2 className="text-2xl font-semibold mb-4">Backup Your Seed Phrase</h2>
        <p className="mb-6">
          Write down these 12 words in order and keep them safe. You will need to confirm in the next step.
        </p>
        <pre className="bg-white bg-opacity-10 p-6 rounded-lg mb-6 font-mono text-sm leading-relaxed whitespace-pre-wrap">
          {seed}
        </pre>
        <div className="flex space-x-4">
          <button
            onClick={() => setStep(0)}
            className="px-4 py-2 bg-gray-700 rounded-lg"
          >
            Back
          </button>
          <button
            onClick={() => setStep(2)}
            className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded-lg"
          >
            I have backed up
          </button>
        </div>
      </div>
    );
  }

  // Step 2: Confirm mnemonic
  if (step === 2) {
    return (
      <div className="p-6 min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 text-white">
        <h2 className="text-2xl font-semibold mb-4">Confirm Your Seed Phrase</h2>
        <textarea
          rows={3}
          value={confirmInput}
          onChange={(e) => setConfirmInput(e.target.value)}
          className="w-full bg-white bg-opacity-10 p-4 rounded-lg mb-4 placeholder-white placeholder-opacity-70"
          placeholder="Re-enter your 12-word seed phrase"
        />
        {error && <p className="text-red-300 mb-2">{error}</p>}
        <div className="flex space-x-4">
          <button
            onClick={() => setStep(1)}
            className="px-4 py-2 bg-gray-700 rounded-lg"
          >
            Back
          </button>
          <button
            onClick={() => {
              if (confirmInput.trim() !== seed.trim()) {
                setError("Seed phrase does not match. Please try again.");
              } else {
                saveMnemonic(seed.trim());
                navigate("/tokens", { replace: true });
              }
            }}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg"
          >
            Confirm and Continue
          </button>
        </div>
      </div>
    );
  }

  // Step 4: Import existing mnemonic
  if (step === 4) {
    return (
      <div className="p-6 min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 text-white">
        <h2 className="text-2xl font-semibold mb-4">Import Wallet</h2>
        <textarea
          rows={3}
          value={seed}
          onChange={(e) => {
            setSeed(e.target.value);
            setError("");
          }}
          className="w-full bg-white bg-opacity-10 p-4 rounded-lg mb-4 placeholder-white placeholder-opacity-70"
          placeholder="Paste your 12-word seed phrase"
        />
        {error && <p className="text-red-300 mb-2">{error}</p>}
        <div className="flex space-x-4">
          <button
            onClick={() => setStep(0)}
            className="px-4 py-2 bg-gray-700 rounded-lg"
          >
            Back
          </button>
          <button
            onClick={() => {
              if (!bip39.validateMnemonic(seed.trim())) {
                setError("Invalid seed phrase. Please check and try again.");
              } else {
                saveMnemonic(seed.trim());
                navigate("/tokens", { replace: true });
              }
            }}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg"
          >
            Import and Continue
          </button>
        </div>
      </div>
    );
  }

  return null;
}
