import React, { useRef } from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

import GameScreen from "../screens/GameScreen";
import HomeScreen from "../screens/HomeScreen";

const GameStack = createStackNavigator();

const GameStackNavigator = () => {

  return (
    <SafeAreaProvider>
        <GameStack.Navigator>
          <GameStack.Screen
            name="GameScreen"
            component={GameScreen}
            options={{
              headerShown: false,
              ...TransitionPresets.ModalTransition,
            }}
          />
          <GameStack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              headerShown: false,
              ...TransitionPresets.ModalTransition,
            }}
          />
        </GameStack.Navigator>
    </SafeAreaProvider>
  );
};

export default GameStackNavigator;
