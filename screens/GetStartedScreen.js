import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
} from "react-native";

const GetStartedScreen = ({ params }) => (
  <SafeAreaView style={styles.container}>
    <StatusBar hidden />
    <ImageBackground
      source={require("../assets/images/backgroundImage.png")}
      style={styles.image}
    >
      <Text style={styles.text}>Inside</Text>
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
    color: "grey",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default GetStartedScreen;
