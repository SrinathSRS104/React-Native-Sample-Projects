import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class User extends Component {

    static navigationOptions = {
        title: 'User',
      };
    
    render() {
        return (
            <View style={styles.container}>
                <View style={{flex : 1 , justifyContent: "space-around"}}>
                    <Text>User</Text>
                </View>
            </View>
        );
    }
}
export default User;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});