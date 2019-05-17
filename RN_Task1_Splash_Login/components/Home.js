import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class Home extends Component {

    static navigationOptions = {
        title: 'Home',
      };
    
    render() {
        const { navigation } = this.props;
        const email = navigation.getParam('email', 'empty');

        return (
            <View style={styles.container}>
                <View style={{flex : 1 , justifyContent: "space-around",width:350}}>
                    <Text style={{fontSize:26,textAlign:'center'}}>Welcome home {JSON.stringify(email)} </Text>
                </View>
            </View>
        );
    }
}
export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});