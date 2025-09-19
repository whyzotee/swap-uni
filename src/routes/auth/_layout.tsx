import { Link, Stack } from "expo-router";
import React from "react";
import { Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AuthLayout() {
  return (
    <React.Fragment>
      <Stack>
        <Stack.Screen name="sign-in" options={{ title: "Sign In" }} />
        <Stack.Screen name="sign-up" options={{ title: "Sign Up" }} />
      </Stack>

      <SafeAreaView>
        <Link href={"/"} dismissTo asChild>
          <Button title="Back to Home" />
        </Link>
      </SafeAreaView>
    </React.Fragment>
  );
}
