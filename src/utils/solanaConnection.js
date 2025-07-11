import { Connection, clusterApiUrl, PublicKey } from "@solana/web3.js";

const RPC_URL = import.meta.env.VITE_SOLANA_NETWORK || clusterApiUrl("mainnet-beta");
export const connection = new Connection(RPC_URL, "confirmed");

/**
 * Lấy danh sách token SPL (bao gồm SOL) trong ví.
 * @param {string} ownerAddress - PublicKey của ví dưới dạng base58.
 * @returns {Promise<Array<{mint: string, amount: number, symbol?: string}>>}
 */
export async function getWalletTokens(ownerAddress) {
  const ownerPubkey = new PublicKey(ownerAddress);

  // Lấy token accounts (bao gồm SOL balance)
  const resp = await connection.getParsedTokenAccountsByOwner(ownerPubkey, {
    programId: new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA")
  });

  const tokens = resp.value.map(({ account, pubkey }) => {
    const info = account.data.parsed.info;
    const mint = info.mint;
    const amount = parseInt(info.tokenAmount.amount, 10) / Math.pow(10, info.tokenAmount.decimals);
    return { mint, amount };
  });

  // Thêm SOL balance
  const lamports = await connection.getBalance(ownerPubkey);
  tokens.unshift({ mint: "So11111111111111111111111111111111111111112", amount: lamports / 1e9 });

  return tokens;
}
