import { AxiosError } from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../api/api";
import User from "../model/User";
import { LoginRequest, LoginResponse } from "../model/Auth";
import * as SecureStore from "expo-secure-store";

const initialState = {
    access_token: "",
    refresh_token: "",
    isAuthenticated: false,
    isRegistered: false,
    loading: false,
    error: "",
    user: {
        id: 0,
        name: "",
        email: "",
    },
};

export const registerUser = createAsyncThunk(
    "user/ui",
    async (user: User, { rejectWithValue }) => {
        try {
            console.log("User", user);
            const response = await api.post("/auth/register", user);
            return response.data;
        } catch (err) {
            const error = err as AxiosError;
            if (error.response && error.response.data) {
                return rejectWithValue(error.response.data);
            }
            return rejectWithValue("An unknown error occurred");
        }
    }
);

export const loginUser = createAsyncThunk(
    "user/login",
    async (loginData: LoginRequest, { rejectWithValue }) => {
        try {
            const response = await api.post<LoginResponse>("/auth/login", loginData);

            await SecureStore.setItemAsync("access_token", response.data.accessToken);
            await SecureStore.setItemAsync(
                "refresh_token",
                response.data.refreshToken
            );
            return response.data;
        } catch (err) {
            const error = err as AxiosError;
            console.log("Login failed:", error.message);

            if (error.response && error.response.data) {
                const errorData = error.response.data as any;
                return rejectWithValue(
                    errorData.message || errorData.error || "Login failed"
                );
            }

            if (error.message === "Network Error") {
                return rejectWithValue("Network error - unable to connect to server");
            }

            return rejectWithValue("An unknown error occurred");
        }
    }
);

export const userReducer = createSlice({
    name: "userReducer",
    initialState,
    reducers: {
        logoutUser: (state) => {
            state.access_token = "";
            state.refresh_token = "";
            state.isAuthenticated = false;
            state.user = {
                id: 0,
                name: "",
                email: "",
            };
        },
    },
    extraReducers(builder) {
        builder
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(registerUser.fulfilled, (state) => {
                state.error = "";
                state.isRegistered = true;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
        builder
            .addCase(loginUser.pending, (state, action) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.access_token = action.payload.accessToken;
                state.refresh_token = action.payload.refreshToken;
                state.user = action.payload.user;
                state.isAuthenticated = true;
                state.error = "";
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export const { logoutUser } = userReducer.actions;
export default userReducer.reducer;
