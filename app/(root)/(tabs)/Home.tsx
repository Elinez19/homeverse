import { BenefitCard } from "@/components/home/BenefitCard";
import { CategoriesCarousel } from "@/components/home/CategoriesCarousel";
import { FeaturedServiceCard } from "@/components/home/FeaturedServiceCard";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { HomeHeader } from "@/components/home/HomeHeader";
import { HowItWorksCard } from "@/components/home/HowItWorksCard";
import { RecommendedServiceCard } from "@/components/home/RecommendedServiceCard";
import { SearchBar } from "@/components/home/SearchBar";
import { SectionCard } from "@/components/home/SectionCard";
import { ServiceCard } from "@/components/home/ServiceCard";
import { SpecialOfferCard } from "@/components/home/SpecialOfferCard";
import { TopProviderCard } from "@/components/home/TopProviderCard";
import {
  benefits,
  categories,
  featuredServices,
  gradientColors,
  heroBanners,
  howItWorksSteps,
  specialOffers,
  topProviders
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
            <SectionCard
              title="All Categories"
              actionLabel="View All"
              onActionPress={() => router.push("/categories")}
            >
              <CategoriesCarousel categories={categories} />
            </SectionCard>
          </View>

          {/* Featured Services - Vertical Cards */}
          <View className="px-6 mt-6">
            <SectionCard
              title="Featured Services"
              actionLabel="View All"
              onActionPress={() => router.push("/popular-services")}
            >
              <View className="mt-2">
                {featuredServices.map((service) => (
                  <FeaturedServiceCard
                    key={service.id}
                    title={service.title}
                    description={service.description}
                    image={service.image}
                    price={service.price}
                    rating={service.rating}
                    icon={service.icon as any}
                    onPress={() => router.push("/popular-services")}
                  />
                ))}
              </View>
            </SectionCard>
          </View>

          {/* Special Offers */}
          <View className="px-6 mt-6">
            <SectionCard
              title="Special Offers"
              actionLabel="View All"
              onActionPress={() => router.push("/popular-services")}
            >
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {specialOffers.map((offer) => (
                  <SpecialOfferCard
                    key={offer.id}
                    title={offer.title}
                    discount={offer.discount}
                    description={offer.description}
                    code={offer.code}
                    color={offer.color as [string, string]}
                    icon={offer.icon as any}
                    onPress={() => router.push("/popular-services")}
                  />
                ))}
              </ScrollView>
            </SectionCard>
          </View>

          {/* Recommended */}
          <View className="px-6 mt-6">
            <SectionCard
              title="Recommended for You"
              actionLabel="See All"
              onActionPress={() => router.push("/popular-services")}
            >
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

          {/* Why Choose Us - Benefits */}
          <View className="px-6 mt-6">
            <SectionCard
              title="Why Choose Us"
              actionLabel="Learn More"
              onActionPress={() => router.push("/popular-services")}
            >
              <View className="flex-row flex-wrap gap-3 mt-2">
                {benefits.map((benefit) => (
                  <View key={benefit.id} className="w-[48%]">
                    <BenefitCard
                      icon={benefit.icon as any}
                      title={benefit.title}
                      description={benefit.description}
                      color={benefit.color}
                      onPress={() => router.push("/popular-services")}
                    />
                  </View>
                ))}
              </View>
            </SectionCard>
          </View>

          {/* Top Providers */}
          <View className="px-6 mt-6">
            <SectionCard
              title="Top Rated Providers"
              actionLabel="View All"
              onActionPress={() => router.push("/top-providers")}
            >
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {topProviders.map((provider) => (
                  <TopProviderCard
                    key={provider.id}
                    name={provider.name}
                    role={provider.role}
                    rating={provider.rating}
                    image={provider.image}
                    onPress={() => router.push("/top-providers")}
                  />
                ))}
              </ScrollView>
            </SectionCard>
          </View>

          {/* How It Works */}
          <View className="px-6 mt-6">
            <SectionCard
              title="How It Works"
              actionLabel="Get Started"
              onActionPress={() => router.push("/popular-services")}
            >
              <View className="mt-2">
                {howItWorksSteps.map((step, index) => (
                  <HowItWorksCard
                    key={step.id}
                    step={step.step}
                    title={step.title}
                    description={step.description}
                    icon={step.icon as any}
                    isLast={index === howItWorksSteps.length - 1}
                    onPress={() => router.push("/popular-services")}
                  />
                ))}
              </View>
            </SectionCard>
          </View>

          {/* Services */}
          <View className="px-6 mt-6">
            <SectionCard
              title="Popular Services"
              actionLabel="View All"
              onActionPress={() => router.push("/popular-services")}
            >
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
