// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import WalletCard from "./components/WalletCard";
import ActionButtons from "./components/ActionButtons";
import Home from "./pages/Home";
import Tokens from "./pages/Tokens";
import Stocks from "./pages/Stocks";
import Swap from "./pages/Swap";
import { loadWallet } from "./utils/walletManager";

export default function App() {
  const wallet = loadWallet();

  return (
    <Router>
      <div className="min-h-screen bg-black text-white p-4">
        {/* Luôn show WalletCard/ActionButtons nếu có ví */}
        {wallet && (
          <>
            <WalletCard />
            <ActionButtons />

            {/* Tabs điều hướng chỉ hiện khi có ví */}
            <nav className="flex justify-around bg-gray-900 rounded-xl p-2 my-4">
              {[
                { to: "/tokens", label: "Tokens" },
                { to: "/stocks", label: "Stocks" },
                { to: "/swap", label: "Swap" },
              ].map((tab) => (
                <NavLink
                  key={tab.to}
                  to={tab.to}
                  className={({ isActive }) =>
                    (isActive ? "bg-blue-600" : "bg-gray-800") +
                    " flex-1 text-center py-2 rounded mx-1"
                  }
                >
                  {tab.label}
                </NavLink>
              ))}
            </nav>
          </>
        )}

        {/* Routes */}
        <Routes>
          {/* Mặc định vào Home để create/import ví */}
          <Route path="/" element={<Home />} />

          {/* Chỉ đi vào các route này khi đã có ví */}
          {wallet && (
            <>
              <Route path="/tokens" element={<Tokens />} />
              <Route path="/stocks" element={<Stocks />} />
              <Route path="/swap" element={<Swap />} />
            </>
          )}

          {/* Fallback về Home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}
