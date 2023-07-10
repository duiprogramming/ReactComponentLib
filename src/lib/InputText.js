import { TextInput } from "react-native";

const InputText = ({ type = "text", label, value, onChange, placeholder="useless placeholder"}) => (
    <TextInput
        onChangeText={onChange}
        value={value}
        placeholder={placeholder}
      />
);

export default InputText;