import React, { useRef } from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";

import NewGameScreen from "../screens/NewGameScreen";
import CategoryScreen from "../screens/CategoryScreen";
import DifficultyScreen from "../screens/DifficultyScreen";
import BeforeGameScreen from '../screens/BeforeGameScreen';
import HomeScreen from "../screens/HomeScreen";

const NewGameStack = createStackNavigator();

const NewGameStackNavigator = () => {
  const navigationRef = useRef(null);

  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
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
        </NewGameStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default NewGameStackNavigator;
