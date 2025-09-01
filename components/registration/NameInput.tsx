import React from "react";
import { View, Text, TextInput } from "react-native";
import { User } from "lucide-react-native";

interface NameInputProps {
  username: string;
  setUsername: (username: string) => void;
  nameError: string;
}

const NameInput: React.FC<NameInputProps> = ({
  username,
  setUsername,
  nameError,
}) => {
  return (
    <View>
      <View className="flex-row items-center bg-background-card border border-border rounded-lg px-4 py-3 shadow-soft">
        <User size={20} color="#0ea5e9" />
        <TextInput
          className="flex-1 text-text-primary text-base ml-2"
          placeholder="Full Name"
          placeholderTextColor="#64748b"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="words"
        />
      </View>
      {nameError ? <Text className="text-error mt-1">{nameError}</Text> : null}
    </View>
  );
};

export default NameInput;
