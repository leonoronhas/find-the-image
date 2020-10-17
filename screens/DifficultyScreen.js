import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView, StatusBar, Alert } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { RFPercentage } from "react-native-responsive-fontsize";
import { EventRegister } from "react-native-event-listeners";

import Color from "../constants/colors";
import DefaultTitleText from "../components/DefaultTitleText";
import DefaultBodyText from "../components/DefaultBodyText";
import DefaultButton from "../components/DefaultButton";
import DefaultDoneButton from "../components/DefaultDoneButton";

import { setDifficultyOption } from "../data/difficultyOption";

const DifficultyScreen = ({ navigation }) => {
  const [selected, setSelected] = useState("");

  const handleOption = (option) => {
    setSelected(option);
    setDifficultyOption(option);
    EventRegister.emit("setDifficultyOption", option);
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <View style={styles.textContainer}>
        <DefaultTitleText style={styles.text}>
          Choose difficulty:
        </DefaultTitleText>
      </View>
      <View style={styles.difficultyContainer}>
        <View style={styles.options}>
          <DefaultButton
            style={
              selected === "EASY" ? styles.activeStyle : styles.buttonOption
            }
            onPress={() => handleOption("EASY")}
          >
            <DefaultBodyText style={styles.difficultyEasyText}>
              EASY{"           "}
              <DefaultBodyText style={styles.difficultyEasyText2}>
                30 seconds {"           "}60 numbers
              </DefaultBodyText>
            </DefaultBodyText>
          </DefaultButton>
        </View>
        <View style={styles.options}>
          <DefaultButton
            style={
              selected === "MEDIUM" ? styles.activeStyle : styles.buttonOption
            }
            onPress={() => handleOption("MEDIUM")}
          >
            <DefaultBodyText style={styles.difficultyMediumText}>
              MEDIUM{"      "}
              <DefaultBodyText style={styles.difficultyMediumText2}>
                30 seconds {"      "}90 numbers
              </DefaultBodyText>
            </DefaultBodyText>
          </DefaultButton>
        </View>
        <View style={styles.options}>
          <DefaultButton
            style={
              selected === "HARD" ? styles.activeStyle : styles.buttonOption
            }
            onPress={() => handleOption("HARD")}
          >
            <DefaultBodyText style={styles.difficultyHardText}>
              HARD{"          "}
              <DefaultBodyText style={styles.difficultyHardText2}>
                20 seconds{"           "}120 numbers
              </DefaultBodyText>
            </DefaultBodyText>
          </DefaultButton>
        </View>
      </View>
      <View style={styles.doneContainer}>
        <DefaultDoneButton
          style={styles.done}
          onPress={() => {
            if (selected === "") {
              Alert.alert(
                "Please choose a difficulty!",
                "You can always change it later 😉",
                [
                  {
                    text: "Not ready yet...",
                    onPress: () => {
                      setSelected("");
                      setDifficultyOption("");
                      navigation.navigate("NewGameScreen");
                    },
                    style: "cancel",
                  },
                  { text: "sounds good", style: "default" },
                ]
              );
            } else {
              navigation.navigate("NewGameScreen");
            }
          }}
        ></DefaultDoneButton>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Color.primary,
  },
  difficultyContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 20,
    width: "100%",
  },
  options: {
    textAlign: "center",
    alignItems: "center",
    width: scale(150),
  },
  difficultyText: {
    fontSize: RFPercentage(3),
  },
  textContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  text: {
    fontSize: RFPercentage(8),
  },
  buttonOption: {
    width: scale(180),
    height: verticalScale(140),
    backgroundColor: "white",
  },
  activeStyle: {
    width: scale(190),
    height: verticalScale(150),
    backgroundColor: Color.accent,
  },
  difficultyEasyText: {
    fontSize: RFPercentage(4),
    color: Color.done,
  },
  difficultyEasyText2: {
    fontSize: RFPercentage(3),
    color: Color.done,
  },
  difficultyMediumText: {
    fontSize: RFPercentage(4),
    color: Color.warning,
  },
  difficultyMediumText2: {
    fontSize: RFPercentage(3),
    color: Color.warning,
  },
  difficultyHardText: {
    fontSize: RFPercentage(4),
    color: Color.danger,
  },
  difficultyHardText2: {
    fontSize: RFPercentage(3),
    color: Color.danger,
  },
  doneContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    marginVertical: 20,
  },
  done: {
    backgroundColor: "white",
    width: scale(120),
    height: verticalScale(50),
  },
});

export default DifficultyScreen;
