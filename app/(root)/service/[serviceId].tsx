import { ServiceAboutSection } from "@/components/service/ServiceAboutSection";
import { ServiceActionsBar } from "@/components/service/ServiceActionsBar";
import { ServiceDetailHero } from "@/components/service/ServiceDetailHero";
import {
  ServiceInfoTab,
  ServiceInfoTabs,
} from "@/components/service/ServiceInfoTabs";
import { ServiceMetaChips } from "@/components/service/ServiceMetaChips";
import { ServiceProviderCard } from "@/components/service/ServiceProviderCard";
import { getServiceDetail } from "@/constants/services";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useMemo, useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  StatusBar,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Page() {
  const router = useRouter();
  const { serviceId } = useLocalSearchParams<{ serviceId?: string }>();
  const [activeTab, setActiveTab] = useState<ServiceInfoTab>("About");

  const service = useMemo(
    () => (serviceId ? getServiceDetail(serviceId as string) : undefined),
    [serviceId]
  );
  const handleBookNow = () =>
    Alert.alert("Booking", "Booking flow will be available soon.");

  if (!service) {
    return (
      <SafeAreaView className="flex-1 items-center justify-center bg-white px-6">
        <Text className="text-xl font-semibold text-slate-900">
          Service not found
        </Text>
        <Text className="text-slate-500 text-center mt-2">
          The service you are looking for may have been removed or is currently
          unavailable.
        </Text>
        <View className="mt-6">
          <Text
            onPress={() => router.back()}
            className="text-emerald-600 font-semibold text-base"
          >
            Go Back
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <View className="flex-1 bg-slate-50">
      <StatusBar barStyle="light-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ServiceDetailHero
          image={service.image}
          gallery={service.gallery}
          onBackPress={() => router.back()}
          onFavoritePress={() =>
            Alert.alert("Saved", "Added to your favourites.")
          }
        />
        <View className="px-6 pb-16">
          <ServiceInfoTabs
            category={service.category}
            title={service.title}
            address={service.address}
            rating={service.rating}
            reviews={service.reviews}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
          <ServiceMetaChips
            highlights={service.highlights}
            duration={service.duration}
            availability={service.availability}
          />

          {activeTab === "About" && (
            <>
              <ServiceAboutSection
                summary={service.summary}
                description={service.description}
              />
              <ServiceProviderCard provider={service.provider} />
            </>
          )}

          {activeTab === "Gallery" && (
            <View className="mt-6">
              <Text className="text-lg font-semibold text-slate-900 mb-3">
                Gallery
              </Text>
              <View className="flex-row flex-wrap justify-between">
                {service.gallery.map((asset) => (
                  <View
                    key={asset}
                    className="w-[48%] mb-3 h-36 rounded-2xl overflow-hidden bg-slate-200"
                  >
                    <Image
                      source={{ uri: asset }}
                      className="w-full h-full"
                      resizeMode="cover"
                    />
                  </View>
                ))}
              </View>
            </View>
          )}

          {activeTab === "Review" && (
            <View className="mt-6 bg-white rounded-3xl p-4 border border-slate-100">
              <Text className="text-lg font-semibold text-slate-900">
                Reviews ({service.reviews})
              </Text>
              <Text className="text-slate-500 text-sm mt-2">
                Verified customers love this provider for punctuality, friendly
                communication, and consistent quality. Review collection is
                coming soon.
              </Text>
            </View>
          )}

          <ServiceActionsBar
            totalPrice={service.totalPrice}
            priceLabel={service.priceLabel}
            onBookNow={handleBookNow}
          />
        </View>
      </ScrollView>
    </View>
  );
}

