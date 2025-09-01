import React from "react";
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Bookmark } from "lucide-react-native";

interface StatsCardProps {
  bookmarks: number;
}

const StatsCard: React.FC<StatsCardProps> = ({ bookmarks }) => {
  return (
    <View className="mt-4">
      <View
        className="bg-background-card border border-border rounded-2xl overflow-hidden shadow-medium"
        style={{
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.2,
          shadowRadius: 8,
          elevation: 5,
        }}
      >
        <LinearGradient
          colors={["rgba(14, 165, 233, 0.15)", "rgba(15, 23, 42, 0)"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          className="p-5"
        >
          <View className="flex-row items-center">
            <View className="w-14 h-14 rounded-full bg-primary/20 items-center justify-center mr-5 border border-primary/30">
              <Bookmark size={26} color="#0ea5e9" />
            </View>
            <View>
              <Text className="text-text-primary text-3xl font-bold">
                {bookmarks}
              </Text>
              <Text className="text-text-secondary text-sm">
                Saved Articles
              </Text>
            </View>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};

export default StatsCard;
