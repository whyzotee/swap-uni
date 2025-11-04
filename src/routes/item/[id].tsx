import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useLocalSearchParams } from "expo-router";

export default function Item() {
  const { id } = useLocalSearchParams();

  return (
    <ThemedView>
      <ThemedText>Item Page {id}</ThemedText>
    </ThemedView>
  );
}
