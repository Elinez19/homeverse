import { gradientColors } from "@/constants/data";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import {
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const categories = [
  { icon: "sparkles-outline", title: "Cleaning", desc: "Deep, move-out, seasonal" },
  { icon: "construct-outline", title: "Repairs", desc: "Plumbing, electrical, HVAC" },
  { icon: "color-palette-outline", title: "Upgrades", desc: "Painting, smart home" },
  { icon: "leaf-outline", title: "Outdoor", desc: "Lawn, pool, landscaping" },
] as const;

export default function ExploreScreen() {
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
          <View className="px-6 pt-6 space-y-6">
            <View>
              <Text className="text-3xl font-bold text-slate-900">
                Explore services
              </Text>
              <Text className="text-slate-600 mt-1">
                Curated experiences to keep your home thriving.
              </Text>
            </View>

            <BlurView intensity={35} tint="light" className="rounded-3xl">
              <View className="rounded-3xl bg-white/70 p-5 space-y-4">
                <Text className="text-lg font-semibold text-slate-900">
                  Featured concierge
                </Text>
                <Text className="text-slate-600 leading-5">
                  Pair multiple services together—book a cleaning crew, a
                  same-day handyman, and appliance refresh in one flow.
                </Text>
                <TouchableOpacity className="self-start" activeOpacity={0.7}>
                  <Text className="text-slate-900 font-semibold">
                    Build a project →
                  </Text>
                </TouchableOpacity>
              </View>
            </BlurView>

            <View className="space-y-4">
              {categories.map((cat) => (
                <BlurView
                  key={cat.title}
                  intensity={30}
                  tint="light"
                  className="rounded-3xl"
                >
                  <TouchableOpacity
                    className="rounded-3xl bg-white/65 px-5 py-4 flex-row items-center"
                    activeOpacity={0.75}
                  >
                    <View className="w-12 h-12 rounded-2xl bg-slate-900/90 items-center justify-center mr-4">
                      <Ionicons name={cat.icon} size={22} color="#fff" />
                    </View>
                    <View className="flex-1">
                      <Text className="text-slate-900 text-lg font-semibold">
                        {cat.title}
                      </Text>
                      <Text className="text-slate-600 text-sm">{cat.desc}</Text>
                    </View>
                    <Ionicons
                      name="chevron-forward"
                      size={18}
                      color="rgba(15,23,42,0.7)"
                    />
                  </TouchableOpacity>
                </BlurView>
              ))}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
