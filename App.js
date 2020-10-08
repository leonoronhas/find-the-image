import "react-native-gesture-handler";
import React from "react";
import { AppLoading } from "expo";
import { useFonts } from "expo-font";


import GameScreen from "./screens/GameScreen";
import MainNavigator from "./navigation/MainNavigator";

export default function App() {
  let [fontsLoaded] = useFonts({
    mouseMemoirs: require("./assets/fonts/MouseMemoirs-Regular.ttf"),
    openSans: require("./assets/fonts/OpenSans-Regular.ttf"),
    openSansBold: require("./assets/fonts/OpenSans-Bold.ttf")
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <MainNavigator />;
}
