import React from "react";

const WalletCard = ({ publicKey }) => {
  return (
    <div className="p-4 bg-gray-900 rounded-xl shadow-md">
      <h2 className="text-lg font-bold mb-2">Your Wallet</h2>
      <p className="break-all text-sm text-green-400">{publicKey}</p>
    </div>
  );
};

export default WalletCard;