import React from "react";
import { View, StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

import Color from "../constants/colors";
import ViewBackground from "../components/ViewBackground";
import DefaultTitleText from "../components/DefaultTitleText";
import DefaultButton from "../components/DefaultButton";

const HomeScreen = ({ params }) => (
  <ViewBackground>
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <View style={styles.title}>
          <DefaultTitleText>Find the Number!</DefaultTitleText>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <DefaultButton style={styles.newGame}>New Game!</DefaultButton>
        <DefaultButton style={styles.record}>Record</DefaultButton>
      </View>
      <View
        style={{
          alignItems: "center",
          marginVertical: 10,
        }}
      >
        <DefaultButton style={styles.quit}>quit...</DefaultButton>
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
    height: verticalScale(100),
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  newGame: {
    backgroundColor: Color.primary,
  },
  record: {
    backgroundColor: Color.warning,
  },
  quit: {
    backgroundColor: Color.primary,
    width: scale(120),
    height: verticalScale(50),
  },
});

export default HomeScreen;
