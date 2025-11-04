import { Channel } from "@/modules/chat/types";
import { Text, View } from "react-native";

type ChannelListItemProps = {
    channel: Channel
}

export default function ChannelListItem({ channel }: ChannelListItemProps) {
    return (
        <View>
            <Text>{channel.name}</Text>
        </View>
    )
}