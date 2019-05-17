import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

export default class SplashScreen extends Component {
    
    render() {
        return (
            <View style={styles.container}>
                <View style={{flex : 1 , justifyContent: "space-around"}}>
                    <Icon style={{fontSize:40}} name="chrome"/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3498DB'
    }
});