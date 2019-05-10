import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import RF from "react-native-responsive-fontsize"


class Details extends Component {
    
    render() {

        const { navigation } = this.props;
        const url = navigation.getParam('url', 'NO-ID');
        const name = navigation.getParam('name', 'NO-ID');
        const price = navigation.getParam('price','NO_ID')

        return (
            <View style={styles.container}>
                <Text style={styles.name}>{name}</Text>
                <Image source={{uri : url}} style={{height:hp('50%'),width:wp('80%')}}/>
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
        fontSize : RF(6),
        color: '#6A6A6A',
        fontWeight : '800'
    },
    price : {
        fontSize : RF(8),
        color : 'tomato',
        fontWeight : '500'
    }
});