import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React, { useMemo, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

import InfiniteCarousel, { CarouselItemRenderer } from "@/components/carousel";
import {
  animationConfig,
  appConfig,
  defaultOnboarding,
  gradientColors,
} from "@/constants/data";
import {
  OnboardingCardProps,
  OnboardingProps,
  Onboarding as OnboardingType,
} from "@/types";

/* ---------- Background image component ---------- */
function DynamicBackground({ image }: { image?: any }) {
  if (!image) return null;

  return (
    <Animated.Image
      key={JSON.stringify(image)}
      source={image}
      resizeMode="cover"
      style={StyleSheet.absoluteFillObject}
      entering={FadeIn.duration(800)}
      exiting={FadeOut.duration(800)}
    />
  );
}

/* ---------- Onboarding card shown inside the carousel ---------- */
export function OnboardingCard({ onboarding }: OnboardingCardProps) {
  return (
    <View className="w-full rounded-3xl overflow-hidden bg-white/15">
      <Image
        source={onboarding.image}
        className="w-full h-full"
        resizeMode="cover"
      />
      <LinearGradient
        colors={gradientColors.cardOverlay}
        className="absolute inset-0 justify-end"
      >
        <View className="p-4">
          <Text className="text-lg font-bold text-white">
            {onboarding.title}
          </Text>
          <Text className="text-sm text-white mt-1">{onboarding.category}</Text>
          <Text className="text-xs text-white/80 mt-2">
            {onboarding.description}
          </Text>
          <View className="flex-row justify-between items-center mt-3">
            <Text className="text-base font-bold text-white">
              {onboarding.price}
            </Text>
            <View className="flex-row items-center">
              <Text className="text-sm text-white">⭐ {onboarding.rating}</Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

export default function Onboarding({
  data = defaultOnboarding,
  ctaLabel = "Get Started",
  onCTAPress = () => router.push("/(auth)/sign-up"),
  carouselSpeed = appConfig.carouselSpeed,
}: OnboardingProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const { width } = useWindowDimensions();

  const bgImage = useMemo(
    () => data?.[activeIndex]?.image,
    [activeIndex, data]
  );

  return (
    <View className="flex-1">
      <DynamicBackground image={bgImage} />

      {/* Dark overlay on top of the image */}
      <View className="absolute inset-0 bg-black/40" />

      <BlurView
        intensity={appConfig.blurIntensity}
        className="absolute inset-0"
      >
        <SafeAreaView edges={["bottom"]} className="flex-1">
          {/* ------------ Carousel ------------ */}
          <Animated.View
            entering={FadeIn.springify().damping(animationConfig.springDamping)}
            className="w-full"
            style={{ height: width * 1 }}
          >
            <InfiniteCarousel<OnboardingType>
              carouselItems={data}
              onIndexChange={setActiveIndex}
              itemWidthRatio={0.65}
              autoPlaySpeed={carouselSpeed}
              renderItem={
                (({ item }: { item: OnboardingType }) => (
                  <OnboardingCard onboarding={item} />
                )) as CarouselItemRenderer<OnboardingType>
              }
            />
          </Animated.View>

          {/* ------------ Text & CTA ------------ */}
          <View className="flex-1 px-4 justify-center gap-4">
            <Text className="text-center text-3xl font-semibold text-white">
              {appConfig.name}
            </Text>

            <Text className="text-center text-lg text-white/80 mb-4">
              {appConfig.description}
            </Text>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={onCTAPress}
              className="w-full self-center items-center justify-center rounded-3xl bg-white/95 px-10 py-4"
            >
              <Text className="text-lg font-semibold text-gray-800">
                {ctaLabel}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => router.push("/(auth)/sign-in")}
              className="w-full self-center items-center justify-center py-3"
            >
              <Text className="text-base text-white/80">
                Already have an account? Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </BlurView>
    </View>
  );
}
