import { Button, FlatList, StyleSheet, TouchableOpacity } from "react-native";

import { HelloWave } from "@/components/hello-wave";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useAuthStore } from "@/modules/auth/store/AuthStore";
import { Link } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const data = [
  { id: "1", title: "Item 1" },
  { id: "2", title: "Item 2" },
  { id: "3", title: "Item 3" },
  { id: "4", title: "Item 4" },
  { id: "5", title: "Item 5" },
  { id: "6", title: "Item 6" }

  // Add more items as needed
];

export default function HomeScreen() {
  const { session } = useAuthStore();

  const insets = useSafeAreaInsets();

  return (
    <ThemedView
      style={{ flex: 1, paddingTop: insets.top, paddingHorizontal: 16 }}
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>

      <ThemedView>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Link
              href={{ pathname: "/item/[id]", params: { id: item.id } }}
              asChild
            >
              <TouchableOpacity key={item.id} style={styles.itemContainer}>
                <ThemedText style={styles.itemText}>{item.title}</ThemedText>
              </TouchableOpacity>
            </Link>
          )}
          numColumns={2}
        />
      </ThemedView>

      {!session && (
        <ThemedView>
          <Link href={"/auth/sign-in"} asChild>
            <Button title="Login" />
          </Link>
        </ThemedView>
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute"
  },
  grid: {
    flex: 1,
    flexDirection: "row",
    maxHeight: 100
  },
  itemContainer: {
    flex: 1, // Allows items to take equal width in a row
    margin: 8,
    padding: 20,
    backgroundColor: "#430091ff",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    aspectRatio: 1
  },
  itemText: {
    fontSize: 16,
    fontWeight: "bold"
  },
  row: {
    justifyContent: "space-between" // Distributes items evenly in a row
  }
});
