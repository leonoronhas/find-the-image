import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { RFPercentage } from "react-native-responsive-fontsize";

import Color from "../constants/colors";
import ViewBackground from "../components/ViewBackground";
import DefaultBodyText from "../components/DefaultBodyText";
import DefaultTitleText from '../components/DefaultTitleText';

const BeforeGameScreen = ({ params }) => {
  return (
    <ViewBackground>
      <StatusBar hidden />
      <View style={styles.container}>
          <View style={styles.rightContainer}>
        <DefaultTitleText style={styles.matchTitleText}>
            Match this number!
        </DefaultTitleText>
        </View>
        <View style={styles.lineContainer}>

        </View>
        <View style={styles.leftContainer}>
        <DefaultBodyText>
            Good luck!
        </DefaultBodyText>
      </View>
      </View>
    </ViewBackground>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center"
    },
    rightContainer:{
        flex: 1,
        alignItems: "center"
    },
    matchTitleText: {
        fontSize: RFPercentage(6)
    },
    lineContainer:{
        flex: 1,
        alignItems: "center"
    },
    leftContainer:{
        flex: 1,
        alignItems: "center"
    },
});

export default BeforeGameScreen;
