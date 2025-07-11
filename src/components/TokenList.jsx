// src/components/TokenList.jsx
import React, { useEffect, useState } from "react";
import { fetchPopularTokens } from "../utils/tokenRegistry";
import { getWalletTokens } from "../utils/solanaConnection";

export default function TokenList({ wallet }) {
  const [tokens, setTokens] = useState([]);
  const [balances, setBalances] = useState({});

  useEffect(() => {
    fetchPopularTokens().then(setTokens);
  }, []);

  useEffect(() => {
    if (wallet) {
      getWalletTokens(wallet.publicKey.toBase58()).then((onchain) => {
        const map = Object.fromEntries(onchain.map((t) => [t.mint, t.amount]));
        setBalances(map);
      });
    }
  }, [wallet]);

  return (
    <div className="mt-4 bg-gray-900 p-4 rounded-xl">
      <h2 className="text-lg font-semibold mb-3">Tokens</h2>
      <ul className="space-y-3">
        {tokens.map((t) => (
          <li key={t.mint} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={t.logoURI} alt={t.symbol} className="w-6 h-6 rounded-full" />
              <div>
                <div className="font-medium">{t.symbol}</div>
                <div className="text-xs text-gray-400">{t.name}</div>
              </div>
            </div>
            <div className="text-sm">
              {balances[t.mint]?.toFixed(4) || "0.0000"}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
