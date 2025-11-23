import { useAuthStore } from "@/modules/auth/store";
import { Tabs } from "expo-router";
import { Icon, Label, NativeTabs } from "expo-router/unstable-native-tabs";
import { Box, Home, User2 } from "lucide-react-native";
import { Platform } from "react-native";

export default function TabLayout() {
  const { session } = useAuthStore();
  if (Platform.OS === "ios") {
    return (
      <NativeTabs>
        <NativeTabs.Trigger name="index">
          <Label>Home</Label>
          <Icon sf="house.fill" drawable="custom_android_drawable" />
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="myItem">
          <Icon sf="gear" drawable="custom_settings_drawable" />
          <Label>My Item</Label>
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="chats">
          <Icon sf="message.fill" drawable="custom_settings_drawable" />
          <Label>Chat</Label>
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="search" role="search">
          <Label>Search</Label>
        </NativeTabs.Trigger>
      </NativeTabs>
    );
  }

  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "black" }}>
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
      <Tabs.Screen name="chats" options={{ href: null, headerShown: false }} />
      <Tabs.Screen name="search" options={{ href: null }} />
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
