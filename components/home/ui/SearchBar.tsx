import React from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { Search } from "lucide-react-native";

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onSubmit: () => void;
  onClear: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  setSearchQuery,
  onSubmit,
  onClear,
}) => (
  <View className="my-4">
    <View className="flex-row items-center bg-background-card border border-border rounded-lg px-4 py-3 shadow-soft">
      <Search size={20} color="#64748b" />
      <TextInput
        className="flex-1 text-text-primary text-base ml-2"
        placeholder="Search for news..."
        placeholderTextColor="#64748b"
        value={searchQuery}
        onChangeText={setSearchQuery}
        onSubmitEditing={onSubmit}
      />
      {searchQuery.length > 0 && (
        <TouchableOpacity onPress={() => onClear()}>
          <Text className="text-text-tertiary">Clear</Text>
        </TouchableOpacity>
      )}
    </View>
  </View>
);

export default SearchBar;
