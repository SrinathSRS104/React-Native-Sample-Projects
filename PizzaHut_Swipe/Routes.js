import React, {Component} from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Dimensions } from "react-native";

import Home from "./components/BasicFlatList";
import Details from "./components/Details";
import Icon from "react-native-vector-icons/MaterialIcons";
import RF from "react-native-responsive-fontsize"

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Icon;
  let iconName;
  if (routeName === 'Home') {
    iconName = `restaurant-menu`;
  } else if (routeName === 'Details') {
    iconName = `local-pizza`;
  }

  // You can return any component that you like here!
  return <IconComponent name={iconName} size={RF(7)} color={tintColor}  />;
};

const AppNavigator = createBottomTabNavigator(
    
    {
      Home: Home,
      Details : Details
    },
    {
      initialRouteName: "Home",
      defaultNavigationOptions: ({ navigation }) => ({
          tabBarIcon: ({ focused, tintColor }) =>
          getTabBarIcon(navigation, focused, tintColor),
    }),
    tabBarOptions: {
      labelStyle: {
        fontSize: RF(3),
      },
      style: {
        height : Dimensions.get('window').height/9,
      },
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
    },
  }
);
  
export default createAppContainer(AppNavigator);