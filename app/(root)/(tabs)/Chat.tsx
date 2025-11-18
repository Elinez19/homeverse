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

const conversations = [
  { name: "Sparkle Crew", preview: "We're en route and arrive in 15 mins." },
  { name: "Fix-It Pros", preview: "Please share a photo of the faucet leak." },
  { name: "Outdoor Oasis", preview: "Quote updated with seasonal planting." },
] as const;

export default function ChatScreen() {
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
            <View className="flex-row items-center justify-between">
              <View>
                <Text className="text-3xl font-bold text-slate-900">
                  Messages
                </Text>
                <Text className="text-slate-600 mt-1">
                  Coordinate with pros in one secure place.
                </Text>
              </View>
              <TouchableOpacity
                className="flex-row items-center bg-white/80 rounded-2xl px-3 py-2"
                activeOpacity={0.8}
              >
                <Ionicons name="create-outline" size={18} color="#0f172a" />
                <Text className="text-slate-900 font-semibold ml-2">New</Text>
              </TouchableOpacity>
            </View>

            <BlurView intensity={30} tint="light" className="rounded-3xl">
              <View className="rounded-3xl bg-white/70 p-5 space-y-4">
                <View className="flex-row items-center">
                  <Ionicons name="information-circle-outline" size={20} color="#0f172a" />
                  <Text className="text-slate-700 ml-2 flex-1">
                    Enable push notifications to never miss an update.
                  </Text>
                </View>
                <TouchableOpacity className="self-start" activeOpacity={0.7}>
                  <Text className="text-slate-900 font-semibold">
                    Manage preferences →
                  </Text>
                </TouchableOpacity>
              </View>
            </BlurView>

            <View className="space-y-4">
              {conversations.map((chat) => (
                <BlurView
                  key={chat.name}
                  intensity={35}
                  tint="light"
                  className="rounded-3xl"
                >
                  <TouchableOpacity
                    className="rounded-3xl bg-white/70 px-5 py-4 flex-row items-center"
                    activeOpacity={0.8}
                  >
                    <View className="w-12 h-12 rounded-2xl bg-slate-900/90 items-center justify-center mr-4">
                      <Text className="text-white font-semibold text-base">
                        {chat.name.slice(0, 2)}
                      </Text>
                    </View>
                    <View className="flex-1">
                      <Text className="text-slate-900 text-lg font-semibold">
                        {chat.name}
                      </Text>
                      <Text className="text-slate-600 text-sm" numberOfLines={1}>
                        {chat.preview}
                      </Text>
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
