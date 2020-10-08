import React, { useRef } from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

import GetStartedScreen from "../screens/GetStartedScreen";
import TutorialScreen from "../screens/TutorialScreen";
import HomeScreen from "../screens/HomeScreen";

const GetStartedStack = createStackNavigator();

const GetStartedStackNavigator = () => {
  return (
    <SafeAreaProvider>
      <GetStartedStack.Navigator>
        <GetStartedStack.Screen
          name="GetStarted"
          component={GetStartedScreen}
          options={{
            headerShown: false,
            ...TransitionPresets.ModalTransition,
          }}
        />
        <GetStartedStack.Screen
          name="Tutorial"
          component={TutorialScreen}
          options={{
            headerShown: false,
            ...TransitionPresets.ModalTransition,
          }}
        />
        <GetStartedStack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: false,
            ...TransitionPresets.ModalTransition,
          }}
        />
      </GetStartedStack.Navigator>
    </SafeAreaProvider>
  );
};

export default GetStartedStackNavigator;
