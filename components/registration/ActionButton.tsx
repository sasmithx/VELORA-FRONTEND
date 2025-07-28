import React from "react";
import {TouchableOpacity, View, Text} from "react-native";
import {ArrowRight} from "lucide-react-native";

interface ActionButtonProps {
    onPress: () => void;
    title: string;
    disabled?: boolean;
}

const ActionButton: React.FC<ActionButtonProps> = ({
                                                       onPress,
                                                       title,
                                                       disabled = false,
                                                   }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled}
            className={`rounded-xl py-4 mt-6 ${
                disabled ? "bg-gray-400" : "bg-primary"
            }`}
        >
            <View className="flex-row items-center justify-center">
                <Text className="text-white font-semibold text-lg mr-2">{title}</Text>
                <ArrowRight size={20} color="white"/>
            </View>
        </TouchableOpacity>
    );
};

export default ActionButton;
