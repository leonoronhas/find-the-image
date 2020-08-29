import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { RFPercentage } from "react-native-responsive-fontsize";

import Color from "../constants/colors";
import ViewBackground from "../components/ViewBackground";
import DefaultBodyText from "../components/DefaultBodyText";
import DefaultButton from "../components/DefaultButton";

const DifficultyScreen = () => {
  return (
    <ViewBackground>
      <StatusBar hidden />
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <DefaultBodyText style={styles.text}>
            Choose dufficulty:
          </DefaultBodyText>
        </View>
        <View style={styles.difficultyContainer}>
          <View style={styles.options}>
            <DefaultButton style={styles.buttonEasy}>Easy</DefaultButton>
            <DefaultBodyText style={styles.difficultyText}>
              30 seconds to match the
            </DefaultBodyText>
            <DefaultBodyText style={styles.difficultyText}>
              number among
            </DefaultBodyText>
            <DefaultBodyText style={styles.difficultyText}>
              40 numbers
            </DefaultBodyText>
          </View>
          <View style={styles.options}>
            <DefaultButton style={styles.buttonMedium}>Medium</DefaultButton>
            <DefaultBodyText style={styles.difficultyText}>
              30 seconds to match the
            </DefaultBodyText>
            <DefaultBodyText style={styles.difficultyText}>
              number among
            </DefaultBodyText>
            <DefaultBodyText style={styles.difficultyText}>
              60 numbers
            </DefaultBodyText>
          </View>
          <View style={styles.options}>
            <DefaultButton style={styles.buttonHard}>Hard</DefaultButton>
            <DefaultBodyText style={styles.difficultyText}>
              20 seconds to match the
            </DefaultBodyText>
            <DefaultBodyText style={styles.difficultyText}>
              number among
            </DefaultBodyText>
            <DefaultBodyText style={styles.difficultyText}>
              80 numbers
            </DefaultBodyText>
          </View>
        </View>
        <View style={styles.doneContainer}>
          <DefaultButton style={styles.done}>Done!</DefaultButton>
        </View>
      </View>
    </ViewBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  difficultyContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginVertical: 20,
  },
  options: {
    textAlign: "center",
    alignItems: "center",
  },
  difficultyText: {
    fontSize: RFPercentage(3.5),
  },
  textContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  text: {
    fontSize: RFPercentage(6),
  },
  buttonEasy: {
    width: scale(120),
    height: verticalScale(50),
    backgroundColor: Color.success,
  },
  buttonMedium: {
    width: scale(120),
    height: verticalScale(50),
    backgroundColor: Color.warning,
  },
  buttonHard: {
    width: scale(120),
    height: verticalScale(50),
    backgroundColor: Color.danger,
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
    width: scale(120),
    height: verticalScale(50),
  },
});

export default DifficultyScreen;
