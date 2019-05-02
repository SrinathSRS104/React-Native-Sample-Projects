/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  Text,
  FlatList } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import VideoItem from './Components/videoItem';
import data from './data.json';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
          
          <Image source={ require('./assets/youtube-logo.png')} style={{height:30, width: 120 }}/>

          <View style={styles.rightNav}>
            <TouchableOpacity>
              <Icon style={styles.navItem} name="search" size={30} color="#333"/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon style={styles.navItem} name="account-circle" size={30}/>
            </TouchableOpacity>
          </View>

        </View>

        <View style={styles.body}>
          <FlatList
            data={data.items}
            renderItem={
              (video) => <VideoItem video={video.item} />
            }
            keyExtractor = {
              (item) => item.id
            }
            ItemSeparatorComponent = {
              () => <View style={{ height : 0.5 , backgroundColor : '#E5E5E5'}} />
            }
          />
        </View>

        <View style={styles.tabBar}>

          <TouchableOpacity style={styles.tabItem}>
            <Icon name="home" size={30}/>
            <Text style={styles.tabTitle}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
            <Icon name="whatshot" size={30}/>
            <Text style={styles.tabTitle}>Trending</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
            <Icon name="subscriptions" size={30}/>
            <Text style={styles.tabTitle}>Subscriptions</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
            <Icon name="folder" size={30}/>
            <Text style={styles.tabTitle}>Library</Text>
          </TouchableOpacity>

        </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  navBar:{
    height : 55,
    backgroundColor : "white",
    elevation : 3,
    flexDirection : "row",
    alignItems : "center",
    justifyContent : "space-between"
  },

  rightNav : {
    flexDirection  : "row"
  },

  navItem : {
    marginLeft : 25
  },

  body : {
    flex : 1
  },

  tabBar : {
    backgroundColor : 'white',
    height : 60,
    borderColor : '#E5E5E5',
    borderTopWidth : 0.5,
    flexDirection : "row",
    justifyContent : "space-around"
  },
  tabItem : {
    alignItems : "center",
    justifyContent : "center"
  },
  tabTitle : {
    fontSize : 11,
    color : '#3c3c3c',
    paddingTop : 3
  }
});
