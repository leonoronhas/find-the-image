import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
} from "react-native";

import DefaultTitleText from '../components/DefaultTitleText';

const GetStartedScreen = ({ params }) => (
  <SafeAreaView style={styles.container}>
    <StatusBar hidden />
    <ImageBackground
      source={require("../assets/images/backgroundImage.png")}
      style={styles.image}
    >
        <View>
      <DefaultTitleText style={styles.text}>Find the Number!</DefaultTitleText></View>
    </ImageBackground>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    padding:10,
    resizeMode: "contain",
    justifyContent: "center",
  },
  text: {
    // Add here if needed
  },
});

export default GetStartedScreen;
