import React, { useRef } from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

import NewGameScreen from "../screens/NewGameScreen";
import CategoryScreen from "../screens/CategoryScreen";
import DifficultyScreen from "../screens/DifficultyScreen";
import BeforeGameScreen from "../screens/BeforeGameScreen";
import HomeScreen from "../screens/HomeScreen";

import GameStackNavigator from '../navigation/GameStackNavigator';

const NewGameStack = createStackNavigator();

const NewGameStackNavigator = () => {
  return (
    <SafeAreaProvider>
      <NewGameStack.Navigator>
        <NewGameStack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: false,
            ...TransitionPresets.ModalTransition,
          }}
        />
        <NewGameStack.Screen
          name="NewGameScreen"
          component={NewGameScreen}
          options={{
            headerShown: false,
            ...TransitionPresets.ModalTransition,
          }}
        />
        <NewGameStack.Screen
          name="CategoryScreen"
          component={CategoryScreen}
          options={{
            headerShown: false,
            ...TransitionPresets.ModalTransition,
          }}
        />
        <NewGameStack.Screen
          name="DifficultyScreen"
          component={DifficultyScreen}
          options={{
            headerShown: false,
            ...TransitionPresets.ModalTransition,
          }}
        />
        <NewGameStack.Screen
          name="BeforeGameScreen"
          component={BeforeGameScreen}
          options={{
            headerShown: false,
            ...TransitionPresets.ModalTransition,
          }}
        />
        {/* <NewGameStack.Screen
         name="GameStack"
         component={GameStackNavigator}
         options={{
           headerShown: false,
           ...TransitionPresets.ModalTransition,
         }}
        /> */}
      </NewGameStack.Navigator>
    </SafeAreaProvider>
  );
};

export default NewGameStackNavigator;
