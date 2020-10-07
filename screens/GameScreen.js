import React, { useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { RFPercentage } from "react-native-responsive-fontsize";

import GameHeader from '../components/GameHeader';
import DefaultBodyText from "../components/DefaultBodyText";
import DefaultButton from "../components/DefaultButton";
import Color from "../constants/colors";

const GameScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <View style={styles.gameHeaderContainer}>
        <GameHeader />
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
  gameHeaderContainer: {
    justifyContent: "flex-start",
    backgroundColor: Color.accent,
    width: "100%",
    height: verticalScale(40),
    marginTop: 0,
  },
  
});

export default GameScreen;
