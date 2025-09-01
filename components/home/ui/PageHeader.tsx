import React from "react";
import { View, Text } from "react-native";

interface BookmarksHeaderProps {
  title: string;
  subtitle: string;
}

const PageHeader: React.FC<BookmarksHeaderProps> = ({ title, subtitle }) => (
  <View className="pt-4 pb-2">
    <Text className="text-text-primary text-3xl font-bold">{title}</Text>
    <Text className="text-text-secondary text-base">{subtitle}</Text>
  </View>
);

export default PageHeader;
