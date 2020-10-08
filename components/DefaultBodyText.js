import React from "react";
import { Text, StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

/*===============================================
= DefaultBodyText will replace the <Text> with the applied
= custom fonts for all body texts
=============================================== */
const DefaultBodyText = (props) => (
  <Text style={{ ...styles.body, ...props.style }} allowFontScaling={false}>
    {props.children}
  </Text>
);

const styles = StyleSheet.create({
  body: {
    fontFamily: "openSans",
    fontSize: RFPercentage(4),
    textAlign: "center",
    color: "white",
  },
});

export default DefaultBodyText;
