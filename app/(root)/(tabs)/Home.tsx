import { CategoriesCarousel } from "@/components/home/CategoriesCarousel";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { HomeHeader } from "@/components/home/HomeHeader";
import { SearchBar } from "@/components/home/SearchBar";
import { SectionCard } from "@/components/home/SectionCard";
import { ServiceCard } from "@/components/home/ServiceCard";
import { gradientColors } from "@/constants/data";
import { services } from "@/constants/services";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, StatusBar, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const heroBanners = [
  {
    title: "Special Offer",
    subtitle: "Up to 40% off premium cleaning packages",
    cta: "Book Now",
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&w=600&q=60",
    color: ["#3b82f6", "#60a5fa"],
  },
  {
    title: "Emergency Repairs",
    subtitle: "24/7 on-call technicians for urgent fixes",
    cta: "Call Support",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&w=600&q=60",
    color: ["#6366f1", "#8b5cf6"],
  },
];

const categories = [
  { icon: "sparkles-outline", label: "Cleaning" },
  { icon: "flash-outline", label: "Electrical" },
  { icon: "construct-outline", label: "Repairs" },
  { icon: "leaf-outline", label: "Landscaping" },
  { icon: "thermometer-outline", label: "HVAC" },
  { icon: "color-palette-outline", label: "Painting" },
];

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  return (
    <View className="flex-1">
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <LinearGradient
        colors={gradientColors.primary}
        className="absolute inset-0"
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      />
      <LinearGradient
        colors={gradientColors.secondary}
        className="absolute inset-0"
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      />

      <SafeAreaView className="flex-1">
        <ScrollView
          contentContainerStyle={{ paddingBottom: 32 }}
          showsVerticalScrollIndicator={false}
        >
          <View className="px-6 pt-6">
            <HomeHeader
              location="New York, USA"
              avatarUrl="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&w=200&q=60"
            />
          </View>

          <View className="px-6 mt-5">
            <SearchBar
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholder="Search for cleaning, electrical..."
            />
          </View>

          <View className="px-6 mt-6">
            <SectionCard
              title="Highlights"
              actionLabel="View All"
              contentClassName="pb-0"
            >
              <HeroCarousel
                banners={heroBanners}
                containerStyle={{ marginTop: 0, marginBottom: 12, height: 210 }}
                horizontalInset={0}
              />
            </SectionCard>
          </View>

          {/* Categories */}
          <View className="px-6 mt-6">
            <SectionCard title="All Categories" actionLabel="View All">
              <CategoriesCarousel categories={categories} />
            </SectionCard>
          </View>

          {/* Services */}
          <View className="px-6 mt-6">
            <SectionCard title="Popular Services" actionLabel="View All">
              <View className="space-y-5">
                {services.map((service) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    onPress={() =>
                      router.push({
                        pathname: "/service/[serviceId]",
                        params: { serviceId: service.id },
                      })
                    }
                    onBookPress={() =>
                      router.push({
                        pathname: "/service/[serviceId]",
                        params: { serviceId: service.id },
                      })
                    }
                  />
                ))}
              </View>
            </SectionCard>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
