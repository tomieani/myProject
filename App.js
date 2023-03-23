import { StatusBar } from "expo-status-bar";
import { Box, NativeBaseProvider } from "native-base";
import { StyleSheet } from "react-native";
import HomeStack from "./src/navigation/HomeStack";

export default function App() {
  return (
    <NativeBaseProvider>
      <HomeStack />
    </NativeBaseProvider>
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
