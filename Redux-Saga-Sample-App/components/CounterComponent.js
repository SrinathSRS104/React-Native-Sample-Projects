/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Counter extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Button style={styles.button} 
                title="Increment"
                    onPress={() => { this.props.onIncrement(1)}}/>

                <Text style={styles.title}>
                    Counts : {this.props.times}
                </Text>

                <Button style={styles.button}
                title="Decrement"
                    onPress={() => {this.props.onDecrement(1)}}/>
            </View>
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
    button: {
        padding: 10,
        height: 10,
        borderRadius: 10
    },
    title: {
        margin: 10,
        color: 'darkblue',
    }
});
