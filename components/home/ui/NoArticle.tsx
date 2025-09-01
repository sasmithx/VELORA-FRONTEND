import { View, Text } from "react-native";
import React from "react";

const NoArticle: React.FC = () => (
  <View className="flex-1 justify-center items-center">
    <Text className="text-text-primary text-lg">No articles found</Text>
    <Text className="text-text-secondary mt-2">
      Try a different search term
    </Text>
  </View>
);

export default NoArticle;
