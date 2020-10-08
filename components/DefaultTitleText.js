import React from "react";
import { Text, StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import Color from "../constants/colors";

/*===============================================
= DefaultTitleText will replace the <Text> with the applied
= custom fonts for all Title texts
=============================================== */
const DefaultTitleText = (props) => (
  <Text style={{ ...styles.body, ...props.style }} allowFontScaling={false}>
    {props.children}
  </Text>
);

const styles = StyleSheet.create({
  body: {
    fontFamily: "mouseMemoirs",
    fontSize: RFPercentage(10),
    textAlign: "center",
    color: Color.accent,
  },
});

export default DefaultTitleText;
