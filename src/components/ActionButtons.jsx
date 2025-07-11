import React from "react";

const ActionButtons = ({ onReceive, onBuy, onSend, onSwap }) => {
  return (
    <div className="flex justify-between mt-4 gap-2">
      <button
        onClick={onReceive}
        className="bg-green-700 hover:bg-green-800 px-4 py-2 rounded text-white w-full"
      >
        Receive
      </button>
      <button
        onClick={onBuy}
        className="bg-yellow-600 hover:bg-yellow-700 px-4 py-2 rounded text-white w-full"
      >
        Buy
      </button>
      <button
        onClick={onSwap}
        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white w-full"
      >
        Swap
      </button>
      <button
        onClick={onSend}
        className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white w-full"
      >
        Send
      </button>
    </div>
  );
};

export default ActionButtons;
