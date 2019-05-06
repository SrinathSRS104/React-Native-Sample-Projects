import React from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";
import {connect} from 'react-redux'
import { withNavigation } from 'react-navigation'



const ShoppingCardIcon = (props) => (
    <View style={styles.container}>
        <View style={{
            position: 'absolute',
            height: 30, width: 30,
            borderRadius: 15,
            backgroundColor: 'rgba(95,197,123,0.8)',
            right: 15, bottom: 15,
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2000,
        }}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>{props.cardItems.length}</Text>
        </View>

        <Icon onPress={() => props.navigation.navigate('Cart')} name="shopping-cart" size={30} />
        
    </View>
)

const mapStateToProps = (state) => {
    return {
        cardItems : state
    }
}


export default connect(mapStateToProps)(withNavigation(ShoppingCardIcon));

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});