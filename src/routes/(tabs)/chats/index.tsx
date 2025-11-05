import ChannelListItem from "@/components/chats/ChannelListItem";
import { channels } from "@/constants/channels";
import { FlatList, View } from "react-native";

export default function Chat() {
  return (
    <View>
      <FlatList
        data={channels}
        renderItem={({ item }) => <ChannelListItem channel={item} />}
        showsVerticalScrollIndicator={false}
        contentInsetAdjustmentBehavior="automatic"
      />
    </View>
  );
}