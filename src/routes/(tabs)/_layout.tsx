import { useAuthStore } from "@/modules/auth/store/AuthStore";
import { Tabs } from "expo-router";
import { Box, Home, MessageCircle, User2 } from "lucide-react-native";

export default function TabLayout() {
  const { session } = useAuthStore();

  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "#FFDAB9" }}>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <Home color={color} size={28} />
        }}
      />
      <Tabs.Screen
        name="myItem"
        options={{
          title: "My Item",
          tabBarIcon: ({ color }) => <Box color={color} size={28} />
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
          tabBarIcon: ({ color }) => <MessageCircle color={color} size={28} />
        }}
      />
      <Tabs.Protected guard={!!session}>
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ color }) => <User2 color={color} size={28} />
          }}
        />
      </Tabs.Protected>
    </Tabs>
  );
}
