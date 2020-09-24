import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { RFPercentage } from "react-native-responsive-fontsize";
import Divider from "../components/Divider";
import CountDown from "react-native-countdown-component";

import Color from "../constants/colors";
import DefaultBodyText from "../components/DefaultBodyText";
import DefaultTitleText from "../components/DefaultTitleText";

const BeforeGameScreen = ({ navigation }) => {
  const [number, setNumber] = useState(0);
  const [level, setLevel] = useState(1);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <View style={styles.leftContainer}>
        <DefaultTitleText style={styles.matchTitleText}>
          Match this number!
        </DefaultTitleText>
        <View style={styles.numberContainer}>
          <DefaultBodyText>{number}</DefaultBodyText>
        </View>
      </View>
      <Divider />
      <View style={styles.rightContainer}>
        <View style={styles.levelContainer}>
          <DefaultTitleText>
            Level <DefaultTitleText>{level}</DefaultTitleText>
          </DefaultTitleText>
        </View>
        <DefaultBodyText>Good luck!</DefaultBodyText>
        <View style={styles.countdownContainer}>
          <DefaultBodyText style={styles.countdownText}>
            Your game starts in{" "}
          </DefaultBodyText>
          <CountDown
            until={10}
            onFinish={() => alert("hello")}
            size={25}
            timeToShow={["S"]}
            timeLabels={{ s: null }}
            digitStyle={{ backgroundColor: Color.danger }}
            digitTxtStyle={{ color: Color.accent }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.primary,
  },
  leftContainer: {
    flex: 1,
    alignItems: "center",
  },
  numberContainer: {
    flex: 0.7,
    justifyContent: "center",
    alignItems: "center",
  },
  matchTitleText: {
    fontSize: RFPercentage(6),
  },
  lineContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  rightContainer: {
    flex: 1,
    alignItems: "center",
  },
  levelContainer: {
    height: verticalScale(150),
    width: scale(250),
    flexDirection: "row",
    justifyContent: "space-around",
  },
  countdownContainer: {
    height: verticalScale(100),
    width: scale(250),
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  countdownText: {
    fontSize: RFPercentage(3),
  },
  countdownNumber: {
    fontSize: RFPercentage(8),
  },
});

export default BeforeGameScreen;
