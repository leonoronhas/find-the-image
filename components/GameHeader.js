import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { RFPercentage } from "react-native-responsive-fontsize";
import { FontAwesome5 } from "@expo/vector-icons";
import CountDown from "react-native-countdown-component";

import { getDifficultyOption, timeHandler } from "../data/difficultyOption";
import { getOption } from "../data/categoryOption";


import Color from "../constants/colors";
import DefaultBodyText from "../components/DefaultBodyText";

const GameHeader = (props) => {
  const [difficulty, setDifficulty] = useState(getDifficultyOption());
  const [category, setCategory] = useState(getOption());
  const [time, setTime] = useState(timeHandler());  

  return (
    <View style={styles.headerContainer}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={props.onPress}
          styles={styles.homeButton}
          activeOpacity={0.8}
        >
          <FontAwesome5 name="home" size={25} color={Color.danger} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={props.onPressEye}
          styles={styles.homeButton}
          activeOpacity={0.8}
        >
          <FontAwesome5 name="eye" size={25} color={Color.danger} />
        </TouchableOpacity>
      </View>
      <View style={styles.textContainer}>
        <DefaultBodyText style={styles.text}>
          Difficulty:{" "}
          <DefaultBodyText style={styles.text}>{difficulty}</DefaultBodyText>
        </DefaultBodyText>
        <DefaultBodyText style={styles.text}>
          Category:{" "}
          <DefaultBodyText style={styles.text}>{category}</DefaultBodyText>
        </DefaultBodyText>
      </View>
      <View style={styles.countdownContainer}>
        <DefaultBodyText style={styles.countdownText}>Time:</DefaultBodyText>
        <CountDown
          until={time}
          onFinish={() => alert("TIMES UP!!")}
          size={20}
          timeToShow={["S"]}
          timeLabels={{ s: null }}
          digitStyle={{ backgroundColor: "transparent" }}
          digitTxtStyle={{ color: Color.done }}
        />
        {()=>console.log(time)}
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
