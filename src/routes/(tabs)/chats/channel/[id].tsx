import MessageList from "@/components/chats/MessageList";
import { channels } from "@/constants/channels";
import { Stack, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function ChannelScreen() {
  const { id } = useLocalSearchParams();

  const channel = channels.find((c) => c.id === id);

  if (!channel) {
    return (
      <View>
        <Text>Channel not found</Text>
      </View>
    );
  }

  return (
    <>
      <Stack.Screen options={{ title: channel.name }} />

      <MessageList />
    </>
  )
}