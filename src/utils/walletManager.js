// src/utils/walletManager.js
import { Keypair } from "@solana/web3.js";
import * as bip39 from "bip39";
import { derivePath } from "ed25519-hd-key";

const STORAGE_KEY = "solyx_wallet_mnemonic";

/**
 * Sinh mnemonic 12 từ (128-bit entropy).
 * @returns {string}
 */
export function generateMnemonic() {
  return bip39.generateMnemonic(128);
}

/**
 * Derive Keypair từ mnemonic.
 * Dùng chuẩn BIP44 path m/44'/501'/0'/0' cho Solana.
 * @param {string} mnemonic
 * @returns {Keypair}
 */
export function deriveKeypairFromMnemonic(mnemonic) {
  const seed = bip39.mnemonicToSeedSync(mnemonic);
  const { key } = derivePath("m/44'/501'/0'/0'", seed.toString("hex"));
  return Keypair.fromSeed(key);
}

/**
 * Lưu mnemonic vào localStorage.
 * @param {string} mnemonic
 */
export function saveMnemonic(mnemonic) {
  localStorage.setItem(STORAGE_KEY, mnemonic.trim());
}

/**
 * Load mnemonic từ localStorage.
 * @returns {string|null}
 */
export function loadMnemonic() {
  return localStorage.getItem(STORAGE_KEY);
}

/**
 * Xóa mnemonic (logout).
 */
export function deleteWallet() {
  localStorage.removeItem(STORAGE_KEY);
}

/**
 * Lấy Keypair nếu đã lưu mnemonic.
 * @returns {Keypair|null}
 */
export function getWalletKeypair() {
  const m = loadMnemonic();
  if (!m) return null;
  try {
    return deriveKeypairFromMnemonic(m);
  } catch (e) {
    console.error("Invalid stored mnemonic:", e);
    return null;
  }
}
// alias cho loadWallet (giữ tương thích với import cũ)
export const loadWallet = getWalletKeypair;