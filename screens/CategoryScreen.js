import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView, StatusBar, Text } from "react-native";
import { scale } from "react-native-size-matters";

import Color from "../constants/colors";
import DefaultTitleText from "../components/DefaultTitleText";
import DefaultButton from "../components/DefaultButton";

const CategoryScreen = ({ navigation }) => {
  const [categoryOption, setCategoryOption] = useState("random");

  const handleOption = (category) => {
    setCategoryOption(category);
    console.log(categoryOption);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <View style={styles.text}>
        <DefaultTitleText>Choose category:</DefaultTitleText>
      </View>
      <View style={styles.categoryContainer}>
        <DefaultButton style={{ marginVertical: 10 }}>
          <Text style={styles.buttonTextColor}>ROMAN</Text>
        </DefaultButton>
        <DefaultButton>
          <Text style={styles.buttonTextColor}>DECIMAL</Text>
        </DefaultButton>
        <DefaultButton>
          <Text style={styles.buttonTextColor}>BINARY</Text>
        </DefaultButton>
        <DefaultButton>
          <Text style={styles.buttonTextColor}>HEXADECIMAL</Text>
        </DefaultButton>
        <DefaultButton>
          <Text style={styles.buttonTextColor}>PERCENT</Text>
        </DefaultButton>
        <DefaultButton>
          <Text style={styles.buttonTextColor}>CURRENCY</Text>
        </DefaultButton>
      </View>
      <View style={styles.doneContainer}>
        <DefaultButton style={styles.random}>RANDOM</DefaultButton>
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
  categoryContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 20,
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
  },
  inactiveOption: {
    backgroundColor: "white",
  },
});

export default CategoryScreen;
