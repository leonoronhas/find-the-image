import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { RFPercentage } from "react-native-responsive-fontsize";
import { FontAwesome5 } from "@expo/vector-icons";
import CountDown from "react-native-countdown-component";

import { getDifficultyOption } from "../data/difficultyOption";

import Color from "../constants/colors";
import DefaultBodyText from "../components/DefaultBodyText";

const GameHeader = (props) => {
  const [difficulty, setDifficulty] = useState(getDifficultyOption());
  const [attempts, setAttempts] = useState(10);

  return (
    <View style={styles.headerContainer}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={props.onPress}
          styles={styles.homeButton}
          activeOpacity={0.8}
        >
          <FontAwesome5 name="home" size={30} color={Color.warning} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={props.onPress}
          styles={styles.homeButton}
          activeOpacity={0.8}
        >
          <FontAwesome5 name="eye" size={30} color={Color.warning} />
        </TouchableOpacity>
      </View>
      <View style={styles.textContainer}>
        <DefaultBodyText style={styles.text}>
          Difficulty:
          <DefaultBodyText style={styles.text}>{difficulty}</DefaultBodyText>
        </DefaultBodyText>
        <DefaultBodyText style={styles.text}>
          Attempts:
          <DefaultBodyText style={styles.text}>{attempts}</DefaultBodyText>
        </DefaultBodyText>
      </View>
      <View style={styles.countdownContainer}>
        <DefaultBodyText style={styles.countdownText}>Time:</DefaultBodyText>
        <CountDown
          until={30}
          onFinish={() => alert("hello")}
          size={20}
          timeToShow={["S"]}
          timeLabels={{ s: null }}
          digitStyle={{ backgroundColor: "transparent" }}
          digitTxtStyle={{ color: Color.done }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: Color.accent,
    width: "100%",
    height: verticalScale(40),
    marginTop: 0,
  },
  homeButton: {
    backgroundColor: "transparent",
  },
  countdownContainer: {
    height: verticalScale(40),
    width: scale(80),
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  countdownText: {
    fontSize: RFPercentage(2),
    color: Color.done,
    fontFamily: "openSansBold",
  },
  text: {
    fontSize: RFPercentage(2),
    color: Color.danger,
    fontFamily: "openSansBold",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: verticalScale(40),
    width: scale(100),
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    height: verticalScale(40),
    width: scale(370),
  },
});

export default GameHeader;
