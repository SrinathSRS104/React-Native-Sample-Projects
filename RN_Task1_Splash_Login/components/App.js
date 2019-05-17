/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {createAppContainer,createBottomTabNavigator} from 'react-navigation'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import Home from './Home'
import User from './User'
import About from './About'
import Team from './Team'
import Trend from './Trend'
import SplashScreen from './SplashScreen'


const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Icon;
  let iconName;
  if (routeName === 'Home') {
    iconName = `home`;
  } else if (routeName === 'User') {
    iconName = `human-handsup`;
  } else if (routeName === 'Team') {
      iconName = `comment-account-outline`;
  } else if (routeName === 'Trend') {
      iconName = `trending-up`;
  } else if (routeName === 'About') {
      iconName = `details`;
  }

  return <IconComponent name={iconName} size={24} color={tintColor} />;
};


class App extends Component {

  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }


  render() {
    return (
      <SplashScreen />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});


const AppStackNavigator = createBottomTabNavigator(
  {
      Home: Home,
      User: User,
      Team: Team,
      Trend: Trend,
      About: About,
  },
  {
      initialRouteName: 'Home',

      defaultNavigationOptions: ({ navigation }) => ({
          tabBarIcon: ({ focused, tintColor }) =>
            getTabBarIcon(navigation, focused, tintColor),
      }),
      tabBarOptions: {
          showLabel: false,
          activeTintColor: '#5D6D7E',
          inactiveTintColor: '#FFF',
          style: {
            backgroundColor: '#3498DB',
            height : 45
        },
      },
  })

export default createAppContainer(AppStackNavigator);
