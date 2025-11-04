import { Stack } from "expo-router";

export default function ChatLayout() {
    return (
        <Stack>
            <Stack.Screen name="index"
                options={{
                    title: "Chats",
                    headerLargeTitle: true,
                    // headerTransparent: true,
                }}
            />
            <Stack.Screen name="channel/[id]"
                options={{
                    title: "Channel",
                    headerBackButtonDisplayMode: 'minimal',
                    headerLargeTitle: true,
                    headerTransparent: true,
                }}
            />
        </Stack>
    );
}