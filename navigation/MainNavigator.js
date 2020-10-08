import React, { useRef } from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";

import GetStartedStackNavigator from "../navigation/GetStartedStackNavigator";
import GameStackNavigator from "../navigation/GameStackNavigator";
import NewGameStackNavigator from "../navigation/NewGameStackNavigator";

const Main = createStackNavigator();

const MainNavigator = () => {
  const navigationRef = useRef(null);

  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <Main.Navigator>
          <Main.Screen
            name="GetStartedStack"
            component={GetStartedStackNavigator}
            options={{
              headerShown: false,
              ...TransitionPresets.ModalTransition,
            }}
          />
          <Main.Screen
            name="NewGameStack"
            component={NewGameStackNavigator}
            options={{
              headerShown: false,
              ...TransitionPresets.ModalTransition,
            }}
          />
          <Main.Screen
            name="GameStack"
            component={GameStackNavigator}
            options={{
              headerShown: false,
              ...TransitionPresets.ModalTransition,
            }}
          />
        </Main.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default MainNavigator;