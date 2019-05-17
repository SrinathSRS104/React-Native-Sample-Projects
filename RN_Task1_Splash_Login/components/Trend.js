import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class Trend extends Component {

    static navigationOptions = {
        title: 'Trend',
      };
    
    render() {
        return (
            <View style={styles.container}>
                <View style={{flex : 1 , justifyContent: "space-around"}}>
                    <Text>Trend</Text>
                </View>
            </View>
        );
    }
}
export default Trend;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});