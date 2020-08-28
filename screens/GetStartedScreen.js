import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";

import ViewBackground from "../components/ViewBackground";
import DefaultTitleText from "../components/DefaultTitleText";
import DefaultButton from '../components/DefaultButton';

const GetStartedScreen = ({ params }) => (
  <ViewBackground style={styles.container}>
    <StatusBar hidden />
    <View style={styles.titleContainer}>
      <DefaultTitleText>Find the Number!</DefaultTitleText>
    </View>
    <View style={styles.buttonContainer}>
        <DefaultButton >Get Started!</DefaultButton>
        <DefaultButton >Skip Tutorial</DefaultButton>
    </View>
  </ViewBackground>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",
  },
  buttonContainer: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: 'center'
  }
});

export default GetStartedScreen;
