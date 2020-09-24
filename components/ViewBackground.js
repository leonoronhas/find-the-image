import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, SafeAreaView } from "react-native";

import Color from "../constants/colors";

/*===============================================
= ViewBackground will replace the background setup
= color for the menu screens
=============================================== */
const ViewBackground = (props) => (
  <SafeAreaView style={{ ...styles.container, ...props.style }}>
    <StatusBar hidden />
    <View style={{...props.style}}>{props.children}</View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.primary,
  },
});

export default ViewBackground;
