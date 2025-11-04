import { Stack, useLocalSearchParams } from "expo-router";

export default function StackLayout() {
  const { id } = useLocalSearchParams();
  return <Stack screenOptions={{ title: "Item id: " + id }} />;
}
