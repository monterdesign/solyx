// src/utils/tokenRegistry.js
import { TokenListProvider, ENV } from "@solana/spl-token-registry";

let _allTokens = null;

export async function fetchAllTokens() {
  if (_allTokens) return _allTokens;
  const tokens = await new TokenListProvider().resolve();
  _allTokens = tokens
    .filterByChainId(ENV.MainnetBeta)
    .getList()
    .map((t) => ({
      mint: t.address,
      symbol: t.symbol,
      name: t.name,
      logoURI: t.logoURI,
      decimals: t.decimals,
    }));
  return _allTokens;
}

/**
 * Lấy danh sách các token phổ biến (ví dụ top 100 theo marketcap),
 * bạn có thể lọc theo một mảng whitelist các symbol như Solflare làm sẵn.
 */
const popularSymbols = [
  "SOL","USDC","USDT","BTC","ETH","SRM","RAY","MAPS","LIKE","SLRS", /* ... */
];

export async function fetchPopularTokens() {
  const all = await fetchAllTokens();
  return all.filter((t) => popularSymbols.includes(t.symbol));
}
