import CopyButton from "@/components/CopyButton";
import { generatePassword } from "@/lib/generator";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View, Alert } from "react-native";

export default function App() {
  const [length, setLength] = useState("16");
  const [password, setPassword] = useState("");
  const [secret, setSecret] = useState("");
  const [service, setService] = useState("");
  const [error, setError] = useState("");


  const handleGenerate = async () => {
    if (!secret.trim() || !service.trim()) {
      Alert.alert("Missing information", "Enter both your secret and service.");
      setError("Enter both your secret and service.");
      return;
    }
    
    const parsedLength = Number(length);
    
    if (!Number.isInteger(parsedLength) || parsedLength < 8 || parsedLength > 64) {
      Alert.alert("Invalid length", "Password length must be between 8 and 64.");
      setError("Password length must be between 8 and 64.");
      return;
    }

    const result = await generatePassword({
      secret,
      service,
      policy: {
        length: parsedLength,
        lowercase: true,
        uppercase: true,
        numbers: true,
        symbols: true,
        version: 1,
      },
    });
  
    setPassword(result.password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PasswordSmith</Text>
      <Text style={styles.subtitle}>Generate a strong password.</Text>

      <Text style={styles.label}>Password length</Text>

      <TextInput
        style={styles.input}
        placeholder="Secret"
        secureTextEntry
        value={secret}
        onChangeText={setSecret}
      />

      <TextInput
        style={styles.input}
        placeholder="Service"
        value={service}
        onChangeText={setService}
      />

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={length}
        onChangeText={setLength}
      />
      <Pressable style={styles.button} onPress={handleGenerate}>
        <Text style={styles.buttonText}>Generate Password</Text>
      </Pressable>

      <CopyButton value={password} />

      {error !== "" && <Text style={styles.error}>{error}</Text>}

      {password !== "" && (
          <Text style={styles.password}>{password}</Text>
      )}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
  },

  title: {
    fontSize: 32,
    fontWeight: "700",
  },

  subtitle: {
    marginTop: 8,
    fontSize: 16,
  },

  label: {
    marginTop: 32,
    marginBottom: 8,
    fontSize: 16,
    fontWeight: "600",
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },

  button: {
    marginTop: 16,
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: "#000",
  },
  
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  password: {
    marginTop: 24,
    fontSize: 18,
    fontWeight: "600",
  },

  error: {
    marginTop: 8,
    color: "red",
    fontSize: 14,
  },
  
});