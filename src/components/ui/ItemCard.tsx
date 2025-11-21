import { Tables } from "@/utils/supabase/database.types";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { ThemedText } from "../themed-text";

interface ItemCardProps {
  item: Tables<"item">;
}

export default function ItemCard({ item }: ItemCardProps) {
  return (
    <View style={styles.container}>
      <Link href={{ pathname: "/item/[id]", params: { id: item.id } }} asChild>
        <TouchableOpacity>
          {item.imageUrl != null ? (
            <Image
              style={styles.image}
              source={item.imageUrl}
              contentFit="cover"
            />
          ) : (
            <View style={{ height: 150 }}></View>
          )}
          <View style={styles.details}>
            <ThemedText type="subtitle" numberOfLines={2}>
              {item.title}
            </ThemedText>
            <ThemedText numberOfLines={1}>โดย {item.ownerName}</ThemedText>
          </View>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8,
    borderRadius: 8,
    boxShadow: "0px 2px 8px 0px rgba(99, 99, 99, 0.2)"
  },
  image: {
    flex: 1,
    width: "100%",
    height: 150,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomWidth: 2,
    borderBottomColor: "#00000015"
  },
  details: {
    flex: 1,
    padding: 8
  }
});
