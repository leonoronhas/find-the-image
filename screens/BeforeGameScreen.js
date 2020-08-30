import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

import Color from "../constants/colors";
import ViewBackground from "../components/ViewBackground";
import DefaultBodyText from "../components/DefaultBodyText";

const BeforeGameScreen = ({params}) => {
    return (
<ViewBackground>
      <StatusBar hidden />
      <View style={styles.container}>
        
      </View>
    </ViewBackground>
    );
}

const styles = StyleSheet.create({

});

export default BeforeGameScreen;