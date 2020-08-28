import React from "react";
import { View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { RFPercentage } from "react-native-responsive-fontsize";
import { scale, verticalScale } from "react-native-size-matters";

import Color from "../constants/colors";
import ViewBackground from "../components/ViewBackground";
import DefaultTitleText from "../components/DefaultTitleText";
import DefaultBodyText from "../components/DefaultBodyText";
import DefaultButton from "../components/DefaultButton";

const TutorialScreen2 = ({ params }) => {
  return (
    <ViewBackground style={styles.container}>
      <StatusBar hidden />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 10,
        }}
      >
        <View style={styles.titleContainer}>
          <View style={styles.title}>
            <DefaultTitleText style={{ fontSize: RFPercentage(6) }}>
              Choose your difficulty!
            </DefaultTitleText>
          </View>
        </View>
        <View style={styles.textContainer}>
          <View style={styles.easy}>
            <DefaultBodyText style={styles.easyText}>EASY:</DefaultBodyText>
            <DefaultBodyText>30 seconds</DefaultBodyText>
            <DefaultBodyText>40 numbers</DefaultBodyText>
          </View>
          <View style={styles.medium}>
            <DefaultBodyText style={styles.mediumText}>MEDIUM:</DefaultBodyText>
            <DefaultBodyText>30 seconds</DefaultBodyText>
            <DefaultBodyText>60 numbers</DefaultBodyText>
          </View>
          <View style={styles.hard}>
            <DefaultBodyText style={styles.hardText}>HARD:</DefaultBodyText>
            <DefaultBodyText>20 seconds</DefaultBodyText>
            <DefaultBodyText>80 numbers</DefaultBodyText>
          </View>
        </View>
        <DefaultButton style={styles.nextButton}>Next</DefaultButton>
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
    width: scale(430),
    height: verticalScale(60),
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
  easy: {
    width: scale(200),
  },
  easyText: {
    color: Color.success,
  },
  medium: {
    width: scale(200),
  },
  mediumText: {
    color: Color.warning,
  },
  hard: {
    width: scale(200),
  },
  hardText: {
    color: Color.danger,
  },
});

export default TutorialScreen2;
