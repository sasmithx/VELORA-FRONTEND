// Network connectivity test utility
import axios from "axios";
import { getApiBaseUrl, getAlternativeUrls } from "./apiConfig";

export const testNetworkConnectivity = async () => {
  console.log("Testing network connectivity...");

  const urlsToTest = [getApiBaseUrl(), ...getAlternativeUrls()];

  for (const baseUrl of urlsToTest) {
    console.log(`Testing connectivity to: ${baseUrl}`);

    try {
      // Test basic connectivity
      const response = await axios.get(`${baseUrl}/health`, {
        timeout: 3000,
      });
      console.log(`Health check successful for ${baseUrl}:`, response.status);
      return { success: true, workingUrl: baseUrl };
    } catch (error) {
      console.log(`Health check failed for ${baseUrl}:`, error);

      // Try a more basic test
      try {
        const basicTest = await axios.get(baseUrl, {
          timeout: 3000,
        });
        console.log(
          `Basic connectivity successful for ${baseUrl}:`,
          basicTest.status
        );
        return { success: true, workingUrl: baseUrl };
      } catch (basicError) {
        console.log(`Basic connectivity failed for ${baseUrl}:`, basicError);
      }
    }
  }

  return { success: false, workingUrl: null };
};

export const testLoginEndpoint = async (email: string, password: string) => {
  console.log("Testing login endpoint...");

  const baseUrl = getApiBaseUrl();
  console.log(`Using base URL for login test: ${baseUrl}`);

  try {
    const response = await axios.post(
      `${baseUrl}/auth/login`,
      {
        email,
        password,
      },
      {
        timeout: 10000,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Login test successful:", {
      status: response.status,
      data: response.data,
    });
    return response.data;
  } catch (error: any) {
    console.log("Login test failed:", {
      message: error.message,
      status: error.response?.status,
      statusText: error.response?.statusText,
      data: error.response?.data,
      headers: error.response?.headers,
    });
    throw error;
  }
};
