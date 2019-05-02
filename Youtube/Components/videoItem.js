/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Image , View, TouchableOpacity,Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class videoItems extends Component {
  render() {

    let video = this.props.video;

    return (
      <View style={styles.container}>
        <Image source={{uri:video.snippet.thumbnails.medium.url}} style={{height:200}}/>
        <View style={styles.descContainer}>
            <Image source={{uri : 'https://randomuser.me/api/portraits/women/21.jpg'}}
                            style={{width : 50 , height : 50 , borderRadius : 25 }}/>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
      padding : 15
    },
    descContainer : {
        flexDirection : 'row',
        paddingTop : 15
    }
});