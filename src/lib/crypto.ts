import * as Crypto from "expo-crypto";

export async function sha256(text: string) {
  return Crypto.digestStringAsync(
    Crypto.CryptoDigestAlgorithm.SHA256,
    text
  );
}