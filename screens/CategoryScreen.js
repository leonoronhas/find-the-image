import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";

import Color from "../constants/colors";
import ViewBackground from "../components/ViewBackground";
import DefaultBodyText from "../components/DefaultBodyText";
import DefaultButton from "../components/DefaultButton";

const CategoryScreen = () => {
  return (
    <ViewBackground>
      <StatusBar hidden />
      <View style={styles.container}>
        <View style={styles.text}>
          <DefaultBodyText>Choose category:</DefaultBodyText>
        </View>
        <View style={styles.categoryContainer}>
          <DefaultButton style={{ marginVertical: 10 }}>Roman</DefaultButton>
          <DefaultButton>Decimals</DefaultButton>
          <DefaultButton>Binary</DefaultButton>
          <DefaultButton>Hexadecimals</DefaultButton>
          <DefaultButton>Percent</DefaultButton>
          <DefaultButton>Currency</DefaultButton>
        </View>
        <View style={styles.doneContainer}>
          <DefaultButton style={styles.done}>Done!</DefaultButton>
          <DefaultButton style={styles.random}>Random</DefaultButton>
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
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 20,
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
  doneContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    marginVertical: 20,
  },
  done: {
    backgroundColor: Color.done,
  },
  random: {
    backgroundColor: Color.warning,
  },
});

export default CategoryScreen;
