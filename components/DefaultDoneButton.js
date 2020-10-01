import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { MaterialIcons } from "@expo/vector-icons";

import Color from "../constants/colors";

const DefaultDoneButton = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{ ...styles.button, ...props.style }}
      activeOpacity={0.8}
      id={props.id}
    >
      <View>
        <MaterialIcons name="done" size={50} color={Color.done} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    paddingVertical: 10,
    paddingHorizontal: 30,
    // Shadow props iOS only
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.3,
    // Elevation props Android only
    elevation: 8,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 20,
    width: scale(130),
    height: verticalScale(50),
  },
  image: {
    color: Color.danger,
  },
});

export default DefaultDoneButton;
