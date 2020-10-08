import React, { useState, useEffect } from "react";
import { View, StyleSheet, StatusBar, SafeAreaView, Alert } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { EventRegister } from "react-native-event-listeners";

import Color from "../constants/colors";
import DefaultBodyText from "../components/DefaultBodyText";

import DefaultButton from "../components/DefaultButton";
import { RFPercentage } from "react-native-responsive-fontsize";

import { getOption } from "../data/categoryOption";
import { getDifficultyOption } from "../data/difficultyOption";

const NewGameScreen = ({ navigation }) => {
  const [category, setCategory] = useState(getOption());
  const [difficulty, setDifficulty] = useState(getDifficultyOption());

  useEffect(() => {
    const myListener = EventRegister.addEventListener("setOption", (option) => {
      setCategory(option);
    });

    const myDifficultyListener = EventRegister.addEventListener(
      "setDifficultyOption",
      (option) => {
        setDifficulty(option);
      }
    );

    return () => {
      EventRegister.removeEventListener(myListener);
      EventRegister.removeEventListener(myDifficultyListener);
    };
  }, [category, difficulty]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <View style={styles.categoryContainer}>
        <View style={styles.options}>
          <DefaultBodyText style={styles.text}>
            CHOOSE CATEGORY:
          </DefaultBodyText>
          <DefaultButton onPress={() => navigation.navigate("CategoryScreen")}>
            {category ? category : "CATEGORY"}
          </DefaultButton>
        </View>
        <View style={styles.options}>
          <DefaultBodyText style={styles.text}>
            CHOOSE DIFFICULTY:
          </DefaultBodyText>
          <DefaultButton
            onPress={() => navigation.navigate("DifficultyScreen")}
          >
            {difficulty ? difficulty : "DIFFICULTY"}
          </DefaultButton>
        </View>
      </View>
      <View style={{ marginTop: 20 }}>
        <DefaultBodyText>ARE YOU READY?</DefaultBodyText>
      </View>
      <View style={styles.readyContainer}>
        <DefaultButton
          style={styles.home}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <DefaultBodyText style={styles.homeText}>HOME</DefaultBodyText>
        </DefaultButton>
        <DefaultButton
          style={styles.ready}
          onPress={() => {
            if (category === "" && difficulty === "") {
              Alert.alert(
                "Please choose a category and difficulty!",
                "That way you are setting yourself to success! 😉",
                [
                  {
                    text: "Not ready yet...",
                    onPress: () => {
                      navigation.navigate("NewGameScreen");
                    },
                    style: "cancel",
                  },
                  { text: "sounds good", style: "default" },
                ]
              );
            } else {
              navigation.push("BeforeGameScreen");
            }
          }}
        >
          I'M READY!
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
  categoryContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    height: verticalScale(160),
  },
  options: {
    alignItems: "center",
    justifyContent: "space-around",
    height: verticalScale(120),
  },
  text: {
    alignItems: "center",
    marginVertical: 20,
    color: Color.accent,
    fontFamily: "openSansBold",
  },
  readyContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
    width: "100%",
    height: verticalScale(160),
    justifyContent: "space-around",
  },
  ready: {
    backgroundColor: "white",
  },
  home: {
    width: scale(120),
    height: verticalScale(50),
    backgroundColor: Color.accent,
  },
  homeText: {
    color: Color.warning,
    fontSize: RFPercentage(2.5),
  },
});

export default NewGameScreen;
