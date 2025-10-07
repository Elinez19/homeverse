import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
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

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Animation values
  const buttonScale = useSharedValue(1);
  const buttonOpacity = useSharedValue(1);

  const handleResetPassword = async () => {
    if (!email) {
      Alert.alert("Error", "Please enter your email address");
      return;
    }

    setIsLoading(true);

    // Animate button press
    buttonScale.value = withSpring(0.95);
    buttonOpacity.value = withTiming(0.7);

    setTimeout(() => {
      buttonScale.value = withSpring(1);
      buttonOpacity.value = withTiming(1);
      setIsLoading(false);

      Alert.alert(
        "Reset Link Sent",
        "We've sent a password reset link to your email address.",
        [
          {
            text: "OK",
            onPress: () => router.push("/(auth)/sign-in"),
          },
        ]
      );
    }, 2000);
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
        colors={["#FFD700", "#FFA500", "#FFE4B5"]}
        className="absolute inset-0"
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      />

      {/* Secondary gradient overlay */}
      <LinearGradient
        colors={[
          "rgba(144, 238, 144, 0.2)",
          "rgba(255, 255, 255, 0.1)",
          "rgba(255, 215, 0, 0.15)",
        ]}
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
                      value={email}
                      onChangeText={setEmail}
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
                <Animated.View
                  entering={FadeInUp.delay(800)}
                  style={buttonAnimatedStyle}
                >
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
