import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Lock, Eye, EyeOff } from "lucide-react-native";

interface PasswordInputProps {
  password: string;
  setPassword: (password: string) => void;
  passwordError: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  password,
  setPassword,
  passwordError,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View>
      <View className="flex-row items-center bg-background-card border border-border rounded-lg px-4 py-3 shadow-soft">
        <Lock size={20} color="#0ea5e9" />
        <TextInput
          className="flex-1 text-text-primary text-base ml-2"
          placeholder="Password"
          placeholderTextColor="#64748b"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          autoCapitalize="none"
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          {showPassword ? (
            <EyeOff size={20} color="#64748b" />
          ) : (
            <Eye size={20} color="#64748b" />
          )}
        </TouchableOpacity>
      </View>
      {passwordError ? (
        <Text className="text-error mt-1">{passwordError}</Text>
      ) : null}
    </View>
  );
};

export default PasswordInput;
