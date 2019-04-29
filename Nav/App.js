import React from "react";
import { View, Text , Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { fromLeft } from 'react-navigation-transitions';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Second Screen"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Second Screen</Text>
        <Button
          title="Back to Home Screen"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details : DetailsScreen
  },
  {
    initialRouteName: "Home",
    transitionConfig: () => fromLeft(),
  }
);

export default createAppContainer(AppNavigator);