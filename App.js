import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./Screens/HomeScreen";

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Email'}}/>
          </Stack.Navigator>
  </NavigationContainer>
  );
}