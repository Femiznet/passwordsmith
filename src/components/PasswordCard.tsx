import { View, Text } from "react-native";

export default function PasswordCard({
  password,
}: {
  password: string;
}) {
  return (
    <View>
      <Text>{password}</Text>
    </View>
  );
}