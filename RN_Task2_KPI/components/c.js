import React, { Component } from "react";
import {
    View,
    Animated,
    Text,
    StyleSheet,
    Platform,
    ActivityIndicator,
    Dimensions,
    FlatList,
    Easing,
    TouchableOpacity,
} from "react-native";

import Icon from "react-native-vector-icons/Feather";
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";

import { AnimatedCircularProgress } from 'react-native-circular-progress';
import SortableList from 'react-native-sortable-list'
import DraggableFlatList from 'react-native-draggable-flatlist'

import StackTopTitle from "./StackTopTitle"
import ProBar from "./ProBar"


const my_data = [
    {
        "id": 1,
        "iconName": "phone-incoming",
        "title": "Total ACD Calls",
        "time": "20:10",
        "type": 'Incoming'
    },
    {
        "id": 2,
        "iconName": "award",
        "title": "Total Clean Call Landed Inbound",
        "time": "00:10",
        "type": 'Incoming'
    },
    {
        "id": 3,
        "iconName": "thumbs-up",
        "title": "Total Clean Call Outbound",
        "time": "2",
        "type": 'Incoming'
    },
    {
        "id": 4,
        "iconName": "zap",
        "title": "Total Phantom Calls Landed Inbound",
        "time": "0",
        "type": 'Incoming'
    },
    {
        "id": 5,
        "iconName": "phone-call",
        "title": "Total Outbound Talk Time",
        "time": "03:50",
        "type": 'Outgoing'
    },
    {
        "id": 6,
        "iconName": "phone-outgoing",
        "title": "Total Outgoing Call",
        "time": "0",
        "type": 'Outgoing'
    },
    {
        "id": 7,
        "iconName": "send",
        "title": "Average Speed of Answer",
        time: "20:10",
        "type": 'utilities'
    },
    {
        "id": 8,
        "iconName": "phone-missed",
        "title": "Total Tansfered Calls",
        "time": "1",
        "type": 'utilities'
    }
]

class Screen1 extends Component {

    constructor() {
        super()
        this.state = {
            percentage: 58,
            data : [
                {
                    "id": 1,
                    "iconName": "phone-incoming",
                    "title": "Total ACD Calls",
                    "time": "20:10",
                    "type": 'Incoming'
                },
                {
                    "id": 2,
                    "iconName": "award",
                    "title": "Total Clean Call Landed Inbound",
                    "time": "00:10",
                    "type": 'Incoming'
                },
                {
                    "id": 3,
                    "iconName": "thumbs-up",
                    "title": "Total Clean Call Outbound",
                    "time": "2",
                    "type": 'Incoming'
                },
                {
                    "id": 4,
                    "iconName": "zap",
                    "title": "Total Phantom Calls Landed Inbound",
                    "time": "0",
                    "type": 'Incoming'
                },
                {
                    "id": 5,
                    "iconName": "phone-call",
                    "title": "Total Outbound Talk Time",
                    "time": "03:50",
                    "type": 'Outgoing'
                },
                {
                    "id": 6,
                    "iconName": "phone-outgoing",
                    "title": "Total Outgoing Call",
                    "time": "0",
                    "type": 'Outgoing'
                },
                {
                    "id": 7,
                    "iconName": "send",
                    "title": "Average Speed of Answer",
                    time: "20:10",
                    "type": 'utilities'
                },
                {
                    "id": 8,
                    "iconName": "phone-missed",
                    "title": "Total Tansfered Calls",
                    "time": "1",
                    "type": 'utilities'
                }
            ]
        }
    }

    renderItem = ({ item, index, move, moveEnd, isActive }) => {
        return (
          <TouchableOpacity
            style={{ 
              height: 100, 
              alignItems: 'center', 
              justifyContent: 'center' 
            }}
            onLongPress={move}
            onPressOut={moveEnd}
          >
            <Text>{this.state.data.title}</Text>
            <Text>Sample</Text>
          </TouchableOpacity>
        )
    }
    
    static navigationOptions = {
        headerTitle: <StackTopTitle />,
        headerTitleStyle: {
            marginLeft: 70
        },
    };


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.slaText}>
                    <Text style={{ fontSize: 30, fontWeight: '500' }}>SLA</Text>
                </View>
                <View style={styles.slaBar}>
                    <View style={styles.theBar}>
                        <AnimatedCircularProgress
                            size={150}
                            width={25}
                            fill={this.state.percentage}
                            tintColor="#D959A5"
                            backgroundColor='#D5D5D5'
                            rotation={235}
                            lineCap="round"
                            duration={1000}
                        />
                    </View>

                    <View>
                        <Text style={styles.barText}>{this.state.percentage}%</Text>
                    </View>
                </View>
                <DraggableFlatList
                    style={styles.container}
                    data={this.state.data}
                    renderItem={this.renderItem}
                   // renderRow={this._renderRow}
                    keyExtractor={(item, index) => `draggable-item-${item.key}`}
                    scrollPercent={5}
                    onMoveEnd={({ data }) => this.setState({ data })}
                />
            </View>
        )
    }
}

export default Screen1;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5E5E5',
        // alignItems : 'center'
    },
    slaBar: {
        flex: 1,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        maxHeight: 200,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
        borderRadius: 10
    },
    slaText: {
        justifyContent: "flex-start",
        position: 'absolute',
        zIndex: 5,
        marginTop: 140,
        marginLeft: 20
    },
    theBar: {
        //  transform:[{rotateZ: '45deg'}],
        position: 'absolute'
    },
    theBackBar: {
        zIndex: -2,
        position: 'absolute'
    },
    barText: {
        fontSize: 30,
        fontWeight: '600'
    },
    loader: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff"
    },
    list: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#FFF',
        borderRadius: 10,
        //borderWidth : 1,
        alignItems: 'center',
        margin: 6,

    },
    title: {
        flex: 5,
        width: Dimensions.get('window').width - 20,
        alignItems: 'center',
        fontWeight : '500',
        color: '#2D975A',
        fontSize: 16
    },
    icon: {
        flex: 1,
        fontSize: 40,
        padding: 10,
        //color: '#2D975A'
        marginRight: 6
    },
    time: {
        flex: 2,
        paddingLeft: 10,
        fontSize: 22,
        fontWeight : '500',
        color: '#000',
        textAlign: 'right'
    },

    divider: {
        height: 70,
        borderLeftWidth: 2,
    },

    incoming: {
        color: '#F39C12',
        borderLeftColor: '#F39C12'
    },
    outgoing: {
        color: '#D959A5',
        borderLeftColor: '#D959A5'
    },
    utilities: {
        color: '#2D975A',
        borderLeftColor: '#2D975A'
    },
});
