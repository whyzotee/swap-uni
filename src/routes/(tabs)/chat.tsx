import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";

export default function Chat() {
  return (
    <ParallaxScrollView
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
      headerBackgroundColor={{
        dark: "",
        light: ""
      }}
    >
      <ThemedView>
        <ThemedText>Chat</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
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
  }
});
