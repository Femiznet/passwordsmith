import { usePassword } from "@/hooks/usePassword";
import { generatePassword } from "@/lib/generator";

import SecretInput from "./SecretInput";
import ServiceInput from "./ServiceInput";
import GenerateButton from "./GenerateButton";
import PasswordCard from "./PasswordCard";

export default function PasswordForm() {
  const {
    secret,
    service,
    password,
    setSecret,
    setService,
    setPassword,
  } = usePassword();

  async function handleGenerate() {
    if (!secret.trim() || !service.trim()) return;

    const result = await generatePassword({
      secret,
      service,
      policy: {
        length: 16,
        lowercase: true,
        uppercase: true,
        numbers: true,
        symbols: true,
        version: 1,
      },
    });

    setPassword(result.password);
  }

  return (
    <>
      <SecretInput
        value={secret}
        onChangeText={setSecret}
      />

      <ServiceInput
        value={service}
        onChangeText={setService}
      />

      <GenerateButton
        onPress={handleGenerate}
      />

      <PasswordCard
        password={password}
      />
    </>
  );
}