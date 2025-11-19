import { CategoriesCarousel } from "@/components/home/CategoriesCarousel";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { HomeHeader } from "@/components/home/HomeHeader";
import { RecommendedServiceCard } from "@/components/home/RecommendedServiceCard";
import { SearchBar } from "@/components/home/SearchBar";
import { SectionCard } from "@/components/home/SectionCard";
import { ServiceCard } from "@/components/home/ServiceCard";
import { TopProviderCard } from "@/components/home/TopProviderCard";
import {
  categories,
  gradientColors,
  heroBanners,
  topProviders,
} from "@/constants/data";
import { services } from "@/constants/services";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, StatusBar, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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

          {/* Recommended */}
          <View className="px-6 mt-6">
            <SectionCard title="Recommended for You" actionLabel="See All">
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {services.slice().reverse().map((service) => (
                  <RecommendedServiceCard
                    key={service.id}
                    service={service}
                    onPress={() =>
                      router.push({
                        pathname: "/service/[serviceId]",
                        params: { serviceId: service.id },
                      })
                    }
                  />
                ))}
              </ScrollView>
            </SectionCard>
          </View>

          {/* Top Providers */}
          <View className="px-6 mt-6">
            <SectionCard title="Top Rated Providers" actionLabel="View All">
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {topProviders.map((provider) => (
                  <TopProviderCard
                    key={provider.id}
                    name={provider.name}
                    role={provider.role}
                    rating={provider.rating}
                    image={provider.image}
                    onPress={() => {}}
                  />
                ))}
              </ScrollView>
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
