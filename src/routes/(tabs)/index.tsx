import { StyleSheet, TouchableOpacity, View } from "react-native";

import { HelloWave } from "@/components/hello-wave";
import { ThemedText } from "@/components/themed-text";
import { useThemeColor } from "@/hooks/use-theme-color";
import { Link } from "expo-router";
import { MessageCircle } from "lucide-react-native";
import Animated, { Easing, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const data = [
  { id: "1", title: "Item 1" },
  { id: "2", title: "Item 2" },
  { id: "3", title: "Item 3" },
  { id: "4", title: "Item 4" },
  { id: "5", title: "Item 5" },
  { id: "6", title: "Item 6" },
  { id: "7", title: "Item 4" },
  { id: "8", title: "Item 5" },
  { id: "9", title: "Item 6" },
  { id: "10", title: "Item 4" },
  { id: "11", title: "Item 5" },
  { id: "12", title: "Item 6" }
];


export default function HomeScreen() {
  // const { session } = useAuthStore();

  const insets = useSafeAreaInsets();

  const lastContentOffset = useSharedValue(0);
  const isScrolling = useSharedValue(false);

  const opacity = useSharedValue(1);
  const translateY = useSharedValue(0);

  const actionBarStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(opacity.value, {
        duration: 250,
        easing: Easing.inOut(Easing.ease),
      }),
      transform: [
        {
          translateY: withTiming(translateY.value, {
            duration: 250,
            easing: Easing.inOut(Easing.ease),
          }),
        },
      ],
    };
  });

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      if (lastContentOffset.value > event.contentOffset.y && isScrolling.value) {
        translateY.value = 0;
        opacity.value = 1;
      } else if (
        lastContentOffset.value < event.contentOffset.y &&
        isScrolling.value
      ) {
        translateY.value = -100;
        opacity.value = 0;
      }
      lastContentOffset.value = event.contentOffset.y;
    },
    onBeginDrag: (e) => {
      isScrolling.value = true;
    },
    onEndDrag: (e) => {
      isScrolling.value = false;
    },
  });

  const color = useThemeColor({}, 'text');
  const backgroundColor = useThemeColor({}, 'background');

  return (
    <View
      style={{ flex: 1, paddingTop: insets.top, backgroundColor: backgroundColor }}
    >
      <Animated.View style={[styles.action, actionBarStyle, { marginTop: insets.top, backgroundColor: backgroundColor }]}>
        <View style={{ flexDirection: "row" }}>
          <ThemedText type="title">Welcome!</ThemedText>
          <HelloWave />
        </View>
        <View >
          <Link href="/(tabs)/chats" asChild>
            <TouchableOpacity>
              <MessageCircle color={color} />
            </TouchableOpacity>
          </Link>
        </View>
      </Animated.View>

      <Animated.FlatList
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={scrollHandler}
        style={{ paddingHorizontal: 12 }}
        contentContainerStyle={{
          paddingTop: insets.top
        }}
        keyExtractor={(item) => item.id}
        data={data}
        numColumns={2}
        renderItem={({ item }) => (
          <Link
            href={{ pathname: "/item/[id]", params: { id: item.id } }}
            asChild
          >
            <TouchableOpacity key={item.id} style={styles.itemContainer}>
              <ThemedText>{item.title}</ThemedText>
            </TouchableOpacity>
          </Link>
        )}
      />
      {/* {!session && (
          <ThemedView>
            <Link href={"/auth/sign-in"} asChild>
              <Button title="Login" />
            </Link>
          </ThemedView>
        )} */}
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    margin: 8,
    padding: 20,
    backgroundColor: "#43009133",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    aspectRatio: 1
  },
  action: {
    paddingHorizontal: 16,
    flexDirection: "row",
    padding: 8,
    position: "absolute",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 10
  },
});
