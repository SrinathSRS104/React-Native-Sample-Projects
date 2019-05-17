import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class Screen2 extends Component {

    static navigationOptions = {
        // headerTitle instead of title
        headerTitle: "Calls",
      };
    
    render() {
        return (
            <View style={styles.container}>
                <View style={{flex : 1 , justifyContent: "space-around"}}>
                    <Text>Screen2</Text>
                </View>
            </View>
        );
    }
}
export default Screen2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});