import { TextInput } from "react-native";

interface Props {
  value: string;
  onChangeText: (text: string) => void;
}

export default function SecretInput(props: Props) {
  return (
    <TextInput
      placeholder="Service (GitHub, Gmail...)"
      value={props.value}
      onChangeText={props.onChangeText}
    />
  );
}