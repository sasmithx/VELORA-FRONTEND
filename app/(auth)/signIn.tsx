import React, { useState } from "react";
import {
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { loginUser } from "../../reducers/userReducer";
import EmailInput from "../../components/registration/EmailInput";
import PasswordInput from "../../components/registration/PasswordInput";
import ActionButton from "../../components/registration/ActionButton";
import AuthFooter from "../../components/registration/AuthFooter";
import AuthHeader from "../../components/registration/AuthHeader";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const dispatch = useDispatch<AppDispatch>();
  const { loading, error } = useSelector(
    (state: RootState) => state.userReducer
  );

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSignIn = () => {
    let isValid = true;

    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError("Please enter a valid email");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!password) {
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (isValid) {
      dispatch(loginUser({ email, password }));
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1"
    >
      <ScrollView className="flex-1 bg-background">
        <LinearGradient
          colors={["rgba(139, 92, 246, 0.15)", "rgba(17, 24, 39, 0)"]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 0.6 }}
          className="flex-1 min-h-screen px-6 py-12 justify-center"
        >
          <AuthHeader
            title="Welcome back"
            subtitle="Sign in to continue to NewsCurator"
          />

          <View className="space-y-6">
            <EmailInput
              email={email}
              setEmail={setEmail}
              emailError={emailError}
            />
            <PasswordInput
              password={password}
              setPassword={setPassword}
              passwordError={passwordError}
            />

            {error && (
              <View className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                <Text className="text-red-700 text-sm">{error}</Text>
              </View>
            )}

            <ActionButton
              onPress={handleSignIn}
              title={loading ? "Signing In..." : "Sign In"}
              disabled={loading}
            />
          </View>

          <AuthFooter
            message="Don't have an account?"
            linkText="Sign Up"
            linkHref="/signUp"
          />
        </LinearGradient>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
