import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class StackTopTitle extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Live KPIs</Text>
                <Text style={styles.sub}> from a few seconds ago </Text>
            </View>
        );
    }
}
export default StackTopTitle;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection : 'row',
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    title : {
        color : '#FFF',
        fontSize : 20,
        marginRight : 5,
        fontWeight : '800'
    },
    sub : {
        color : '#FFF',
        fontSize : 12
    }
});