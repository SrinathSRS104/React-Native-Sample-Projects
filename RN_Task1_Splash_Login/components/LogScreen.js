import React, { Component } from 'react';
import * as firebase from "firebase";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  Alert
} from 'react-native';

import { createStackNavigator, createAppContainer } from 'react-navigation'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon2 from "react-native-vector-icons/AntDesign";

import AppStackNavigator from './App'
import HeaderR from './headerR'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyABQ4s2PYCGd0WyLmafZ6numjPZA5Bb_L4",
    authDomain: "rnlog-1396c.firebaseapp.com",
    databaseURL: "https://rnlog-1396c.firebaseio.com",
    projectId: "rnlog-1396c",
    storageBucket: "rnlog-1396c.appspot.com",
    messagingSenderId: "846797933850",
    appId: "1:846797933850:web:cc828e4a65f750a0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  

/* class HeaderR extends Component {
    
  render() {
      return (
          <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
              <TouchableOpacity onPress={() => { this.props.navigate("Log") }}>
                  <Text>
                      <Icon style={{ fontSize: 26 }} name="bell-outline" />
                  </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                  <Text>
                      <Icon style={{ fontSize: 26 }} name="logout" />
                  </Text>
              </TouchableOpacity>
          </View>
      );
  }
} */

class LogScreen extends Component {

  constructor(props) {
    super(props);
    state = {
      email: '',
      password: '',
    }
  }

  
  SignUp =(email, password) => {
    if(email == '' || password == '')
    {
     Alert.alert("Please Enter All the Values.");
    }
    else {
        try {
          firebase.auth().createUserWithEmailAndPassword(email, password);
        } catch (error) {
          Alert.alert(error.toString(error));
        }
        };
    }

  SignIn = (email, password) => {
    try {
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then( () => this.props.navigation.navigate("Home", {email : email})) 
    } catch (error) {
      Alert.alert(error.toString(error));
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{marginBottom: 40}}>
          <Icon2 style={{color: '#00b5ec', fontSize:80}} name="chrome"/>
        </View>
        <View style={styles.inputContainer}>
          <Icon style={{ fontSize: 26, padding: 10 }} name="email" />
          <TextInput style={styles.inputs}
            placeholder="Email"
            keyboardType="email-address"
            onChangeText={(email) => this.setState({ email })} />
        </View>

        <View style={styles.inputContainer}>
          <Icon style={{ fontSize: 26, padding: 10 }} name="key" />
          <TextInput style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(password) => this.setState({ password })} />
        </View>

        <TouchableHighlight style={styles.loginButton} onPress={() => this.SignIn(this.state.email, this.state.password)}>
              <View  style={{flexDirection:'row'}}>
                <Text style={{fontSize:18}}>LogIn</Text>
                <Text>   </Text>
                <Text><Icon2 style={{ fontSize: 26, padding: 10 }} name="login" /></Text>
              </View>
        </TouchableHighlight>

        <TouchableHighlight disabled={true} style={styles.loginButton} onPress={() => this.SignIn(this.state.email, this.state.password)}>
            <View style={{flexDirection:'row'}}>
              <Text style={{fontSize:18}}>Register</Text>
              <Text><Icon2 style={{ fontSize: 26, padding: 10 }} name="right" /></Text>
            </View>
        </TouchableHighlight>

      </View>
    );
  }
}


const ASN = createStackNavigator(
  {
    Log: {
      screen: LogScreen,
      navigationOptions: {
        header: null,
      }
    },

    Home: {
      screen: AppStackNavigator,
      navigationOptions: {
        headerTitle: 'The Blue',
        headerRight: (
            <HeaderR/>
        ),
        headerLeft: (<Icon2 style={{ fontSize: 26, padding: 10 }} name="chrome" />)
    }
    }
  },
  {
    initialRouteName: 'Log',
  }
);

export default createAppContainer(ASN);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 300,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 150,
    borderRadius: 50,
  },
  loginText: {
    color: 'white',
  }
});