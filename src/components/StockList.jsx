import React, { useEffect, useState } from "react";
import { xStockList } from "../utils/xStockList";

export default function StockList() {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    // Hiện dùng dữ liệu tĩnh
    setStocks(xStockList);
  }, []);

  return (
    <div className="mt-4 bg-gray-900 p-4 rounded-xl">
      <h2 className="text-lg font-semibold mb-3">xStock List</h2>
      <ul className="space-y-3">
        {stocks.map((s) => (
          <li
            key={s.symbol}
            className="flex justify-between items-center bg-gray-800 p-3 rounded-lg"
          >
            <div className="flex items-center gap-3">
              <img src={s.logoURI} alt={s.symbol} className="w-6 h-6 rounded-full" />
              <div>
                <div className="font-medium text-white">{s.name}</div>
                <div className="text-xs text-gray-400">{s.symbol}</div>
              </div>
            </div>
            <button className="bg-blue-600 px-3 py-1 rounded text-white text-sm">
              Swap
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
