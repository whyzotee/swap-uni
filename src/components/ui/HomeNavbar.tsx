import { HelloWave } from "@/components/hello-wave";
import { ThemedText } from "@/components/themed-text";
import { useThemeColor } from "@/hooks/use-theme-color";
import { Link } from "expo-router";
import { MessageCircle } from "lucide-react-native";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Animated, {
  Easing,
  SharedValue,
  useAnimatedStyle,
  withTiming
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface HomeNavbarProps {
  opacity: SharedValue<number>;
  translateY: SharedValue<number>;
}

export default function HomeNavbar({ opacity, translateY }: HomeNavbarProps) {
  const insets = useSafeAreaInsets();

  const color = useThemeColor({}, "text");
  const backgroundColor = useThemeColor({}, "background");

  const actionBarStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(opacity.value, {
        duration: 250,
        easing: Easing.inOut(Easing.ease)
      }),
      transform: [
        {
          translateY: withTiming(translateY.value, {
            duration: 250,
            easing: Easing.inOut(Easing.ease)
          })
        }
      ]
    };
  });

  return (
    <Animated.View
      style={[
        styles.action,
        actionBarStyle,
        { paddingTop: insets.top, backgroundColor: backgroundColor }
      ]}
    >
      <View style={{ flexDirection: "row" }}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </View>
      <View>
        <Link href="/(tabs)/chats" asChild>
          <TouchableOpacity>
            <MessageCircle color={color} />
          </TouchableOpacity>
        </Link>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  action: {
    paddingHorizontal: 16,
    flexDirection: "row",
    padding: 8,
    position: "absolute",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 10
  }
});
