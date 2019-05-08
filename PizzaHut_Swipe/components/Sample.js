import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class Sample extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Sample</Text>
            </View>
        );
    }
}
export default Sample;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});