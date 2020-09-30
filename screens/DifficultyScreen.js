import React from "react";
import { View, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { RFPercentage } from "react-native-responsive-fontsize";

import Color from "../constants/colors";
import DefaultTitleText from "../components/DefaultTitleText";
import DefaultBodyText from "../components/DefaultBodyText";
import DefaultButton from "../components/DefaultButton";

const DifficultyScreen = ({ navigation }) => {
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
          <DefaultButton style={styles.buttonOption}>
            <DefaultBodyText style={styles.difficultyEasyText}>
              EASY{"      "}
              <DefaultBodyText style={styles.difficultyEasyText2}>
                30 seconds 40 numbers
              </DefaultBodyText>
            </DefaultBodyText>
          </DefaultButton>
        </View>
        <View style={styles.options}>
          <DefaultButton style={styles.buttonOption}>
            <DefaultBodyText style={styles.difficultyMediumText}>
              MEDIUM{"      "}
              <DefaultBodyText style={styles.difficultyMediumText2}>
                30 seconds 60 numbers
              </DefaultBodyText>
            </DefaultBodyText>
          </DefaultButton>
        </View>
        <View style={styles.options}>
          <DefaultButton style={styles.buttonOption}>
            <DefaultBodyText style={styles.difficultyHardText}>
              HARD{"      "}
              <DefaultBodyText style={styles.difficultyHardText2}>
                20 seconds 80 numbers
              </DefaultBodyText>
            </DefaultBodyText>
          </DefaultButton>
        </View>
      </View>
      <View style={styles.doneContainer}>
        <DefaultButton
          style={styles.done}
          onPress={() => navigation.navigate("NewGameScreen")}
        >
          DONE!
        </DefaultButton>
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
    width: scale(160),
    height: verticalScale(140),
    backgroundColor: "white",
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
