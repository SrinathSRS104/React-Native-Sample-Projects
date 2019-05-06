import React, { Component } from "react";

import {createAppContainer,createBottomTabNavigator} from 'react-navigation'

import Cart from './components/Cart'
import HomeScreen from './components/HomeScreen'
import Movies from './components/Movies'
import TVSeries from './components/TVSeries'
import Icon from "react-native-vector-icons/MaterialIcons";


const getTabBarIcon = (navigation, focused, tintColor) => {
    const { routeName } = navigation.state;
    let IconComponent = Icon;
    let iconName;
    if (routeName === 'Home') {
      iconName = `home`;
    } else if (routeName === 'Cart') {
      iconName = `shopping-cart`;
    } else if (routeName === 'Movies') {
        iconName = `local-movies`;
    } else if (routeName === 'TVSeries') {
        iconName = `tv`;
    }
  
    // You can return any component that you like here!
    return <IconComponent name={iconName} size={25} color={tintColor} />;
  };


class ShoppingCart extends Component {
    render() {
        return (
                <AppStackNavigator/>
        );
    }
}


const AppStackNavigator = createBottomTabNavigator(
    {
        Home: HomeScreen,
        Movies: Movies,
        TVSeries: TVSeries,
        Cart: Cart
    },
    {
        initialRouteName: 'Home',

        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) =>
              getTabBarIcon(navigation, focused, tintColor),
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    })

export default createAppContainer(AppStackNavigator);

