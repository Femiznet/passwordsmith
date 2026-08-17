import { useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import * as Clipboard from "expo-clipboard";

type CopyButtonProps = {
  value: string;
};

export default function CopyButton({ value }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await Clipboard.setStringAsync(value);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <Pressable style={styles.button} onPress={handleCopy}>
      <Text style={styles.text}>{copied ? "Copied!" : "Copy"}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 12,
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    alignItems: "center",
  },

  text: {
    fontWeight: "600",
  },
});