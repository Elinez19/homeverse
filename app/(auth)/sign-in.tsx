import { gradientColors } from "@/constants/data";
import { SignInFormData, signInSchema } from "@/validation/schemas";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInUp,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";

export default function SignInScreen() {
  const [formData, setFormData] = useState<SignInFormData>({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  // Animation values
  const buttonScale = useSharedValue(1);
  const buttonOpacity = useSharedValue(1);

  const handleInputChange = (field: keyof SignInFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSignIn = async () => {
    try {
      // Validate form data using Zod
      const validatedData = signInSchema.parse(formData);

      setIsLoading(true);

      // Animate button press
      buttonScale.value = withSpring(0.95);
      buttonOpacity.value = withTiming(0.7);

      // Simulate API call
      setTimeout(() => {
        buttonScale.value = withSpring(1);
        buttonOpacity.value = withTiming(1);
        setIsLoading(false);

        // Show success toast
        Toast.show({
          type: "success",
          text1: "Welcome back!",
          text2: "You have successfully signed in",
        });

        // Navigate to main app
        router.replace("/(root)/(tabs)/Home");
      }, 2000);
    } catch (error: any) {
      setIsLoading(false);

      if (error.errors && error.errors.length > 0) {
        // Show validation errors
        const firstError = error.errors[0];
        Toast.show({
          type: "error",
          text1: "Validation Error",
          text2: firstError.message,
        });
      } else {
        // Show generic error
        Toast.show({
          type: "error",
          text1: "Sign In Failed",
          text2: "Please check your credentials and try again",
        });
      }
    }
  };

  const buttonAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: buttonScale.value }],
    opacity: buttonOpacity.value,
  }));

  return (
    <View className="flex-1">
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      {/* Main gradient background */}
      <LinearGradient
        colors={gradientColors.primary}
        className="absolute inset-0"
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      />

      {/* Secondary gradient overlay */}
      <LinearGradient
        colors={gradientColors.secondary}
        className="absolute inset-0"
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      />

      <SafeAreaView className="flex-1">
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          className="flex-1"
        >
          <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >
            {/* Header */}
            <Animated.View
              entering={FadeInUp.delay(200).springify()}
              className="items-center pt-8 pb-6"
            >
              <View className="w-20 h-20 rounded-2xl bg-white/20 items-center justify-center mb-4">
                <Text className="text-3xl font-bold text-white">H</Text>
              </View>
              <Text className="text-3xl font-bold text-white mb-2">
                Welcome Back
              </Text>
              <Text className="text-white/80 text-center px-8">
                Sign in to continue with HomeVerse
              </Text>
            </Animated.View>

            {/* Form */}
            <Animated.View
              entering={FadeInUp.delay(400).springify()}
              className="flex-1 px-6"
            >
              <View className="space-y-4">
                {/* Email Input */}
                <Animated.View entering={FadeInDown.delay(600)}>
                  <Text className="text-white/90 text-sm font-medium mb-2">
                    Email
                  </Text>
                  <View className="bg-white/20 rounded-2xl px-4 py-4 border border-white/30">
                    <TextInput
                      value={formData.email}
                      onChangeText={(value) =>
                        handleInputChange("email", value)
                      }
                      placeholder="Enter your email"
                      placeholderTextColor="rgba(255, 255, 255, 0.6)"
                      keyboardType="email-address"
                      autoCapitalize="none"
                      autoCorrect={false}
                      className="text-white text-base"
                    />
                  </View>
                </Animated.View>

                {/* Password Input */}
                <Animated.View entering={FadeInDown.delay(800)}>
                  <Text className="text-white/90 text-sm font-medium mb-2">
                    Password
                  </Text>
                  <View className="bg-white/20 rounded-2xl px-4 py-4 border border-white/30">
                    <TextInput
                      value={formData.password}
                      onChangeText={(value) =>
                        handleInputChange("password", value)
                      }
                      placeholder="Enter your password"
                      placeholderTextColor="rgba(255, 255, 255, 0.6)"
                      secureTextEntry
                      className="text-white text-base"
                    />
                  </View>
                </Animated.View>

                {/* Forgot Password */}
                <Animated.View
                  entering={FadeInDown.delay(1000)}
                  className="items-end mt-4 mb-4"
                >
                  <TouchableOpacity
                    onPress={() => router.push("/(auth)/forgot-password")}
                  >
                    <Text className="text-white/80 text-sm font-medium">
                      Forgot Password?
                    </Text>
                  </TouchableOpacity>
                </Animated.View>

                {/* Sign In Button */}
                <Animated.View entering={FadeInUp.delay(1200)}>
                  <Animated.View style={buttonAnimatedStyle}>
                    <TouchableOpacity
                      onPress={handleSignIn}
                      disabled={isLoading}
                      className="bg-white rounded-2xl py-4 items-center shadow-lg"
                      activeOpacity={0.8}
                    >
                      <Text className="text-gray-800 text-lg font-semibold">
                        {isLoading ? "Signing In..." : "Sign In"}
                      </Text>
                    </TouchableOpacity>
                  </Animated.View>
                </Animated.View>

                {/* Divider */}
                <Animated.View
                  entering={FadeIn.delay(1400)}
                  className="flex-row items-center my-6"
                >
                  <View className="flex-1 h-px bg-white/30" />
                  <Text className="text-white/60 text-sm mx-4">or</Text>
                  <View className="flex-1 h-px bg-white/30" />
                </Animated.View>

                {/* Social Sign In */}
                <Animated.View
                  entering={FadeInUp.delay(1600)}
                  className="space-y-6"
                >
                  <TouchableOpacity className="bg-white/20 rounded-2xl py-4 flex-row items-center justify-center border border-white/30">
                    <Ionicons name="logo-google" size={24} color="#fff" />
                    <Text className="text-white text-lg font-medium ml-3">
                      Continue with Google
                    </Text>
                  </TouchableOpacity>
                </Animated.View>
              </View>
            </Animated.View>

            {/* Footer */}
            <Animated.View
              entering={FadeInUp.delay(1800)}
              className="px-6 pb-8 pt-4"
            >
              <View className="flex-row justify-center items-center">
                <Text className="text-white/60 text-sm">
                  Don&apos;t have an account?{" "}
                </Text>
                <TouchableOpacity
                  onPress={() => router.push("/(auth)/sign-up")}
                >
                  <Text className="text-white text-sm font-semibold">
                    Sign Up
                  </Text>
                </TouchableOpacity>
              </View>
            </Animated.View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
}
