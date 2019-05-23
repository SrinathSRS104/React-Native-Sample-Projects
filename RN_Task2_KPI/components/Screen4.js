import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class Settings extends Component {

    static navigationOptions = {
        // headerTitle instead of title
        headerTitle: "Settings",
      };
    
    render() {
        return (
            <View style={styles.container}>
                <View style={{flex : 1 , justifyContent: "space-around"}}>
                    <Text>Settings</Text>
                </View>
            </View>
        );
    }
}
export default Settings;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});