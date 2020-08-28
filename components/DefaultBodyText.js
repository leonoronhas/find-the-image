import React from "react";
import { Text, StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

/*===============================================
= DefaultBodyText will replace the <Text> with the applied
= custom fonts for all body texts
=============================================== */
const DefaultBodyText = (props) => (
  <Text style={{ ...styles.body, ...props.style }}>{props.children}</Text>
);

const styles = StyleSheet.create({
  body: {
    fontFamily: "mouseMemoirs",
    fontSize: RFPercentage(5),
    textAlign: "center",
    color: "white",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1,
    textShadowColor: "#000",
  },
});

export default DefaultBodyText;
