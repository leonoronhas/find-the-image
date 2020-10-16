import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { RFPercentage } from "react-native-responsive-fontsize";
import { FontAwesome5 } from "@expo/vector-icons";
import CountDown from "react-native-countdown-component";
import Modal from "react-native-modal";

import { getDifficultyOption, timeHandler } from "../data/difficultyOption";
import { getOption } from "../data/categoryOption";

import Color from "../constants/colors";
import DefaultBodyText from "../components/DefaultBodyText";
import DefaultTitleText from "../components/DefaultTitleText";
import DefaultButton from "../components/DefaultButton";
import Divider from "../components/Divider";

const GameHeader = (props) => {
  const [difficulty, setDifficulty] = useState(getDifficultyOption());
  const [category, setCategory] = useState(getOption());
  const [time, setTime] = useState(timeHandler);
  const [modalVisible, setModalVisible] = useState(false);

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
          onFinish={() => {
            if (props.greenModal) {
              setModalVisible(false);
            } else {
              setModalVisible(true);
            }
          }}
          size={20}
          timeToShow={["S"]}
          timeLabels={{ s: null }}
          digitStyle={{ backgroundColor: "transparent" }}
          digitTxtStyle={{ color: Color.done }}
        />
      </View>
      <Modal isVisible={modalVisible} style={styles.modal}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View style={styles.leftContainer}>
            <View style={styles.soCloseContainer}>
              <DefaultTitleText style={styles.soCloseText}>
                So Close!
              </DefaultTitleText>
              <DefaultBodyText style={styles.ranOutTimeText}>
                But you ran out of time...
              </DefaultBodyText>
            </View>
            <View style={styles.results}>
              <DefaultBodyText style={styles.textResults}>
                RECORD: 2 SECONDS
              </DefaultBodyText>
              <DefaultBodyText style={styles.textResults}>
                TIME SPENT:{" "}
                <DefaultBodyText style={styles.textResults}>
                  {time}
                </DefaultBodyText>{" "}
                seconds
              </DefaultBodyText>
            </View>
          </View>
          <Divider />
          <View style={styles.rightContainer}>
            <View style={styles.gameOverContainer}>
              <DefaultTitleText style={styles.gameOverText}>
                GAME OVER
              </DefaultTitleText>
            </View>
            <View style={styles.restartButtonContainer}>
              <DefaultButton
                onPress={() => {
                  setModalVisible(false);
                  props.beforeGame();
                }}
              >
                <DefaultBodyText style={styles.restartText}>
                  RESTART
                </DefaultBodyText>
              </DefaultButton>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  setModalVisible(false);
                  props.onPress();
                }}
              >
                <DefaultBodyText style={styles.returnToHomeText}>
                  RETURN TO HOME INSTEAD
                </DefaultBodyText>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
  modal: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Color.primary,
    borderRadius: 20,
  },
  leftContainer: {
    height: verticalScale(290),
    width: scale(270),
    alignItems: "center",
    justifyContent: "space-around",
  },
  soCloseContainer: {
    height: verticalScale(120),
    width: scale(260),
    alignItems: "flex-start",
  },
  soCloseText: {
    fontSize: RFPercentage(7),
  },
  ranOutTimeText: {
    fontSize: RFPercentage(2),
  },
  results: {
    height: verticalScale(120),
    width: scale(260),
    alignItems: "flex-start",
    justifyContent: "space-evenly",
  },
  textResults: {
    fontSize: RFPercentage(3),
    color: "white",
  },
  rightContainer: {
    height: verticalScale(290),
    width: scale(270),
    alignItems: "center",
    justifyContent: "space-between",
  },
  gameOverContainer: {
    height: verticalScale(150),
    width: scale(150),
    alignItems: "center",
  },
  gameOverText: {
    fontSize: RFPercentage(10),
  },
  restartButtonContainer: {
    height: verticalScale(120),
    width: scale(260),
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  restartText: {
    color: Color.warning,
    fontSize: RFPercentage(3),
  },
  returnToHomeText: {
    fontSize: RFPercentage(2),
  },
});

export default GameHeader;
