import ChannelListItem from "@/components/chats/ChannelListItem";
import { channels } from "@/constants/channels";
import { StyleSheet, View } from "react-native";

export default function Chat() {
  return (
    <View style={styles.screen}>
      <ChannelListItem channel={channels[0]} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});