// src/utils/logger.js

// Mảng lưu log nội bộ
const logs = [];

/**
 * Ghi log một giao dịch swap
 * @param {{ fromMint: string, toMint: string, amountIn: number, amountOut: number, fee: number }} entry
 */
export function logSwap({ fromMint, toMint, amountIn, amountOut, fee }) {
  const entry = {
    date: new Date().toLocaleString(), // để dùng chung với component
    fromMint,
    toMint,
    amountIn,
    amountOut,
    fee,
  };
  logs.push(entry);
  console.log("Swap Log:", entry);
}

/**
 * Lấy danh sách log (khớp với import)
 * @returns {Array}
 */
export function getEarningsLog() {
  return logs;
}
