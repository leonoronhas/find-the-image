import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

import Color from "../constants/colors";
import ViewBackground from "../components/ViewBackground";
import DefaultTitleText from "../components/DefaultTitleText";
import DefaultButton from "../components/DefaultButton";

const GetStartedScreen = ({ params }) => (
  <ViewBackground>
    <StatusBar hidden />
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <View style={styles.title}>
          <DefaultTitleText>Find the Number!</DefaultTitleText>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <DefaultButton>Get Started!</DefaultButton>
        <DefaultButton>Skip Tutorial</DefaultButton>
      </View>
    </View>
  </ViewBackground>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  title: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.done,
    paddingVertical: 10,
    paddingHorizontal: 30,
    // Shadow props iOS only
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.3,
    // Elevation props Android only
    elevation: 8,
    borderRadius: 40,
    width: scale(485),
    height: verticalScale(30),
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});

export default GetStartedScreen;
