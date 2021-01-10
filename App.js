import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, Linking, StyleSheet, Text, View, Image } from "react-native";
import Homepage from "./src/components/Homepage/Homepage";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import Initial from "./src/components/App/Initial";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator()

export default function App(props) {

  console.log(Stack);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="App" component={Initial} options={{headerShown: false}} />
        <Stack.Screen name="Homepage" component={Homepage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  containerTMDb: {
    top: 300,
    paddingLeft: 20,
    paddingRight: 20,
  },
  tmdbLogo: {
    marginTop: 400,
    width: 85,
    height: 40,
    left: 100,
    bottom: 10,
  },
  tmdbDisclaimer: {
    fontSize: 18,
    fontWeight: "700",
  },
});
