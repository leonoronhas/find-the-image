import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  StyleSheet,
  SafeAreaView,
} from "react-native";

import Color from '../constants/colors';
import ViewBackground from '../components/ViewBackground';
import DefaultTitleText from "../components/DefaultTitleText";

const GetStartedScreen = ({ params }) => (
  <ViewBackground style={styles.container}>
    <StatusBar hidden />
    
    <View>
      <DefaultTitleText style={styles.text}>Find the Number!</DefaultTitleText>
    </View>
  </ViewBackground>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    padding: 10,
    resizeMode: "contain",
    justifyContent: "center",
  },
  text: {
    // Add here if needed
  },
});

export default GetStartedScreen;
