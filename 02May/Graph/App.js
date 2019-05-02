/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import { VictoryChart , VictoryBar , VictoryTheme , VictoryAxis,VictoryStack,VictoryTooltip} from  "victory-native";

const data2012 = [
  {quarter: 1, earnings: 13000,label : "sam"},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000}
];
const data2013 = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000}
];
const data2014 = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000}
];
const data2015 = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000}
];


export default class App extends Component {

  constructor() {
    super();
    this.state = {};
  }

  handleZoom(domain) {
    this.setState({selectedDomain: domain});
  }

  handleBrush(domain) {
    this.setState({zoomDomain: domain});
  }

  render() {
    return (
      <View style={styles.container}>
      
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        
        <VictoryChart
            width={350}
            theme={VictoryTheme.material}
            domainPadding={20}
            >
        
        <VictoryAxis
          tickValues={[1, 2, 3, 4]}
          tickFormat={["Q 1", "Q 2", "Q 3", "Q 4"]} />

        <VictoryAxis
          dependentAxis
          tickFormat={(x) => (`$${x / 1000}k`)} />

          <VictoryBar
          labelComponent={<VictoryTooltip/>}
            data={[
              {x: 1, y: 13000,label : "sam"},
              {x: 2, y: 16500},
              {x: 3, y: 14250},
              {x: 4, y: 19000}
            ]}
          />

        </VictoryChart>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
