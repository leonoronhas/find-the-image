import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

import Color from "../constants/colors";
import DefaultTitleText from "../components/DefaultTitleText";
import DefaultButton from "../components/DefaultButton";

const GetStartedScreen = ({ params }) => (
  <SafeAreaView style={styles.container}>
        <View style={styles.title}>
          <DefaultTitleText>Match the Number!</DefaultTitleText>
        </View>
      <View style={styles.buttonContainer}>
        <DefaultButton style={styles.skip}>SKIP TUTORIAL</DefaultButton>
        <DefaultButton>GET STARTED!</DefaultButton>
      </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Color.primary
  },
  title: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {    
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: 'center',
  },
  skip:{
    backgroundColor: Color.accent
  }
});

export default GetStartedScreen;
