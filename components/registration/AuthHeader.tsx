import React from "react";
import { View, Text } from "react-native";

interface AuthHeaderProps {
  title: string;
  subtitle: string;
}

const AuthHeader: React.FC<AuthHeaderProps> = ({ title, subtitle }) => {
  return (
    <View className="mt-16 mb-8">
      <Text className="text-4xl font-bold text-text-primary mb-2 text-center">
        {title}
      </Text>
      <Text className="text-lg text-text-secondary text-center">
        {subtitle}
      </Text>
    </View>
  );
};

export default AuthHeader;
