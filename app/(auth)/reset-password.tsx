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
  FadeInDown,
  FadeInUp,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ResetPasswordScreen() {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  // Animation values
  const buttonScale = useSharedValue(1);
  const buttonOpacity = useSharedValue(1);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleResetPassword = async () => {
    const { password, confirmPassword } = formData;

    if (!password || !confirmPassword) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    if (password.length < 6) {
      Alert.alert("Error", "Password must be at least 6 characters");
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
        "Password Reset",
        "Your password has been successfully reset!",
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
                <Text className="text-3xl font-bold text-white">🔑</Text>
              </View>
              <Text className="text-3xl font-bold text-white mb-2">
                Reset Password
              </Text>
              <Text className="text-white/80 text-center px-8">
                Create a new password for your account
              </Text>
            </Animated.View>

            {/* Form */}
            <Animated.View
              entering={FadeInUp.delay(400).springify()}
              className="flex-1 px-6"
            >
              <View className="space-y-4">
                {/* New Password Input */}
                <Animated.View entering={FadeInDown.delay(600)}>
                  <Text className="text-white/90 text-sm font-medium mb-2">
                    New Password
                  </Text>
                  <View className="bg-white/20 rounded-2xl px-4 py-4 border border-white/30">
                    <TextInput
                      value={formData.password}
                      onChangeText={(value) =>
                        handleInputChange("password", value)
                      }
                      placeholder="Enter new password"
                      placeholderTextColor="rgba(255, 255, 255, 0.6)"
                      secureTextEntry
                      className="text-white text-base"
                    />
                  </View>
                </Animated.View>

                {/* Confirm Password Input */}
                <Animated.View entering={FadeInDown.delay(800)}>
                  <Text className="text-white/90 text-sm font-medium mb-2">
                    Confirm Password
                  </Text>
                  <View className="bg-white/20 rounded-2xl px-4 py-4 border border-white/30">
                    <TextInput
                      value={formData.confirmPassword}
                      onChangeText={(value) =>
                        handleInputChange("confirmPassword", value)
                      }
                      placeholder="Confirm new password"
                      placeholderTextColor="rgba(255, 255, 255, 0.6)"
                      secureTextEntry
                      className="text-white text-base"
                    />
                  </View>
                </Animated.View>

                {/* Password Requirements */}
                <Animated.View
                  entering={FadeInDown.delay(1000)}
                  className="bg-white/10 rounded-2xl p-4"
                >
                  <Text className="text-white/80 text-sm font-medium mb-2">
                    Password Requirements:
                  </Text>
                  <Text className="text-white/70 text-xs leading-4">
                    • At least 6 characters long{"\n"}• Mix of letters and
                    numbers{"\n"}• Avoid common passwords
                  </Text>
                </Animated.View>

                {/* Reset Button */}
                <Animated.View
                  entering={FadeInUp.delay(1200)}
                  style={buttonAnimatedStyle}
                >
                  <TouchableOpacity
                    onPress={handleResetPassword}
                    disabled={isLoading}
                    className="bg-white rounded-2xl py-4 items-center shadow-lg"
                    activeOpacity={0.8}
                  >
                    <Text className="text-gray-800 text-lg font-semibold">
                      {isLoading ? "Resetting..." : "Reset Password"}
                    </Text>
                  </TouchableOpacity>
                </Animated.View>
              </View>
            </Animated.View>

            {/* Footer */}
            <Animated.View
              entering={FadeInUp.delay(1400)}
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
