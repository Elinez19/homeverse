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

const preferences = [
  { icon: "notifications-outline", label: "Notifications" },
  { icon: "card-outline", label: "Payment methods" },
  { icon: "shield-checkmark-outline", label: "Security" },
  { icon: "help-circle-outline", label: "Help center" },
] as const;

export default function ProfileScreen() {
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
              <Text className="text-3xl font-bold text-slate-900">Profile</Text>
              <Text className="text-slate-600 mt-1">
                Manage your account, privacy, and support.
              </Text>
            </View>

            <BlurView intensity={40} tint="light" className="rounded-3xl">
              <View className="rounded-3xl bg-white/70 p-5 flex-row items-center">
                <View className="w-14 h-14 rounded-2xl bg-slate-900 items-center justify-center mr-4">
                  <Text className="text-white text-xl font-semibold">HV</Text>
                </View>
                <View className="flex-1">
                  <Text className="text-slate-900 text-lg font-semibold">
                    Olivia James
                  </Text>
                  <Text className="text-slate-500 text-sm">
                    olivia@homeverse.app
                  </Text>
                </View>
                <Ionicons
                  name="chevron-forward"
                  size={20}
                  color="rgba(15,23,42,0.7)"
                />
              </View>
            </BlurView>

            <BlurView intensity={35} tint="light" className="rounded-3xl">
              <View className="rounded-3xl bg-white/70 p-5 space-y-4">
                <Text className="text-slate-900 font-semibold text-lg">
                  Preferences
                </Text>
                {preferences.map((pref) => (
                  <TouchableOpacity
                    key={pref.label}
                    className="flex-row items-center justify-between py-2"
                    activeOpacity={0.7}
                  >
                    <View className="flex-row items-center">
                      <Ionicons
                        name={pref.icon}
                        size={20}
                        color="rgba(15,23,42,0.8)"
                      />
                      <Text className="text-slate-700 ml-3">{pref.label}</Text>
                    </View>
                    <Ionicons
                      name="chevron-forward"
                      size={18}
                      color="rgba(15,23,42,0.6)"
                    />
                  </TouchableOpacity>
                ))}
              </View>
            </BlurView>

            <BlurView intensity={30} tint="light" className="rounded-3xl">
              <View className="rounded-3xl bg-white/70 p-5 space-y-3">
                <Text className="text-slate-900 font-semibold text-lg">
                  Membership
                </Text>
                <Text className="text-slate-600">
                  HomeVerse Plus renews on Dec 1. Enjoy priority scheduling,
                  extended warranty, and annual maintenance credits.
                </Text>
                <TouchableOpacity
                  className="self-start bg-slate-900 px-4 py-2 rounded-2xl"
                  activeOpacity={0.8}
                >
                  <Text className="text-white font-semibold text-sm">
                    Manage plan
                  </Text>
                </TouchableOpacity>
              </View>
            </BlurView>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
