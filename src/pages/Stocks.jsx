// src/pages/Stocks.jsx
import React from "react";
import StockList from "../components/StockList";

export default function Stocks() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Available xStocks</h2>
      <StockList />
    </div>
  );
}
