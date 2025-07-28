import { Platform } from "react-native";
import Constants from "expo-constants";

/**
 * Get the correct base URL for API calls based on the platform and environment
 */
export const getApiBaseUrl = (): string => {
  // Check if running in Expo Go (development)
  const isExpoGo = Constants.appOwnership === "expo";

  // Your backend server IP and port
  const BACKEND_PORT = 5000;

  if (Platform.OS === "android") {
    if (isExpoGo || __DEV__) {
      // For Android Emulator, use the special IP that maps to host machine's localhost
      return `http://10.0.2.2:${BACKEND_PORT}/api/v1`;
    } else {
      // For physical Android device, use your actual network IP
      return `http://192.168.43.254:${BACKEND_PORT}/api/v1`;
    }
  } else if (Platform.OS === "ios") {
    // iOS Simulator can use localhost or your network IP
    if (isExpoGo || __DEV__) {
      return `http://localhost:${BACKEND_PORT}/api/v1`;
    } else {
      return `http://192.168.43.254:${BACKEND_PORT}/api/v1`;
    }
  }

  // Fallback for web or other platforms
  return `http://localhost:${BACKEND_PORT}/api/v1`;
};

/**
 * Alternative URLs to try if the primary one fails
 */
export const getAlternativeUrls = (): string[] => {
  const BACKEND_PORT = 5000;

  if (Platform.OS === "android") {
    return [
      `http://10.0.2.2:${BACKEND_PORT}/api/v1`, // Android Emulator
      `http://192.168.43.254:${BACKEND_PORT}/api/v1`, // Your network IP
      `http://192.168.1.254:${BACKEND_PORT}/api/v1`, // Common router IP
      `http://localhost:${BACKEND_PORT}/api/v1`, // Localhost
    ];
  } else {
    return [
      `http://localhost:${BACKEND_PORT}/api/v1`,
      `http://192.168.43.254:${BACKEND_PORT}/api/v1`,
      `http://127.0.0.1:${BACKEND_PORT}/api/v1`,
    ];
  }
};
