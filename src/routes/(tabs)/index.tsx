import { ActivityIndicator, RefreshControl, View } from "react-native";

import ItemCard from "@/components/ui/ItemCard";
import { useThemeColor } from "@/hooks/use-theme-color";
import { supabase } from "@/utils/supabase";
import { Tables } from "@/utils/supabase/database.types";

import HomeNavbar from "@/components/ui/HomeNavbar";
import { useEffect, useState } from "react";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue
} from "react-native-reanimated";
import {
  SafeAreaView,
  useSafeAreaInsets
} from "react-native-safe-area-context";

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  const opacity = useSharedValue(1);
  const translateY = useSharedValue(0);
  const lastContentOffset = useSharedValue(0);

  const isScrolling = useSharedValue(false);

  const backgroundColor = useThemeColor({}, "background");

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      if (
        lastContentOffset.value > event.contentOffset.y &&
        isScrolling.value
      ) {
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
    }
  });

  const [isLoading, setLoading] = useState(true);
  const [items, setItems] = useState<Tables<"item">[]>();

  useEffect(() => {
    if (items === undefined) getItem();
  }, [items]);

  async function getItem() {
    try {
      setLoading(true);

      const { data, error, status } = await supabase
        .from("item")
        .select("*")
        .limit(10);

      if (error && status !== 406) throw error;

      if (data) {
        console.log("data", data);

        setItems(data);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <SafeAreaView
      edges={["top"]}
      style={{
        flex: 1,
        backgroundColor: backgroundColor
      }}
    >
      <HomeNavbar opacity={opacity} translateY={translateY} />

      {isLoading ? (
        <View
          style={{
            flex: 1,
            justifyContent: "center"
          }}
        >
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <Animated.FlatList
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          refreshControl={
            <RefreshControl
              style={{ marginTop: insets.top }}
              refreshing={isLoading}
              onRefresh={getItem}
            />
          }
          onScroll={scrollHandler}
          style={{ paddingHorizontal: 12 }}
          contentContainerStyle={{
            paddingTop: insets.top
          }}
          data={items}
          numColumns={2}
          renderItem={({ item }) => <ItemCard key={item.id} item={item} />}
        />
      )}
    </SafeAreaView>
  );
}
