import { Channel } from "@/modules/chat/types";
import { formatDistanceToNow } from "date-fns";
import { Link } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
type ChannelListItemProps = {
  channel: Channel
}

export default function ChannelListItem({ channel }: ChannelListItemProps) {
  return (
    <Link href={{ pathname: "/chats/channel/[id]", params: { id: channel.id } }} asChild>
      <Pressable style={styles.container}>
        <Image style={styles.tinyLogo} source={{ uri: channel.avatar }} />

        <View style={styles.content}>
          <Text style={styles.name} numberOfLines={1}>
            {channel.name}
          </Text>
          <Text style={styles.lastMessage} numberOfLines={1}>
            {channel.lastMessage?.content || "No message yet"}
          </Text>
        </View>

        {channel.lastMessage && (
          <Text>
            {formatDistanceToNow(new Date(channel.lastMessage?.createdAt), { addSuffix: true })}
          </Text>
        )}
      </Pressable>
    </Link>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    gap: 12,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E6E7EB",
    // backgroundColor: "#FF000011"
  },
  content: {
    flex: 1,
    gap: 5
  },
  name: {
    fontSize: 18,
    fontWeight: "bold"
  },
  lastMessage: {
    fontSize: 14,
    color: "gray"
  },
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 50
  }
});
