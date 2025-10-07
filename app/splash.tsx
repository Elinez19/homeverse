import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React, { useEffect } from "react";
import { StatusBar, Text, View, useWindowDimensions } from "react-native";
import Animated, {
  FadeIn,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SplashScreen() {
  const { width, height } = useWindowDimensions();

  // Animation values
  const logoScale = useSharedValue(0);
  const logoOpacity = useSharedValue(0);
  const textOpacity = useSharedValue(0);
  const textTranslateY = useSharedValue(30);

  useEffect(() => {
    // Start animations sequence
    logoScale.value = withSequence(
      withTiming(1.1, { duration: 800 }),
      withTiming(1, { duration: 200 })
    );

    logoOpacity.value = withTiming(1, { duration: 1000 });

    textOpacity.value = withDelay(600, withTiming(1, { duration: 800 }));
    textTranslateY.value = withDelay(600, withTiming(0, { duration: 800 }));

    // Navigate to onboarding after 3 seconds
    const timer = setTimeout(() => {
      router.replace("/(auth)/onboarding");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const logoAnimatedStyle = useAnimatedStyle(() => ({
    opacity: logoOpacity.value,
    transform: [{ scale: logoScale.value }],
  }));

  const textAnimatedStyle = useAnimatedStyle(() => ({
    opacity: textOpacity.value,
    transform: [{ translateY: textTranslateY.value }],
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

      {/* Secondary gradient overlay for depth */}
      <LinearGradient
        colors={[
          "rgba(144, 238, 144, 0.3)",
          "rgba(255, 255, 255, 0.1)",
          "rgba(255, 215, 0, 0.2)",
        ]}
        className="absolute inset-0"
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      />

      <SafeAreaView className="flex-1 justify-center items-center">
        {/* Logo Container */}
        <Animated.View
          style={logoAnimatedStyle}
          className="items-center justify-center mb-8"
        >
          {/* App Icon/Logo */}
          <View className="w-24 h-24 rounded-3xl bg-white/20 items-center justify-center mb-6 shadow-lg">
            <View className="w-16 h-16 rounded-2xl bg-white/30 items-center justify-center">
              <Text className="text-3xl font-bold text-white">H</Text>
            </View>
          </View>

          {/* App Name */}
          <Text className="text-4xl font-bold text-white mb-2">HomeVerse</Text>
          <Text className="text-lg text-white/80 font-medium">
            Professional Home Services
          </Text>
        </Animated.View>

        {/* Animated tagline */}
        <Animated.View style={textAnimatedStyle} className="items-center px-8">
          <Text className="text-center text-white/90 text-lg font-medium leading-6">
            Your trusted partner for all home service needs
          </Text>
        </Animated.View>

        {/* Loading indicator */}
        <Animated.View
          entering={FadeIn.delay(1500)}
          className="absolute bottom-20 items-center"
        >
          <View className="w-8 h-8 rounded-full border-2 border-white/30 border-t-white animate-spin" />
        </Animated.View>
      </SafeAreaView>

      {/* Decorative elements */}
      <View className="absolute top-20 left-8 w-16 h-16 rounded-full bg-white/10" />
      <View className="absolute top-40 right-12 w-12 h-12 rounded-full bg-white/15" />
      <View className="absolute bottom-40 left-16 w-20 h-20 rounded-full bg-white/10" />
      <View className="absolute bottom-60 right-8 w-14 h-14 rounded-full bg-white/15" />
    </View>
  );
}
