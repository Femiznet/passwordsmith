import { Button } from "react-native";

export default function GenerateButton({
  onPress,
}: {
  onPress: () => void;
}) {
  return (
    <Button
      title="Generate Password"
      onPress={onPress}
    />
  );
}