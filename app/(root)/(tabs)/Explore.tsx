import { ExploreServiceCard } from "@/components/explore/ExploreServiceCard";
import { services } from "@/constants/services";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
    FlatList,
    Pressable,
    ScrollView,
    StatusBar,
    Text,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const categories = [
  "All",
  "Repairing",
  "Electrical",
  "Plumbing",
  "Cleaning",
  "Painting",
];

export default function ExploreScreen() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top"]}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      
      {/* Header */}
      <View className="px-6 py-4 flex-row items-center justify-between">
        <Pressable
          onPress={() => router.back()}
          className="w-10 h-10 rounded-full bg-slate-50 items-center justify-center active:bg-slate-100"
        >
          <Ionicons name="chevron-back" size={24} color="#1e293b" />
        </Pressable>
        
        <Text className="text-lg font-bold text-slate-900">
          Most Popular Services
        </Text>
        
        <View className="flex-row gap-3">
          <Pressable>
            <Ionicons name="notifications-outline" size={24} color="#1e293b" />
          </Pressable>
          <Pressable>
            <Ionicons name="ellipsis-vertical" size={24} color="#1e293b" />
          </Pressable>
        </View>
      </View>

      {/* Categories */}
      <View className="mt-2">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 24, gap: 12 }}
          className="py-2"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <Pressable
                key={cat}
                onPress={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full border ${
                  isActive
                    ? "bg-slate-900 border-slate-900"
                    : "bg-white border-slate-200"
                }`}
              >
                <Text
                  className={`font-semibold ${
                    isActive ? "text-white" : "text-slate-500"
                  }`}
                >
                  {cat}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>
      </View>

      {/* Service List */}
      <FlatList
        data={services}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ExploreServiceCard
            service={item}
            onPress={() => router.push(`/service/${item.id}`)}
            onBookmarkPress={() => {}}
          />
        )}
        contentContainerStyle={{ padding: 24, paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}
