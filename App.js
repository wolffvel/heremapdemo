import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, NativeModules } from "react-native";

export default function App() {
  const OpenActivity = NativeModules.OpenActivity;
  const openMap = () => {
    OpenActivity.open();
  };
  return (
    <View style={styles.container}>
      <Button title="open map" onPress={() => openMap()} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
