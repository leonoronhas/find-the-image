import React from "react";
import { View, StyleSheet } from "react-native";

import Color from "../constants/colors";

/*===============================================
= DefaultTitleText will replace the <Text> with the applied
= custom fonts for all Title texts
=============================================== */
const ViewBackground = (props) => (
  <View style={{ ...styles.container, ...props.style }}>
    <View style={{ ...styles.body, ...props.style }}>{props.children}</View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.primary,
  },
  body: {
    flex: 1,
    backgroundColor: Color.accent,
    margin: 10,
    borderRadius: 20,
    // Shadow props iOS only
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.3,
    // Elevation props Android only
    elevation: 8,
  },
});

export default ViewBackground;
