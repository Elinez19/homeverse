import { OTPFormData } from "@/types";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React, { useRef, useState } from "react";
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

export default function VerifyOTPScreen() {
  const [otp, setOtp] = useState<OTPFormData["otp"]>(["", "", "", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const inputRefs = useRef<TextInput[]>([]);

  // Animation values
  const buttonScale = useSharedValue(1);
  const buttonOpacity = useSharedValue(1);

  const handleOtpChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (key: string, index: number) => {
    if (key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerifyOTP = async () => {
    const otpString = otp.join("");

    if (otpString.length !== 6) {
      Alert.alert("Error", "Please enter the complete 6-digit code");
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
        "Verification Successful",
        "Your account has been verified successfully!",
        [
          {
            text: "OK",
            onPress: () => router.replace("/(root)/(tabs)/Home"),
          },
        ]
      );
    }, 2000);
  };

  const handleResendOTP = () => {
    setTimeLeft(60);
    Alert.alert(
      "OTP Sent",
      "A new verification code has been sent to your phone"
    );
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
                <Text className="text-3xl font-bold text-white">📱</Text>
              </View>
              <Text className="text-3xl font-bold text-white mb-2">
                Verify Phone
              </Text>
              <Text className="text-white/80 text-center px-8">
                Enter the 6-digit code sent to your phone number
              </Text>
            </Animated.View>

            {/* OTP Input */}
            <Animated.View
              entering={FadeInUp.delay(400).springify()}
              className="flex-1 px-6"
            >
              <View className="space-y-6">
                {/* OTP Input Fields */}
                <Animated.View
                  entering={FadeInDown.delay(600)}
                  className="flex-row justify-center space-x-3"
                >
                  {otp.map((digit, index) => (
                    <TextInput
                      key={index}
                      ref={(ref) => {
                        if (ref) inputRefs.current[index] = ref;
                      }}
                      value={digit}
                      onChangeText={(value) => handleOtpChange(value, index)}
                      onKeyPress={({ nativeEvent }) =>
                        handleKeyPress(nativeEvent.key, index)
                      }
                      keyboardType="numeric"
                      maxLength={1}
                      className="w-12 h-12 bg-white/20 rounded-xl border border-white/30 text-white text-center text-xl font-bold"
                      placeholderTextColor="rgba(255, 255, 255, 0.4)"
                    />
                  ))}
                </Animated.View>

                {/* Timer */}
                <Animated.View
                  entering={FadeInDown.delay(800)}
                  className="items-center"
                >
                  <Text className="text-white/70 text-sm">
                    Resend code in {timeLeft}s
                  </Text>
                </Animated.View>

                {/* Verify Button */}
                <Animated.View
                  entering={FadeInUp.delay(1000)}
                  style={buttonAnimatedStyle}
                >
                  <TouchableOpacity
                    onPress={handleVerifyOTP}
                    disabled={isLoading}
                    className="bg-white rounded-2xl py-4 items-center shadow-lg"
                    activeOpacity={0.8}
                  >
                    <Text className="text-gray-800 text-lg font-semibold">
                      {isLoading ? "Verifying..." : "Verify Code"}
                    </Text>
                  </TouchableOpacity>
                </Animated.View>

                {/* Resend Button */}
                <Animated.View entering={FadeInUp.delay(1200)}>
                  <TouchableOpacity
                    onPress={handleResendOTP}
                    disabled={timeLeft > 0}
                    className="items-center py-3"
                  >
                    <Text
                      className={`text-sm font-medium ${timeLeft > 0 ? "text-white/40" : "text-white"}`}
                    >
                      Didn't receive the code? Resend
                    </Text>
                  </TouchableOpacity>
                </Animated.View>

                {/* Help Text */}
                <Animated.View
                  entering={FadeIn.delay(1400)}
                  className="bg-white/10 rounded-2xl p-4"
                >
                  <Text className="text-white/80 text-sm text-center leading-5">
                    💡 Make sure your phone has a good signal and check for any
                    SMS messages.
                  </Text>
                </Animated.View>
              </View>
            </Animated.View>

            {/* Footer */}
            <Animated.View
              entering={FadeInUp.delay(1600)}
              className="px-6 pb-8 pt-4"
            >
              <View className="flex-row justify-center items-center">
                <Text className="text-white/60 text-sm">Wrong number? </Text>
                <TouchableOpacity
                  onPress={() => router.push("/(auth)/sign-up")}
                >
                  <Text className="text-white text-sm font-semibold">
                    Change Number
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
