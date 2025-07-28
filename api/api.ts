import axios from "axios";
import {getApiBaseUrl} from "../utils/apiConfig";
import {useAccessToken} from "../utils/axiosUtils";
import {refreshTokenCall} from "./refreshToken";

const api = axios.create({
    baseURL: getApiBaseUrl(),
    withCredentials: true,
    timeout: 10000,
});

console.log("API base URL configured:", api.defaults.baseURL);

api.interceptors.request.use(
    async (config) => {
        if (!config.url?.startsWith("/auth")) {
            const token = await useAccessToken();
            if (token) {
                config.headers = config.headers || {};
                config.headers.Authorization = `Bearer ${token}`;
            }
        }
        return config;
    },
    (error) => {
        console.log("Request error:", error.message);
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const newToken = await refreshTokenCall();
                if (newToken) {
                    originalRequest.headers = originalRequest.headers || {};
                    originalRequest.headers.Authorization = `Bearer ${newToken}`;
                    return api(originalRequest);
                }
            } catch (refreshError) {
                console.log("Token refresh failed");
            }
        }
        return Promise.reject(error);
    }
);

export default api;
