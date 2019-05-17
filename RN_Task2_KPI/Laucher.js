/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet} from 'react-native';

import SplashScreen from './components/SplashScreen'
import DrawerNavigatorExample from './App'
//import Screen1 from './components/Screen1'


export default class Launcher extends Component {

  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }

  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('DrawerNavigatorExample') },
        1500
      )
    );
  }

  async componentDidMount() {
    const data = await this.performTimeConsumingTask();
  
    if (data !== null) {
      this.setState({ isLoading: false });
    }
  }
  render() {
    if (this.state.isLoading) {
        return <SplashScreen />;
    }    
    return (
      <DrawerNavigatorExample />
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