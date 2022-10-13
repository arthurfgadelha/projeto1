import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./Screens/HomeScreen";
import EmailScreen from "./Screens/EmailScreen";

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Email'}}/>
          <Stack.Screen name="EmailScreen" component={EmailScreen} options={{ title: 'conteudo Email'}}/>
          </Stack.Navigator>
  </NavigationContainer>
  );
}