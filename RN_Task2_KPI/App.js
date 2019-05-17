
import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

import { createDrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import Icon from "react-native-vector-icons/MaterialIcons";
import Icon2 from "react-native-vector-icons/AntDesign";

import Screen1 from './components/Screen1';
import Screen2 from './components/Screen2';
import Screen3 from './components/Screen3';
import Drawer from './components/Drawer';

const getIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Icon;
  let iconName;
  if (routeName === 'Screen1') {
    iconName = `headset-mic`;
  } else if (routeName === 'Screen2') {
    iconName = `call`;
  } else if (routeName === 'Screen3') {
      iconName = `group`;
  }
  return <IconComponent name={iconName} size={24} color={tintColor} />;
};

const getLabel = (navigation) => {
  const { routeName } = navigation.state;
  if (routeName === 'Screen1') {
    drLabel = "Live KPIs";
  } else if (routeName === 'Screen2') {
    drLabel = "Calls";
  } else if (routeName === 'Screen3') {
    drLabel = "Group";
  }
  return drLabel;
};

class NavigationDrawerStructure extends Component {
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Icon2 name="menuunfold" style={{fontSize:30,padding:20,color:'white'}}/>
        </TouchableOpacity>
      </View>
    );
  }
}
 
const FirstActivity_StackNavigator = createStackNavigator({
  //All the screen from the Screen1 will be indexed here
  First: {
    screen: Screen1,
    navigationOptions: ({ navigation }) => ({
      title: 'Demo Screen 1',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#D959A5',
      },
      headerTintColor: '#fff',
    }),
  },
});
 

const Screen2_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Second: {
    screen: Screen2,
    navigationOptions: ({ navigation }) => ({
      title: 'Demo Screen 2',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#D959A5',
      },
      headerTintColor: '#fff',
    }),
  },
});
 

const Screen3_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Third: {
    screen: Screen3,
    navigationOptions: ({ navigation }) => ({
      title: 'Demo Screen 3',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#D959A5',
      },
      headerTintColor: '#fff',
    }),
  },
});
 
const DrawerNavigatorExample = createDrawerNavigator({
  //Drawer Optons and indexing
    Screen1: FirstActivity_StackNavigator,
    Screen2: Screen2_StackNavigator,
    Screen3: Screen3_StackNavigator,
},
{
   // initialRouteName: 'Home',

    defaultNavigationOptions: ({ navigation }) => ({
      drawerLabel: getLabel(navigation),
      drawerIcon: ({ focused, tintColor }) =>
          getIcon(navigation, focused, tintColor),
    }),
    contentComponent : Drawer,
    drawerOptions: {
      showLabel: false,
      activeTintColor: '#5D6D7E',
      inactiveTintColor: '#FFF',
      style: {
        backgroundColor: '#3498DB',
        height : 45
    },
  }
});
 
export default createAppContainer(DrawerNavigatorExample);