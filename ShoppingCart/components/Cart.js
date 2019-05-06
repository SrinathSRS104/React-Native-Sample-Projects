import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

import { connect } from 'react-redux'
import Items from './Items'

class Cart extends Component {

    static navigationOptions = {
        title: 'Cart',
      };

      
    render() {
        return (
            <View style={styles.container}>
                {this.props.cartItems.length > 0 ?
                    <Items
                        onPress={this.props.removeItem}
                        items={this.props.cartItems} />
                    : <Text>No items in your cart</Text>
                }
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cartItems: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (item) => dispatch({ type: 'REMOVE_FROM_CART', payload: item })
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});