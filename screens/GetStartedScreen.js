import React from "react";
import { View, StyleSheet, SafeAreaView, StatusBar } from "react-native";

import Color from "../constants/colors";
import DefaultTitleText from "../components/DefaultTitleText";
import DefaultButton from "../components/DefaultButton";

const GetStartedScreen = ({ navigation }) => (
  <SafeAreaView style={styles.container}>
    <StatusBar hidden />
    <View style={styles.title}>
      <DefaultTitleText>Match the Number!</DefaultTitleText>
    </View>
    <View style={styles.buttonContainer}>
      <DefaultButton
        style={styles.skip}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        SKIP TUTORIAL
      </DefaultButton>
      <DefaultButton onPress={() => navigation.navigate("Tutorial")}>
        GET STARTED!
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
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  skip: {
    backgroundColor: Color.accent,
  },
});

export default GetStartedScreen;
