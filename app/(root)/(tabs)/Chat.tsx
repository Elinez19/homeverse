import { chatList, gradientColors } from "@/constants/data";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ChatScreen() {
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
              {chatList.map((chat) => (
                <BlurView
                  key={chat.id}
                  intensity={35}
                  tint="light"
                  className="rounded-3xl"
                >
                  <TouchableOpacity
                    className="rounded-3xl bg-white/70 px-5 py-4 flex-row items-center"
                    activeOpacity={0.8}
                    onPress={() => router.push({ pathname: "/(root)/chat/[id]", params: { id: chat.id } })}
                  >
                    <View className="relative mr-4">
                      <Image
                        source={{ uri: chat.avatar }}
                        className="w-14 h-14 rounded-2xl bg-slate-200"
                      />
                      {chat.online && (
                        <View className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
                      )}
                    </View>
                    
                    <View className="flex-1">
                      <View className="flex-row items-center justify-between mb-1">
                        <Text className="text-slate-900 text-lg font-semibold">
                          {chat.name}
                        </Text>
                        <Text className="text-slate-500 text-xs font-medium">
                          {chat.time}
                        </Text>
                      </View>
                      <Text className="text-slate-500 text-xs mb-1 font-medium bg-slate-100 self-start px-2 py-0.5 rounded-md overflow-hidden">
                        {chat.role}
                      </Text>
                      <View className="flex-row items-center justify-between mt-1">
                        <Text 
                          className={`text-sm flex-1 mr-2 ${chat.unread > 0 ? 'text-slate-900 font-semibold' : 'text-slate-600'}`} 
                          numberOfLines={1}
                        >
                          {chat.lastMessage}
                        </Text>
                        {chat.unread > 0 && (
                          <View className="bg-blue-500 px-2 py-0.5 rounded-full min-w-[20px] items-center justify-center">
                            <Text className="text-white text-xs font-bold">
                              {chat.unread}
                            </Text>
                          </View>
                        )}
                      </View>
                    </View>
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
