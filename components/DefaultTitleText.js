import React from "react";
import { Text, StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

/*===============================================
= DefaultTitleText will replace the <Text> with the applied
= custom fonts for all Title texts
=============================================== */
const DefaultTitleText = (props) => (
  <Text style={{ ...styles.body, ...props.style }}>{props.children}</Text>
);

const styles = StyleSheet.create({
  body: {
    fontFamily: "mouseMemoirs",
    fontSize: RFPercentage(10),
    textAlign: "center",
    color: "white",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1,
    textShadowColor: "#000",
  },
});

export default DefaultTitleText;
