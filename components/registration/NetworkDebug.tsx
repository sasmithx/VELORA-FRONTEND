import React, { useState } from "react";
import { View, TouchableOpacity, Text, Alert } from "react-native";
import {
  testNetworkConnectivity,
  testLoginEndpoint,
} from "../../utils/networkTest";

interface NetworkDebugProps {
  email: string;
  password: string;
}

const NetworkDebug: React.FC<NetworkDebugProps> = ({ email, password }) => {
  const [testing, setTesting] = useState(false);

  const handleNetworkTest = async () => {
    setTesting(true);
    try {
      const result = await testNetworkConnectivity();
      Alert.alert(
        "Network Test",
        result.success
          ? `Network connectivity successful!\nWorking URL: ${result.workingUrl}`
          : "All network connectivity tests failed! Check if your backend server is running."
      );
    } catch (error) {
      Alert.alert("Network Test", `Network test failed: ${error}`);
    }
    setTesting(false);
  };

  const handleLoginTest = async () => {
    if (!email || !password) {
      Alert.alert("Test Login", "Please enter email and password first");
      return;
    }

    setTesting(true);
    try {
      const result = await testLoginEndpoint(email, password);
      Alert.alert(
        "Login Test",
        `Login test successful! Token received: ${result.accessToken.substring(
          0,
          20
        )}...`
      );
    } catch (error: any) {
      Alert.alert("Login Test", `Login test failed: ${error.message}`);
    }
    setTesting(false);
  };

  return (
    <View className="space-y-2 mt-4">
      <TouchableOpacity
        onPress={handleNetworkTest}
        disabled={testing}
        className={`p-3 rounded border ${
          testing ? "bg-gray-200" : "bg-blue-100"
        }`}
      >
        <Text className="text-center text-blue-700">
          {testing ? "Testing..." : "Test Network Connectivity"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleLoginTest}
        disabled={testing || !email || !password}
        className={`p-3 rounded border ${
          testing || !email || !password ? "bg-gray-200" : "bg-green-100"
        }`}
      >
        <Text className="text-center text-green-700">
          {testing ? "Testing..." : "Test Direct Login"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default NetworkDebug;
