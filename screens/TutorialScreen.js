import React from "react";
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";

import Color from "../constants/colors";
import DefaultTitleText from "../components/DefaultTitleText";
import DefaultButton from "../components/DefaultButton";
import { RFPercentage } from "react-native-responsive-fontsize";
import { scale, verticalScale } from "react-native-size-matters";
import Swiper from "react-native-swiper";

const TutorialScreen = () => {
  return (
    <Swiper
      style={styles.wrapper}
      dotColor="grey"
      activeDotColor="white"
      loop={false}
    >
      <View style={styles.slide1}>
        <StatusBar hidden />
        <View style={styles.title}>
          <DefaultTitleText style={{ fontSize: RFPercentage(7) }}>
            Choose a number category!
          </DefaultTitleText>
        </View>
        <View style={styles.buttonContainer}>
          <DefaultButton style={{ marginBottom: 30 }}>
            <Text style={styles.buttonText}>Roman</Text>
          </DefaultButton>
          <DefaultButton>
            <Text style={styles.buttonText}>Decimals</Text>
          </DefaultButton>
          <DefaultButton>
            <Text style={styles.buttonText}>Binary</Text>
          </DefaultButton>
          <DefaultButton>
            <Text style={styles.buttonText}>Hexadecimal</Text>
          </DefaultButton>
          <DefaultButton>
            <Text style={styles.buttonText}>Percent</Text>
          </DefaultButton>
          <DefaultButton>
            <Text style={styles.buttonText}>More...</Text>
          </DefaultButton>
        </View>
      </View>
      <View style={styles.slide2}>
        <StatusBar hidden />
        <View style={styles.title2}>
          <DefaultTitleText style={{ fontSize: RFPercentage(7) }}>
            Choose your difficulty!
          </DefaultTitleText>
        </View>
        <View style={styles.buttonContainer2}>
          <DefaultButton style={styles.difficultyContainer}>
            <Text style={styles.buttonText2Title}>EASY</Text>
            {"              "}
            <Text style={styles.buttonText2}>30 SECONDS</Text>
            {"              "}
            <Text style={styles.buttonText2}>40 NUMBERS</Text>
          </DefaultButton>
          <DefaultButton style={styles.difficultyContainer}>
            <Text style={styles.buttonText3Title}>MEDIUM</Text>
            {"              "}
            <Text style={styles.buttonText3}>30 SECONDS</Text>
            {"              "}
            <Text style={styles.buttonText3}>60 NUMBERS</Text>
          </DefaultButton>
          <DefaultButton style={styles.difficultyContainer}>
            <Text style={styles.buttonText4Title}>HARD</Text>
            {"              "}
            <Text style={styles.buttonText4}>20 SECONDS</Text>
            {"              "}
            <Text style={styles.buttonText4}>80 NUMBERS</Text>
          </DefaultButton>
        </View>
      </View>
      <View style={styles.slide3}>
        <View style={styles.title3}>
          <DefaultTitleText style={{ fontSize: RFPercentage(7) }}>
            Match the number before time runs out!
          </DefaultTitleText>
        </View>
        <View style={styles.readyContainer}>
          <DefaultButton>I'M READY!</DefaultButton>
        </View>
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.primary,
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.primary,
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.primary,
  },
  title: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  title2: {
    flex: 0.5,
    alignItems: "center",
  },
  title3: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  buttonContainer2: {
    width: "95%",
    height: verticalScale(180),
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  buttonText: {
    color: Color.warning,
  },
  buttonText2: {
    color: Color.done,
  },
  buttonText2Title: {
    color: Color.done,
    fontSize: RFPercentage(4),
  },
  buttonText3: {
    color: Color.warning,
  },
  buttonText3Title: {
    color: Color.warning,
    fontSize: RFPercentage(4),
  },
  buttonText4: {
    color: Color.danger,
  },
  buttonText4Title: {
    color: Color.danger,
    fontSize: RFPercentage(4),
  },
  difficultyContainer: {
    width: scale(170),
    height: verticalScale(150),
    justifyContent: "center",
    alignItems: "center",
  },
  readyContainer:{
      flex: 1,
  }
});

export default TutorialScreen;
