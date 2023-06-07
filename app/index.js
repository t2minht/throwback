import { StyleSheet, Text, View } from "react-native";
import {Link, Stack} from "expo-router";
import App from "./App";




export default function Page() {
  return (
    <>
      {/* Use the `Screen` component to configure the layout. */}
      <Stack.Screen options={{ title: "Home" }} />
      {/* Use the `Link` component to enable optimized client-side routing. */}
      <App />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
