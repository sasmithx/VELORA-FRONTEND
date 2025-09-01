import React from "react";
import { View, Text } from "react-native";
import { User, Clock } from "lucide-react-native";
import UserModel from "../../model/User";

interface ProfileHeaderProps {
  user: UserModel;
}

const formatMemberSince = (dateString: string | undefined): string => {
  if (!dateString) return "New member";

  try {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });
  } catch (e) {
    return dateString;
  }
};

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ user }) => {
  return (
    <View className="items-center mb-8">
      <View className="relative">
        <View className="w-26 h-26 rounded-full bg-background-card border border-border items-center justify-center m-1 p-10 shadow-medium">
          <User size={48} color="#0ea5e9" />
        </View>
      </View>

      <View className="mt-5 items-center">
        <Text className="text-text-primary text-2xl font-bold">
          {user.username || "User"}
        </Text>
        <Text className="text-text-secondary text-sm mt-1">
          {user.email || "user@example.com"}
        </Text>
        <View className="flex-row items-center mt-3 bg-background-card border border-border px-4 py-1.5 rounded-full shadow-soft">
          <Clock size={12} color="#94a3b8" />
          <Text className="text-text-tertiary text-xs ml-2">
            Member since {formatMemberSince(user.createdAt)}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileHeader;
