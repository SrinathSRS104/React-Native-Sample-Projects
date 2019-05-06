import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class ViewUser extends Component {
    render() {
        return (
            <View style={styles.item}>
                <Text style={styles.lightText}>{data.item.name}</Text>
                <Text style={styles.lightText}>{data.item.phone}</Text>
                <Text style={styles.lightText}>{data.item.company.name}</Text>
            </View>
        );
    }
}
export default ViewUser;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});