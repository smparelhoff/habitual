import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator,
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HabitScreen from "../screens/HabitScreen";
import CreateHabitScreen from "../screens/CreateHabitScreen";
import HabitOverviewScreen from "../screens/HabitOverviewScreen";

const HabitStack = createStackNavigator(
  {
    Habits: HabitScreen,
    CreateHabit: CreateHabitScreen
  },
  { initialRouteName: "Habits" }
);

HabitStack.navigationOptions = {
  tabBarLabel: "habits",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-grid" : "md-grid"}
    />
  )
};

const NewHabitStack = createStackNavigator(
  {
    NewHabit: CreateHabitScreen
  },
  { initialRouteName: "NewHabit" }
);

NewHabitStack.navigationOptions = {
  tabBarLabel: "create",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? "ios-add-circle-outline"
          : "md-add-circle-outline"
      }
    />
  )
};

const HabitOverviewStack = createStackNavigator({
  Overview: HabitOverviewScreen
});

HabitOverviewStack.navigationOptions = {
  tabBarLabel: "topview",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-stats" : "md-stats"}
    />
  )
};

export default createBottomTabNavigator({
  HabitStack,
  NewHabitStack,
  HabitOverviewStack
});
