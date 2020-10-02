import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView, StatusBar, Text } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

import Color from "../constants/colors";
import DefaultTitleText from "../components/DefaultTitleText";
import DefaultButton from "../components/DefaultButton";
import DefaultDoneButton from "../components/DefaultDoneButton";

import {setOption } from "../data/categoryOption";

const CategoryScreen = ({ navigation }) => {
  const [selected, setSelected] = useState("");

  const handleOption = (option) => {
    setSelected(option);
    setOption(option);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <View style={styles.text}>
        <DefaultTitleText>Choose category:</DefaultTitleText>
      </View>
      <View style={styles.categoryContainer}>
        <DefaultButton
          style={
            selected === "Roman" ? styles.activeOption : styles.inactiveOption
          }
          onPress={() => {
            handleOption("Roman");
          }}
        >
          <Text style={styles.buttonTextColor}>ROMAN</Text>
        </DefaultButton>
        <DefaultButton
          style={
            selected === "Decimal" ? styles.activeOption : styles.inactiveOption
          }
          onPress={() => {
            handleOption("Decimal");
          }}
        >
          <Text style={styles.buttonTextColor}>DECIMAL</Text>
        </DefaultButton>
        <DefaultButton
          style={
            selected === "Binary" ? styles.activeOption : styles.inactiveOption
          }
          onPress={() => {
            handleOption("Binary");
          }}
        >
          <Text style={styles.buttonTextColor}>BINARY</Text>
        </DefaultButton>
        <DefaultButton
          style={
            selected === "Hexadecimal"
              ? styles.activeOption
              : styles.inactiveOption
          }
          onPress={() => {
            handleOption("Hexadecimal");
          }}
        >
          <Text style={styles.buttonTextColor}>HEXADECIMAL</Text>
        </DefaultButton>
        <DefaultButton
          style={
            selected === "Percent" ? styles.activeOption : styles.inactiveOption
          }
          onPress={() => {
            handleOption("Percent");
          }}
        >
          <Text style={styles.buttonTextColor}>PERCENT</Text>
        </DefaultButton>
        <DefaultButton
          style={
            selected === "Currency"
              ? styles.activeOption
              : styles.inactiveOption
          }
          onPress={() => {
            handleOption("Currency");
          }}
        >
          <Text style={styles.buttonTextColor}>CURRENCY</Text>
        </DefaultButton>
      </View>
      <View style={styles.doneContainer}>
        <DefaultButton style={styles.random}>RANDOM</DefaultButton>
        <DefaultDoneButton
          style={styles.done}
          onPress={() => navigation.navigate("NewGameScreen")}
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
  categoryContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    height: verticalScale(150),
  },
  options: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  text: {
    alignItems: "center",
    marginVertical: 20,
  },
  doneContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginVertical: 20,
    width: scale(500),
  },
  done: {
    backgroundColor: "white",
  },
  random: {
    backgroundColor: Color.accent,
  },
  buttonTextColor: {
    color: Color.warning,
  },
  activeOption: {
    backgroundColor: "#686C62",
    marginBottom: 20,
  },
  inactiveOption: {
    backgroundColor: "white",
    marginBottom: 20,
  },
});

export default CategoryScreen;
