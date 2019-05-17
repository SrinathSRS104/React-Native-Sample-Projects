import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Icon2 from "react-native-vector-icons/SimpleLineIcons";
import { NavigationActions } from 'react-navigation'
import { TouchableOpacity } from "react-native-gesture-handler";

class Drawer extends Component {

    render() {

        const { navigation } = this.props

        return (
            <View style={styles.container}>

                <View style={styles.drawerBar}>
                    <Text style={styles.drawerTitle}>Sample App</Text>
                </View>

                <View style={styles.lowerDeck}>
                    <View style={styles.outerDiv}>
                        <View style={styles.innerDiv}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Screen1')}
                                style={styles.uglyDrawerItem}>
                                <Icon name="headset-mic" style={styles.icon}/>
                                <Text style={styles.label}>Live KPIs</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.innerDiv}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Screen2')}
                                style={styles.uglyDrawerItem}>
                                <Icon name="call" style={styles.icon}/>
                                <Text style={styles.label}>Calls</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View  style={styles.outerDiv}>
                        <View style={styles.innerDiv}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Screen3')}
                                style={styles.uglyDrawerItem}>
                                <Icon name="group" style={styles.icon}/>
                                <Text style={styles.label}>Agents</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.innerDiv}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Screen3')}
                                style={styles.uglyDrawerItem}>
                                <Icon2 name="logout" style={styles.icon}/>
                                <Text style={styles.label}>LogOut</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

export default Drawer;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f6f6f6',
    },
    drawerBar : {
        flex : 1,
        height : 50,
        backgroundColor: '#D959A5',
        justifyContent : 'flex-end',
        padding : 20
    },
    drawerTitle : {
        color : '#FFF',
        fontSize : 40,
        textAlign : 'center'
    },
    lowerDeck : {
        flex: 3
    },
    outerDiv : {
       // flex:1,
        flexDirection:'row'
    },
    innerDiv : {
        flex: 1,
        alignItems : 'center',
        borderWidth : 0.3,
        borderColor : '#7C7C7C',
        padding : 15
       // justifyContent : 'center'
    },
    icon : {
        fontSize : 40,
        padding : 20,
        color : '#5D5D5D'},
    label : {
        textAlign : 'center',
        fontSize : 20,
        marginTop : -5
    }

  })