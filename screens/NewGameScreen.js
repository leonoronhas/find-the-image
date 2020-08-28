import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

import Color from "../constants/colors";
import ViewBackground from "../components/ViewBackground";
import DefaultBodyText from "../components/DefaultBodyText";
import DefaultButton from "../components/DefaultButton";

const NewGameScreen = ({ params }) => {
  return (
    <ViewBackground>
      <StatusBar hidden />
      <View style={styles.container}>
        <View style={styles.categoryContainer}>
          <View style={styles.options}>
            <DefaultBodyText>Choose number category:</DefaultBodyText>
            <DefaultButton>Choose</DefaultButton>
          </View>
          <View>
            <DefaultBodyText>Choose difficulty:</DefaultBodyText>
            <DefaultButton>Choose</DefaultButton>
          </View>
        </View>
        <View style={styles.text}>
          <DefaultBodyText>Are you ready?</DefaultBodyText>
        </View>
        <View style={styles.readyContainer}>
          <DefaultButton style={styles.ready}>I'm ready!</DefaultButton>
        </View>
        <View style={styles.homeContainer}>
          <DefaultButton style={styles.home}>Home</DefaultButton>
        </View>
      </View>
    </ViewBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  categoryContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  options: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  text: {
    alignItems: "center",
    marginVertical: 20,
  },
  readyContainer: {
    flex: 1,
    alignItems: "center",
    marginVertical: 20,
  },
  ready: {
    backgroundColor: Color.done,
  },
  homeContainer: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  home: {
    width: scale(120),
    height: verticalScale(50),
  },
});

export default NewGameScreen;
