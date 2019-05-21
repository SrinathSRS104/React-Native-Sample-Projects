import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";
import Icon2 from "react-native-vector-icons/SimpleLineIcons";
import { TouchableOpacity } from "react-native-gesture-handler";

class Drawer extends Component {

    render() {

        const { navigation } = this.props

        return (
            <View style={styles.container}>

                <View style={styles.drawerBar}>                    
                    <Image style={{ width:60, height:60 , borderRadius: 30 }} source={require('../assets/random-user_imageF36.jpg')}/>
                    <View>
                        <Text style={styles.drawerTitle}>Random User</Text>
                        <Text style={styles.drawerDesc}>randomuser@gmail.com</Text>
                    </View>
                </View>

                <View style={styles.middleDeck}>
                    <View style={styles.outerDiv}>
                        <View style={styles.innerDiv}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Screen1')}>
                                <Icon name="headset-mic" style={styles.icon}/>
                                <Text style={styles.label}>Live KPIs</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.innerDiv}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Screen2')}>
                                <Icon name="call" style={styles.icon}/>
                                <Text style={styles.label}>Calls</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View  style={styles.outerDiv}>
                        <View style={styles.innerDiv}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Screen3')}>
                                <Icon name="group" style={styles.icon}/>
                                <Text style={styles.label}>Agents</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.innerDiv}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Screen3')}>
                                <Icon2 name="logout" style={styles.icon}/>
                                <Text style={styles.label}>LogOut</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View>
                    <View style={styles.bottomBar}>
                        <Text  style={{padding : 5}}> Connected to</Text>
                        <Text style={styles.version}>abc.crlf.to</Text>
                    </View>
                    <View style={{margin:10}}>
                        <Text style={{padding : 5}}> Sample App v0.0.1</Text>
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
        flexDirection : 'row',
        height : 50,
        backgroundColor: '#D959A5',
        justifyContent : 'space-between',
        alignItems : 'flex-end',
        padding : 15
    },
    drawerTitle : {
        color : '#FFF',
        fontSize : 20,
        fontWeight : '600'
    },
    drawerDesc : {
        color : '#FFF',
        fontSize : 16,
    },
    middleDeck : {
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
        fontWeight : '600',
        padding : 20,
        color : '#5D5D5D'
    },
    label : {
        textAlign : 'center',
        fontSize : 20,
        marginTop : -5
    },
    bottomBar : {
        flex: 1,
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'flex-start',
        marginLeft : 10
    },
    version : {
        color : '#D959A5'
    }

  })