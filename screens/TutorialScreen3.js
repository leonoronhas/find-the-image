import React from "react";
import { View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { RFPercentage } from "react-native-responsive-fontsize";
import { scale, verticalScale } from "react-native-size-matters";

import Color from "../constants/colors";
import ViewBackground from "../components/ViewBackground";
import DefaultTitleText from "../components/DefaultTitleText";
import DefaultButton from "../components/DefaultButton";

const TutorialScreen3 = ({ params }) => {
  return (
    <ViewBackground style={styles.container}>
      <StatusBar hidden />
      <View
        style={{
          flex: 1,
          justifyContent: "space-around",
          alignItems: "center",
          marginVertical: 10,
        }}
      >
        <View style={styles.titleContainer}>
          <View style={styles.title}>
            <DefaultTitleText style={{ fontSize: RFPercentage(7) }}>
              Tap I'm ready! and find the number before the time runs out!
            </DefaultTitleText>
          </View>
        </View>
        <DefaultButton>I'm ready!</DefaultButton>
      </View>
    </ViewBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  title: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.done,
    // Shadow props iOS only
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.3,
    // Elevation props Android only
    elevation: 8,
    borderRadius: 40,
    width: scale(600),
    height: verticalScale(150),
  },
  textContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  nextButton: {
    width: scale(110),
    height: verticalScale(50),
    backgroundColor: Color.warning,
  },
});

export default TutorialScreen3;
