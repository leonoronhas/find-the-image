import "react-native-gesture-handler";
import React from "react";
import { AppLoading } from "expo";
import { useFonts } from "expo-font";

import TutorialScreen2 from "./screens/TutorialScreen2";

export default function App() {
  let [fontsLoaded] = useFonts({
    mouseMemoirs: require("./assets/fonts/MouseMemoirs-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <TutorialScreen2 />;
}
