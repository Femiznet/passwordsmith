import { Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PasswordForm from "@/components/PasswordForm";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>PasswordSmith</Text>

      <Text style={styles.subtitle}>
        Deterministic Password Generator
      </Text>

      <PasswordForm />
    </SafeAreaView>
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
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 32,
  },
});