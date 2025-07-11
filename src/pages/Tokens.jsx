// src/pages/Tokens.jsx
import React from "react";
import TokenSearch from "../components/TokenSearch";
import TokenAddCustom from "../components/TokenAddCustom";
import TokenList from "../components/TokenList";
import { loadWallet } from "../utils/walletManager";

export default function Tokens() {
  const wallet = loadWallet();

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">My Tokens</h2>
      <TokenSearch onSelect={(mint) => {/* ... */}} />
      <TokenAddCustom onAdd={(mint) => {/* ... */}} />
      <TokenList wallet={wallet} />
    </div>
  );
}
