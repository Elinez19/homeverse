import { Ionicons } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";

type HomeHeaderProps = {
  location: string;
  avatarUrl: string;
  onLocationPress?: () => void;
  onNotificationPress?: () => void;
};

export function HomeHeader({
  location,
  avatarUrl,
  onLocationPress,
  onNotificationPress,
}: HomeHeaderProps) {
  return (
    <View className="flex-row items-center justify-between">
      <TouchableOpacity
        onPress={onLocationPress}
        activeOpacity={0.8}
        className="mr-4"
      >
        <Text className="text-xs uppercase tracking-widest text-slate-500">
          Location
        </Text>
        <View className="flex-row items-center mt-1">
          <Ionicons name="location-outline" size={16} color="#0f172a" />
          <Text className="text-base font-semibold text-slate-900 ml-1">
            {location}
          </Text>
          <Ionicons
            name="chevron-down"
            size={16}
            color="rgba(15,23,42,0.7)"
            style={{ marginLeft: 2 }}
          />
        </View>
      </TouchableOpacity>

      <View className="flex-row items-center gap-3">
        <TouchableOpacity
          onPress={onNotificationPress}
          className="w-11 h-11 rounded-2xl bg-white/80 items-center justify-center"
          activeOpacity={0.8}
        >
          <Ionicons name="notifications-outline" size={20} color="#0f172a" />
        </TouchableOpacity>
        <Image source={{ uri: avatarUrl }} className="w-11 h-11 rounded-2xl" />
      </View>
    </View>
  );
}

