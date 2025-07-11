// src/components/TokenSearch.jsx
import React, { useState, useEffect } from "react";
import { fetchAllTokens } from "../utils/tokenRegistry";

const TokenSearch = ({ onSelect }) => {
  const [all, setAll] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchAllTokens().then(setAll);
  }, []);

  const filtered = all.filter(
    (t) =>
      t.symbol.toLowerCase().includes(query.toLowerCase()) ||
      t.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="mt-4">
      <input
        type="text"
        placeholder="Search token by symbol or name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-2 rounded bg-gray-800 text-white"
      />
      {query && (
        <ul className="bg-gray-900 rounded mt-2 max-h-48 overflow-y-auto text-sm">
          {filtered.map((t) => (
            <li
              key={t.mint}
              onClick={() => {
                onSelect(t);
                setQuery("");
              }}
              className="flex items-center gap-2 p-2 hover:bg-gray-700 cursor-pointer"
            >
              <img src={t.logoURI} alt={t.symbol} className="w-5 h-5 rounded-full" />
              <div>
                <div>{t.symbol}</div>
                <div className="text-xs text-gray-400">{t.name}</div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TokenSearch;
