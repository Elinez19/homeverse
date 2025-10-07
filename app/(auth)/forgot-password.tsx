import { gradientColors } from "@/constants/data";
import {
  ForgotPasswordFormData,
  forgotPasswordSchema,
} from "@/validation/schemas";
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

export default function ForgotPasswordScreen() {
  const [formData, setFormData] = useState<ForgotPasswordFormData>({
    email: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  // Animation values
  const buttonScale = useSharedValue(1);
  const buttonOpacity = useSharedValue(1);

  const handleInputChange = (
    field: keyof ForgotPasswordFormData,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleResetPassword = async () => {
    try {
      // Validate form data using Zod
      const validatedData = forgotPasswordSchema.parse(formData);

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
          text1: "Reset Link Sent!",
          text2: "Please check your email for password reset instructions",
        });

        // Navigate to sign in
        router.push("/(auth)/sign-in");
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
          text1: "Request Failed",
          text2: "Please try again later",
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
                <Text className="text-3xl font-bold text-white">🔒</Text>
              </View>
              <Text className="text-3xl font-bold text-white mb-2">
                Forgot Password?
              </Text>
              <Text className="text-white/80 text-center px-8">
                Don&apos;t worry! Enter your email and we&apos;ll send you a
                reset link.
              </Text>
            </Animated.View>

            {/* Form */}
            <Animated.View
              entering={FadeInUp.delay(400).springify()}
              className="flex-1 px-6"
            >
              <View className="space-y-6">
                {/* Email Input */}
                <Animated.View entering={FadeInDown.delay(600)}>
                  <Text className="text-white/90 text-sm font-medium mb-2">
                    Email Address
                  </Text>
                  <View className="bg-white/20 rounded-2xl px-4 py-4 border border-white/30">
                    <TextInput
                      value={formData.email}
                      onChangeText={(value) =>
                        handleInputChange("email", value)
                      }
                      placeholder="Enter your email address"
                      placeholderTextColor="rgba(255, 255, 255, 0.6)"
                      keyboardType="email-address"
                      autoCapitalize="none"
                      autoCorrect={false}
                      className="text-white text-base"
                    />
                  </View>
                </Animated.View>

                {/* Reset Button */}
                <Animated.View entering={FadeInUp.delay(800)}>
                  <Animated.View style={buttonAnimatedStyle}>
                    <TouchableOpacity
                      onPress={handleResetPassword}
                      disabled={isLoading}
                      className="bg-white rounded-2xl py-4 items-center shadow-lg"
                      activeOpacity={0.8}
                    >
                      <Text className="text-gray-800 text-lg font-semibold">
                        {isLoading ? "Sending..." : "Send Reset Link"}
                      </Text>
                    </TouchableOpacity>
                  </Animated.View>
                </Animated.View>

                {/* Help Text */}
                <Animated.View
                  entering={FadeIn.delay(1000)}
                  className="bg-white/10 rounded-2xl p-4"
                >
                  <Text className="text-white/80 text-sm text-center leading-5">
                    💡 Make sure to check your spam folder if you don&apos;t
                    receive the email within a few minutes.
                  </Text>
                </Animated.View>
              </View>
            </Animated.View>

            {/* Footer */}
            <Animated.View
              entering={FadeInUp.delay(1200)}
              className="px-6 pb-8 pt-4"
            >
              <View className="flex-row justify-center items-center">
                <Text className="text-white/60 text-sm">
                  Remember your password?{" "}
                </Text>
                <TouchableOpacity
                  onPress={() => router.push("/(auth)/sign-in")}
                >
                  <Text className="text-white text-sm font-semibold">
                    Sign In
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
