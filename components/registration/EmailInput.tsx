import React from "react";
import { View, Text, TextInput } from "react-native";
import { Mail } from "lucide-react-native";

interface EmailInputProps {
  email: string;
  setEmail: (email: string) => void;
  emailError: string;
}

const EmailInput: React.FC<EmailInputProps> = ({
  email,
  setEmail,
  emailError,
}) => {
  return (
    <View>
      <View className="flex-row items-center bg-background-card border border-border rounded-lg px-4 py-3 shadow-soft">
        <Mail size={20} color="#0ea5e9" />
        <TextInput
          className="flex-1 text-text-primary text-base ml-2"
          placeholder="Email"
          placeholderTextColor="#64748b"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
      {emailError ? (
        <Text className="text-error mt-1">{emailError}</Text>
      ) : null}
    </View>
  );
};

export default EmailInput;
