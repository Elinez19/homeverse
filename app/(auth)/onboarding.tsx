import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React, { PropsWithChildren, useMemo, useState } from "react";
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

/* ---------- Types ---------- */
export type HomeService = {
  id: string | number;
  title: string;
  category: string;
  price: string;
  rating: string;
  image: { uri: string };
  description: string;
};

/* ---------- Background image component ---------- */
function DynamicBackground({ uri }: { uri?: string }) {
  if (!uri) return null;

  return (
    <Animated.Image
      key={uri}
      source={{ uri }}
      resizeMode="cover"
      style={StyleSheet.absoluteFillObject}
      entering={FadeIn.duration(800)}
      exiting={FadeOut.duration(800)}
    />
  );
}

/* ---------- Service card shown inside the carousel ---------- */
export function ServiceCard({ service }: { service: HomeService }) {
  return (
    <View className="w-full rounded-3xl overflow-hidden bg-white/15">
      <Image
        source={service.image}
        className="w-full h-full"
        resizeMode="cover"
      />
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.6)", "rgba(0, 0, 0, 0.55)"]}
        className="absolute inset-0 justify-end"
      >
        <View className="p-4">
          <Text className="text-lg font-bold text-white">{service.title}</Text>
          <Text className="text-sm text-white mt-1">{service.category}</Text>
          <Text className="text-xs text-white/80 mt-2">
            {service.description}
          </Text>
          <View className="flex-row justify-between items-center mt-3">
            <Text className="text-base font-bold text-white">
              {service.price}
            </Text>
            <View className="flex-row items-center">
              <Text className="text-sm text-white">⭐ {service.rating}</Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

/* ---------- Hero section ---------- */
export type HomeServiceHeroProps = PropsWithChildren<{
  data?: HomeService[];
  ctaLabel?: string;
  onCTAPress?: () => void;
  carouselSpeed?: number;
}>;

// Default home services data with game images (temporary)
const defaultServices: HomeService[] = [
  {
    id: 1,
    image: {
      uri: "https://store-images.s-microsoft.com/image/apps.39200.14145291960194275.263e78bd-2ea0-43c6-8a5b-5578131f4b02.ba171ef6-2bab-4956-b9d7-e67e253520d1?q=90&w=177&h=265",
    },
    title: "House Cleaning",
    category: "Cleaning",
    price: "From $80",
    rating: "4.9",
    description: "Professional deep cleaning for your home",
  },
  {
    id: 2,
    image: {
      uri: "https://store-images.s-microsoft.com/image/apps.38555.70702278257994163.e6749f0b-a7f8-4ed1-b45c-4d7a2278d946.98964621-9b9e-4333-87e3-49e2ee6a7e59?q=90&w=177&h=265",
    },
    title: "Plumbing Repair",
    category: "Plumbing",
    price: "From $120",
    rating: "4.8",
    description: "Expert plumbing solutions and repairs",
  },
  {
    id: 3,
    image: {
      uri: "https://store-images.s-microsoft.com/image/apps.39619.65187692735347017.570b285d-e5b3-4030-9530-47243e7b82f8.e0f1eef8-e346-45d9-82ed-35600d3ade69?q=90&w=177&h=265",
    },
    title: "Electrical Work",
    category: "Electrical",
    price: "From $150",
    rating: "4.7",
    description: "Safe and reliable electrical services",
  },
  {
    id: 4,
    image: {
      uri: "https://store-images.s-microsoft.com/image/apps.53717.65858607118306853.39ed2a08-df0d-4ae1-aee0-c66ffb783a34.80ba72da-abfb-4af6-81f2-a443d12fb870?q=90&w=177&h=265",
    },
    title: "HVAC Maintenance",
    category: "HVAC",
    price: "From $200",
    rating: "4.9",
    description: "Heating and cooling system maintenance",
  },
  {
    id: 5,
    image: {
      uri: "https://store-images.s-microsoft.com/image/apps.42015.13966330883349940.e8d96f51-63dc-4377-8441-88d85afdd80a.d84cbd17-ae03-4537-8641-8c33c308de78?q=90&w=177&h=265",
    },
    title: "Landscaping",
    category: "Outdoor",
    price: "From $100",
    rating: "4.6",
    description: "Beautiful garden and lawn care",
  },
  {
    id: 6,
    image: {
      uri: "https://store-images.s-microsoft.com/image/apps.43685.13714795037479433.563e5346-29e4-492a-a767-4bdeeb012f4d.b72cca7f-d4ab-423a-b063-d785bc30c27b?q=90&w=177&h=265",
    },
    title: "Painting",
    category: "Renovation",
    price: "From $300",
    rating: "4.8",
    description: "Professional interior and exterior painting",
  },
  {
    id: 7,
    image: {
      uri: "https://store-images.s-microsoft.com/image/apps.9688.70804610839547354.8da93c46-fd13-4b16-8ebe-e8e02c53d93e.09c2e91e-28bd-4f6f-bfd6-79d6b241667a?q=90&w=177&h=265",
    },
    title: "Appliance Repair",
    category: "Repair",
    price: "From $90",
    rating: "4.5",
    description: "Fix and maintain your home appliances",
  },
  {
    id: 8,
    image: {
      uri: "https://store-images.s-microsoft.com/image/apps.30063.13589262686196899.16e3418a-cbf2-4748-9724-1c9dc9b7a0b9.672da915-9117-4230-960d-4f59f3d7beb5?q=90&w=177&h=265",
    },
    title: "Carpet Cleaning",
    category: "Cleaning",
    price: "From $60",
    rating: "4.7",
    description: "Deep carpet and upholstery cleaning",
  },
];

export default function HomeServiceOnboarding({
  data = defaultServices,
  ctaLabel = "Get Started",
  onCTAPress = () => router.push("/(auth)/sign-up"),
  carouselSpeed = 60,
}: HomeServiceHeroProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const { width } = useWindowDimensions();

  const bgUri = useMemo(
    () => data?.[activeIndex]?.image?.uri,
    [activeIndex, data]
  );

  return (
    <View className="flex-1">
      <DynamicBackground uri={bgUri} />

      {/* Dark overlay on top of the image */}
      <View className="absolute inset-0 bg-black/40" />

      <BlurView intensity={65} className="absolute inset-0">
        <SafeAreaView edges={["bottom"]} className="flex-1">
          {/* ------------ Carousel ------------ */}
          <Animated.View
            entering={FadeIn.springify().damping(28)}
            className="w-full"
            style={{ height: width * 1 }}
          >
            <InfiniteCarousel<HomeService>
              carouselItems={data}
              onIndexChange={setActiveIndex}
              itemWidthRatio={0.65}
              autoPlaySpeed={carouselSpeed}
              renderItem={
                (({ item }: { item: HomeService }) => (
                  <ServiceCard service={item} />
                )) as CarouselItemRenderer<HomeService>
              }
            />
          </Animated.View>

          {/* ------------ Text & CTA ------------ */}
          <View className="flex-1 px-4 justify-center gap-4">
            <Text className="text-center text-3xl font-semibold text-white">
              HomeVerse
            </Text>

            <Text className="text-center text-lg text-white/80 mb-4">
              Professional home services at your fingertips. Book trusted
              experts for all your home needs.
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
