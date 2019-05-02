import React, { Component } from 'react';

import { StyleSheet, Text, View , Button} from 'react-native';

import * as Progress from 'react-native-progress';
import { createStackNavigator, createAppContainer } from "react-navigation";
import DropdownMenu from 'react-native-dropdown-menu';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 20,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  circles: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progress: {
    margin: 10,
  },
  desc :{
    flex: 1,
    justifyContent : "center",
    alignItems : "center"
  }
});


class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>

        <View style={{flex:1}}>
          <Text style={{fontSize:30,paddingTop:10}}>Home Screen</Text>
        </View>

        <View style={{flex:1}}>
          <Button
           title="Go to Progress Screen"
            onPress={() => this.props.navigation.navigate('Progress')}
          />
        </View>

        <View style={{flex:1}}>
          <Button
            title="Go to DropDown Screen"
            onPress={() => this.props.navigation.navigate('Drop')}/>
        </View>

      </View>
    );
  } 
}

class ProgressScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      progress: 0,
      indeterminate: true,
    };
  }

  componentDidMount() {
    this.animate();
  }

  animate() {
    let progress = 0;
    this.setState({ progress });
    setTimeout(() => {
      this.setState({ indeterminate: false });
      setInterval(() => {
        progress += Math.random() / 5;
        if (progress > 1) {
          progress = 1;
        }
        this.setState({ progress });
      }, 500);
    }, 1500);
  }

  render() {
    return (
      <View style={styles.container}>
        
        <View style={{flex:1}}>
          <Progress.Bar
           style={styles.progress}
           progress={this.state.progress}
           indeterminate={this.state.indeterminate}
          />
        </View>
        <View style={{flex:1}}>
          <Button
            title="Go to DropDown Screen"
            onPress={() => this.props.navigation.navigate('Drop')}
          />
        </View>
        <View style={{flex:1}}>
          <Progress.Circle
            style={styles.progress}
            progress={this.state.progress}
            indeterminate={this.state.indeterminate}
          />
        </View>
      </View>
    );
  }
}

class DropDownScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  render() {
    var data = [["Infinity War", "Thor Rhagnorak", "End Game", "Civil War","Age of Ultron"]];
    return (
      <View style={{flex: 1}}>
        <View style={{height: 64}} />

        <DropdownMenu
          style={{flex: 1}}
          bgColor={'white'}
          tintColor={'#666666'}
          activityTintColor={'green'}
          handler={(selection, row) => this.setState({text: data[selection][row]})}
          data={data}
        >

          <View style={styles.desc}>
            <Text style={{fontSize:18}}>
              {this.state.text} is the best marvel movie of all time.
            </Text>
          </View>

        </DropdownMenu>
      </View>
    );
  }
  } 


const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Progress : ProgressScreen,
    Drop : DropDownScreen
  },
  {
    initialRouteName: "Home",
    //transitionConfig: () => fromLeft(),
  }
);

export default createAppContainer(AppNavigator);