import { Tabs } from "expo-router";
import { Text } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#FFD700",
          borderTopColor: "#FFA500",
        },
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "#666",
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Text style={{ color, fontSize: 20 }}>🏠</Text>
          ),
        }}
      />
      <Tabs.Screen
        name="Explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => (
            <Text style={{ color, fontSize: 20 }}>🔍</Text>
          ),
        }}
      />
      <Tabs.Screen
        name="Chat"
        options={{
          title: "Chat",
          tabBarIcon: ({ color }) => (
            <Text style={{ color, fontSize: 20 }}>💬</Text>
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <Text style={{ color, fontSize: 20 }}>👤</Text>
          ),
        }}
      />
    </Tabs>
  );
}
