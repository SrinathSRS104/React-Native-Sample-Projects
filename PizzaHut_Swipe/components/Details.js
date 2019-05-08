import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
class Details extends Component {
    
    render() {

        const { navigation } = this.props;
        const url = navigation.getParam('url', 'NO-ID');
        const name = navigation.getParam('name', 'NO-ID');
        const price = navigation.getParam('price','NO_ID')

        return (
            <View style={styles.container}>
                <Text style={styles.name}>{name}</Text>
                <Image source={{uri : url}} style={{height:200,width:200}}/>
                <Text style={styles.price}>{price}</Text>
            </View>
        );
    }
}
export default Details;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    name : {
        fontSize : 30,
        color: '#6A6A6A',
        fontWeight : '800'
    },
    price : {
        fontSize : 40,
        color : 'tomato',
        fontWeight : '500'
    }
});