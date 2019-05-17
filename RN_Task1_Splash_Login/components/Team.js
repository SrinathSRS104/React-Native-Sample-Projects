import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class Team extends Component {

    static navigationOptions = {
        title: 'Team',
      };
    
    render() {
        return (
            <View style={styles.container}>
                <View style={{flex : 1 , justifyContent: "space-around"}}>
                    <Text>Team</Text>
                </View>
            </View>
        );
    }
}
export default Team;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});