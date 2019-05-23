
import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';

import { createDrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import Icon from "react-native-vector-icons/MaterialIcons";
import Icon2 from "react-native-vector-icons/AntDesign";

import Screen1 from './components/Screen1';
import Screen2 from './components/Screen2';
import Screen3 from './components/Screen3';
import Screen4 from './components/Screen4'
import Drawer from './components/Drawer';

class NavigationDrawerStructure extends Component {
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {

    const { navigation } = this.props

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
    headerLayoutPreset: 'center',
    navigationOptions: ({ navigation }) => ({
      title: 'Demo Screen 1',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerRight:  <TouchableOpacity onPress={() => navigation.navigate('Screen4')} ><Icon name="settings" style={{fontSize:25,padding:20,color:'white'}}/></TouchableOpacity>,
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
      headerRight:  <TouchableOpacity onPress={() => navigation.navigate('Screen4')} ><Icon name="settings" style={{fontSize:25,padding:20,color:'white'}}/></TouchableOpacity>,
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
      headerRight: <TouchableOpacity onPress={() => navigation.navigate('Screen4')} ><Icon name="settings" style={{fontSize:25,padding:20,color:'white'}}/></TouchableOpacity> ,
      headerStyle: {
        backgroundColor: '#D959A5',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Screen4_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Fourth: {
    screen: Screen4,
    navigationOptions: ({ navigation }) => ({
      title: 'Demo Screen 4',
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
    Screen4 : Screen4_StackNavigator
},
{
    contentComponent : Drawer,
});
 
export default createAppContainer(DrawerNavigatorExample);