import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

const Divider = (props) => (
  <View style={styles.lineContainer}>
    <Image
      source={require("../assets/images/divider.png")}
      style={styles.divider}
    />
  </View>
);

const styles = StyleSheet.create({
  divider: {
    height: verticalScale(250),
    width: scale(5),
  },
});

export default Divider;
