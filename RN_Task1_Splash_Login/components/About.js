import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class About extends Component {

    static navigationOptions = {
        title: 'About',
      };
    
    render() {
        return (
            <View style={styles.container}>
                <View style={{flex : 1 , justifyContent: "space-around"}}>
                    <Text>About</Text>
                </View>
            </View>
        );
    }
}
export default About;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});