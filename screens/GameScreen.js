import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { RFPercentage } from "react-native-responsive-fontsize";

import DefaultBodyText from "../components/DefaultBodyText";
import Color from "../constants/colors";

const GameScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.primary,
  },
});

export default GameScreen;
