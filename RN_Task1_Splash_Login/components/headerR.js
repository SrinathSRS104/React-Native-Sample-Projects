import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

class HeaderR extends Component {

    render() {
        return (
        <View>
            <View style={{
                position: 'absolute',
                height: 25, width: 25,
                borderRadius: 15,
                backgroundColor: 'rgba(256,50,80,0.8)',
                right: 40, bottom: 40,
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 2000,
            }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>0</Text>
            </View>

            <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
                <TouchableOpacity>
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
        </View>
        );
    }
}
export default HeaderR;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});