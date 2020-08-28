import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
} from "react-native";

import DefaultText from '../components/DefaultText';

const GetStartedScreen = ({ params }) => (
  <SafeAreaView style={styles.container}>
    <StatusBar hidden />
    <ImageBackground
      source={require("../assets/images/backgroundImage.png")}
      style={styles.image}
    >
        <View>
      <DefaultText style={styles.text}>Inside</DefaultText></View>
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
    color: "white",
    fontSize: 30,
    textAlign: "center"
  },
});

export default GetStartedScreen;
