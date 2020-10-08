import React from "react";
import { View, StyleSheet, SafeAreaView, StatusBar, Text } from "react-native";

import Color from "../constants/colors";
import DefaultTitleText from "../components/DefaultTitleText";
import DefaultButton from "../components/DefaultButton";

const HomeScreen = ({ navigation }) => (
  <SafeAreaView style={styles.container}>
    <StatusBar hidden />
    <View style={styles.title}>
      <DefaultTitleText>Match the Number!</DefaultTitleText>
    </View>
    <View style={styles.buttonContainer}>
      <DefaultButton style={styles.record}>
        <Text style={styles.buttonText}>RECORD</Text>
      </DefaultButton>
      <DefaultButton
        style={styles.newGame}
        onPress={() =>
          navigation.navigate("NewGameStack", { screen: "NewGameScreen" })
        }
      >
        <Text style={styles.buttonText}>NEW GAME</Text>
      </DefaultButton>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: Color.primary,
  },
  title: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 1.2,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  newGame: {
    backgroundColor: "white",
  },
  buttonText: {
    color: Color.warning,
  },
  buttonText2: {
    color: Color.accent,
  },
  record: {
    backgroundColor: Color.accent,
  },
});

export default HomeScreen;
