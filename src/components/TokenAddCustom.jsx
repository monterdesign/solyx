// src/components/TokenAddCustom.jsx
import React, { useState } from "react";

export default function TokenAddCustom({ onAdd }) {
  const [mint, setMint] = useState("");
  return (
    <div className="mt-4">
      <input
        type="text"
        placeholder="Enter custom token mint address"
        value={mint}
        onChange={(e) => setMint(e.target.value)}
        className="w-full p-2 rounded bg-gray-800 text-white"
      />
      <button
        onClick={() => {
          onAdd(mint);
          setMint("");
        }}
        className="mt-2 bg-yellow-600 w-full py-2 rounded text-white"
      >
        Add Token
      </button>
    </div>
  );
}
