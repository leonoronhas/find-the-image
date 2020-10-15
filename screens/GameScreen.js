import React, { useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { RFPercentage } from "react-native-responsive-fontsize";

import GameHeader from "../components/GameHeader";
import DefaultBodyText from "../components/DefaultBodyText";
import DefaultTitleText from "../components/DefaultTitleText";
import Color from "../constants/colors";
import Divider from "../components/Divider";
import DefaultButton from "../components/DefaultButton";

import { getNumberArray } from "../data/number";
import { getChosenNumber } from "../data/chosenNumber";
import { getDifficultyOption } from "../data/difficultyOption";
import { getOption } from "../data/categoryOption";

import Modal from "react-native-modal";

const GameScreen = ({ navigation }) => {
  const [category, setCategory] = useState(getOption());
  const [difficulty, setDifficulty] = useState(getDifficultyOption());
  const [chosenNumber, setChosenNumber] = useState(getChosenNumber());
  const [selected, setSelected] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const generateGameOptions = () => {
    const numbers = getNumberArray(category, difficulty, chosenNumber);

    return numbers.map((option, i) => {
      return (
        <TouchableOpacity
          style={styles.gameOptionContainer}
          key={i}
          activeOpacity={0.8}
          onPress={() => {
            if (numbers[i] === chosenNumber) {
              toggleModal();
            } else {
              console.log("wrong one");
            }
            // EventRegister.emit("setSelected", option);
          }}
        >
          <DefaultBodyText style={styles.optionText}>{option}</DefaultBodyText>
        </TouchableOpacity>
      );
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <View style={styles.gameHeaderContainer}>
        <GameHeader
          onPress={() => navigation.push("HomeScreen")}
          onPressEye={() => {}}
          modal={() => isModalVisible}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          <Modal isVisible={isModalVisible} style={styles.modal}>
            <View
              style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
            >
              <View style={styles.leftContainer}>
                <View style={{ flex: 1, alignItems: "flex-start" }}>
                  <DefaultTitleText style={styles.congratsText}>
                    Congrats!
                  </DefaultTitleText>
                  <DefaultBodyText style={styles.foundImageText}>
                    You have found the correct number!
                  </DefaultBodyText>
                </View>
                <View style={styles.results}>
                  <DefaultBodyText style={styles.textResults}>
                    RECORD: 2 SECONDS
                  </DefaultBodyText>
                  <DefaultBodyText style={styles.textResults}>
                    TIME SPENT: 5 SECONDS
                  </DefaultBodyText>
                </View>
              </View>
              <Divider />
              <View style={styles.rightContainer}>
                <View style={{ flex: 1, alignItems: "flex-start" }}>
                  <DefaultTitleText style={styles.levelText}>
                    Level 1 Completed
                  </DefaultTitleText>
                </View>
                <View style={styles.levelButtonContainer}>
                  <DefaultButton>
                    <DefaultBodyText style={styles.levelButtonText}>
                      LEVEL 2
                    </DefaultBodyText>
                  </DefaultButton>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => navigation.push("HomeScreen")}
                  >
                    <DefaultBodyText style={styles.returnToHomeText}>
                      RETURN TO HOME INSTEAD
                    </DefaultBodyText>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
          {generateGameOptions()}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Color.primary,
  },
  gameHeaderContainer: {
    justifyContent: "flex-start",
    backgroundColor: Color.accent,
    width: "100%",
    height: verticalScale(40),
    marginTop: 0,
  },
  gameOptionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: verticalScale(60),
    width: scale(80),
    borderRadius: 10,
    backgroundColor: Color.warning,
    margin: 2,
  },
  optionText: {
    fontSize: RFPercentage(2),
  },
  modal: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Color.done,
    borderRadius: 20,
  },
  leftContainer: {
    height: verticalScale(300),
    width: scale(240),
    alignItems: "center",
    justifyContent: "space-around",
  },
  congratsText: {
    fontSize: RFPercentage(7),
  },
  foundImageText: {
    fontSize: RFPercentage(2),
  },
  results: {
    height: verticalScale(120),
    width: scale(210),
    alignItems: "flex-start",
    justifyContent: "space-evenly",
  },
  textResults: {
    fontSize: RFPercentage(3),
    color: "white",
  },
  rightContainer: {
    height: verticalScale(300),
    width: scale(240),
    alignItems: "center",
    justifyContent: "space-between",
  },
  levelText: {
    fontSize: RFPercentage(9),
  },
  levelButtonContainer: {
    height: verticalScale(120),
    width: scale(230),
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  levelButtonText: {
    color: Color.warning,
    fontSize: RFPercentage(3),
  },
  returnToHomeText: {
    fontSize: RFPercentage(2),
  },
});

export default GameScreen;
