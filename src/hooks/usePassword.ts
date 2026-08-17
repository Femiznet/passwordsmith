import { useState } from "react";

export function usePassword() {
  const [secret, setSecret] = useState("");
  const [service, setService] = useState("");
  const [password, setPassword] = useState("");

  return {
    secret,
    service,
    password,

    setSecret,
    setService,
    setPassword,
  };
}