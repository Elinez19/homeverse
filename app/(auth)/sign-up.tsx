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

export default function SignUpScreen() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
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

  const handleSignUp = async () => {
    const { firstName, lastName, email, phone, password, confirmPassword } =
      formData;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !password ||
      !confirmPassword
    ) {
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

      // Navigate to OTP verification
      router.push("/(auth)/verify-otp");
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
              className="items-center pt-6 pb-4"
            >
              <View className="w-16 h-16 rounded-2xl bg-white/20 items-center justify-center mb-3">
                <Text className="text-2xl font-bold text-white">H</Text>
              </View>
              <Text className="text-2xl font-bold text-white mb-1">
                Create Account
              </Text>
              <Text className="text-white/80 text-center px-8 text-sm">
                Join HomeVerse and get started
              </Text>
            </Animated.View>

            {/* Form */}
            <Animated.View
              entering={FadeInUp.delay(400).springify()}
              className="flex-1 px-6"
            >
              <View className="space-y-3">
                {/* Name Row */}
                <Animated.View
                  entering={FadeInDown.delay(600)}
                  className="flex-row space-x-3"
                >
                  <View className="flex-1">
                    <Text className="text-white/90 text-sm font-medium mb-2">
                      First Name
                    </Text>
                    <View className="bg-white/20 rounded-xl px-3 py-3 border border-white/30">
                      <TextInput
                        value={formData.firstName}
                        onChangeText={(value) =>
                          handleInputChange("firstName", value)
                        }
                        placeholder="First name"
                        placeholderTextColor="rgba(255, 255, 255, 0.6)"
                        className="text-white text-sm"
                      />
                    </View>
                  </View>
                  <View className="flex-1">
                    <Text className="text-white/90 text-sm font-medium mb-2">
                      Last Name
                    </Text>
                    <View className="bg-white/20 rounded-xl px-3 py-3 border border-white/30">
                      <TextInput
                        value={formData.lastName}
                        onChangeText={(value) =>
                          handleInputChange("lastName", value)
                        }
                        placeholder="Last name"
                        placeholderTextColor="rgba(255, 255, 255, 0.6)"
                        className="text-white text-sm"
                      />
                    </View>
                  </View>
                </Animated.View>

                {/* Email Input */}
                <Animated.View entering={FadeInDown.delay(800)}>
                  <Text className="text-white/90 text-sm font-medium mb-2">
                    Email
                  </Text>
                  <View className="bg-white/20 rounded-xl px-3 py-3 border border-white/30">
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
                      className="text-white text-sm"
                    />
                  </View>
                </Animated.View>

                {/* Phone Input */}
                <Animated.View entering={FadeInDown.delay(1000)}>
                  <Text className="text-white/90 text-sm font-medium mb-2">
                    Phone Number
                  </Text>
                  <View className="bg-white/20 rounded-xl px-3 py-3 border border-white/30">
                    <TextInput
                      value={formData.phone}
                      onChangeText={(value) =>
                        handleInputChange("phone", value)
                      }
                      placeholder="Enter your phone number"
                      placeholderTextColor="rgba(255, 255, 255, 0.6)"
                      keyboardType="phone-pad"
                      className="text-white text-sm"
                    />
                  </View>
                </Animated.View>

                {/* Password Input */}
                <Animated.View entering={FadeInDown.delay(1200)}>
                  <Text className="text-white/90 text-sm font-medium mb-2">
                    Password
                  </Text>
                  <View className="bg-white/20 rounded-xl px-3 py-3 border border-white/30">
                    <TextInput
                      value={formData.password}
                      onChangeText={(value) =>
                        handleInputChange("password", value)
                      }
                      placeholder="Create a password"
                      placeholderTextColor="rgba(255, 255, 255, 0.6)"
                      secureTextEntry
                      className="text-white text-sm"
                    />
                  </View>
                </Animated.View>

                {/* Confirm Password Input */}
                <Animated.View entering={FadeInDown.delay(1400)}>
                  <Text className="text-white/90 text-sm font-medium mb-2">
                    Confirm Password
                  </Text>
                  <View className="bg-white/20 rounded-xl px-3 py-3 border border-white/30">
                    <TextInput
                      value={formData.confirmPassword}
                      onChangeText={(value) =>
                        handleInputChange("confirmPassword", value)
                      }
                      placeholder="Confirm your password"
                      placeholderTextColor="rgba(255, 255, 255, 0.6)"
                      secureTextEntry
                      className="text-white text-sm"
                    />
                  </View>
                </Animated.View>

                {/* Terms */}
                <Animated.View
                  entering={FadeInDown.delay(1600)}
                  className="flex-row items-start mt-2"
                >
                  <View className="w-4 h-4 rounded border border-white/40 mr-2 mt-0.5" />
                  <Text className="text-white/70 text-xs flex-1">
                    By signing up, you agree to our{" "}
                    <Text className="text-white font-medium">
                      Terms of Service
                    </Text>{" "}
                    and{" "}
                    <Text className="text-white font-medium">
                      Privacy Policy
                    </Text>
                  </Text>
                </Animated.View>

                {/* Sign Up Button */}
                <Animated.View
                  entering={FadeInUp.delay(1800)}
                  style={buttonAnimatedStyle}
                >
                  <TouchableOpacity
                    onPress={handleSignUp}
                    disabled={isLoading}
                    className="bg-white rounded-xl py-3 items-center shadow-lg mt-4"
                    activeOpacity={0.8}
                  >
                    <Text className="text-gray-800 text-base font-semibold">
                      {isLoading ? "Creating Account..." : "Create Account"}
                    </Text>
                  </TouchableOpacity>
                </Animated.View>
              </View>
            </Animated.View>

            {/* Footer */}
            <Animated.View
              entering={FadeInUp.delay(2000)}
              className="px-6 pb-8 pt-4"
            >
              <View className="flex-row justify-center items-center">
                <Text className="text-white/60 text-sm">
                  Already have an account?{" "}
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
