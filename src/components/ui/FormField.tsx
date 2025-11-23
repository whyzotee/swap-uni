import React from "react";
import { FieldError } from "react-hook-form";
import { BlurEvent, StyleSheet, Text, TextInput } from "react-native";
import { ThemedText } from "../themed-text";

export default function FormField({
  title,
  value,
  onChange,
  onBlur,
  error,
  isPassword = false
}: {
  title: string;
  value: string;
  onChange: (text: string) => void;
  onBlur: (e: BlurEvent) => void | undefined;
  error: FieldError | undefined;
  isPassword?: boolean;
}) {
  return (
    <React.Fragment>
      <ThemedText>{title}</ThemedText>
      <TextInput
        onBlur={onBlur}
        onChangeText={onChange}
        value={value}
        keyboardType="default"
        autoCapitalize="none"
        style={styles.textInput}
        placeholder={title}
        placeholderTextColor="#000"
        secureTextEntry={isPassword}
      />
      {error && <Text style={{ color: "#ff8566" }}>{error.message}</Text>}
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
    padding: 16
  },
  listStyle: {
    padding: 16,
    gap: 16
  },
  textInput: {
    width: "auto",
    flexGrow: 1,
    flexShrink: 1,
    height: 45,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#d8d8d8",
    backgroundColor: "#fff",
    color: "#000",
    padding: 8,
    marginBottom: 8
  }
});
