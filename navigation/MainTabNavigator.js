import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HabitScreen from "../screens/HabitScreen";
import CreateHabitScreen from '../screens/CreateHabitScreen'
import SettingsScreen from "../screens/SettingsScreen";

// const HomeStack = createStackNavigator({
//   Home: HomeScreen,
//   Habits: HabitScreen,
//   CreateHabit: CreateHabitScreen
// }, {initialRouteName: "Home"});

// HomeStack.navigationOptions = {
//   tabBarLabel: "Home",
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === "ios" ? "ios-home" : "md-home"}
//     />
//   )
// };

const HabitStack = createStackNavigator({
  Habits: HabitScreen,
  CreateHabit: CreateHabitScreen
}, {initialRouteName: "Habits"});

HabitStack.navigationOptions = {
  tabBarLabel: "habits",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-grid" : "md-grid"}
    />
  )
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen
});

SettingsStack.navigationOptions = {
  tabBarLabel: "Settings",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-options" : "md-options"}
    />
  )
};

export default createBottomTabNavigator({
  // HomeStack,
  HabitStack,
  SettingsStack
});
