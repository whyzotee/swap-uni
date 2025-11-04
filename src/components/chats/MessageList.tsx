import { messages } from "@/constants/messages";
import { FlatList } from "react-native";
import MessageListItem from "./MessageListItem";

export default function MessageList() {
    return (
        <FlatList
            data={messages}
            contentContainerStyle={{ padding: 16 }}
            renderItem={({ item }) => <MessageListItem message={item} isOwnMessage={item.id === "10"} />}
            contentInsetAdjustmentBehavior="automatic"
        />
    )
}