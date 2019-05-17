import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class Screen3 extends Component {

    static navigationOptions = {
        // headerTitle instead of title
        headerTitle: "Agents",
      };
    
    render() {
        return (
            <View style={styles.container}>
                <View style={{flex : 1 , justifyContent: "space-around"}}>
                    <Text>Screen3</Text>
                </View>
            </View>
        );
    }
}
export default Screen3;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});