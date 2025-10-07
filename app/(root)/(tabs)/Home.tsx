import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1">
      <LinearGradient
        colors={["#FFD700", "#FFA500", "#FFE4B5"]}
        className="absolute inset-0"
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      />
      <View className="flex-1 items-center justify-center">
        <Text className="text-3xl font-bold text-white mb-4">HomeVerse</Text>
        <Text className="text-white/80 text-center px-8">
          Welcome to your home services dashboard!
        </Text>
      </View>
    </View>
  );
}
