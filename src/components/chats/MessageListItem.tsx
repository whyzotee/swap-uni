import { Message } from "@/modules/chat/types";
import { StyleSheet, Text, View } from "react-native";

type MessageListItemProps = {
    message: Message;
    isOwnMessage?: boolean;
}

export default function MessageListItem({ message, isOwnMessage }: MessageListItemProps) {
    return (
        <View style={isOwnMessage ? styles.ownScreen : styles.screen}>
            <View style={isOwnMessage ? styles.ownMessage : styles.message}>
                <Text style={isOwnMessage ? styles.ownTextStyle : styles.textStyle}>{message.content}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flexDirection: "row",
        justifyContent: "flex-start",
        marginBottom: 8
    },
    message: {
        maxWidth: "75%",
        alignItems: "flex-start",
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: "#e5e7eb",
        borderRadius: 100
    },
    textStyle: {
        fontSize: 14,
    },
    ownScreen: {
        flexDirection: "row",
        justifyContent: "flex-end",
        marginBottom: 8
    },
    ownMessage: {
        maxWidth: "75%",
        alignItems: "flex-end",
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: "#3b82f6",
        borderRadius: 100
    },
    ownTextStyle: {
        fontSize: 14,
        color: "white"
    }
})