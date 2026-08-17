import { sha256 } from "./crypto";
import { LETTERS, NUMBERS, SYMBOLS } from "@/constants/charset";
import {
  GeneratePasswordOptions,
  PasswordResult,
} from "@/types/password";

function buildCharset(policy: GeneratePasswordOptions["policy"]) {
  let charset = "";

  if (policy.lowercase) charset += LETTERS.toLowerCase();
  if (policy.uppercase) charset += LETTERS.toUpperCase();
  if (policy.numbers) charset += NUMBERS;
  if (policy.symbols) charset += SYMBOLS;

  if (!charset) {
    throw new Error("At least one character set must be enabled.");
  }

  return charset;
}

export async function generatePassword({
  secret,
  service,
  policy,
}: GeneratePasswordOptions): Promise<PasswordResult> {
  const charset = buildCharset(policy);

  const input = `${secret.trim()}|${service.trim()}|v${policy.version}`;

  let hash = await sha256(input);

  let password = "";
  let counter = 0;

  while (password.length < policy.length) {
    for (let i = 0; i < hash.length && password.length < policy.length; i += 2) {
      const byte = parseInt(hash.substring(i, i + 2), 16);

      password += charset[byte % charset.length];
    }

    counter++;
    hash = await sha256(`${hash}:${counter}`);
  }

  return {
    password,
    strength:
      policy.length >= 16
        ? "Strong"
        : policy.length >= 10
        ? "Medium"
        : "Weak",
  };
}