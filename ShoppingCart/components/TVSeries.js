import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

import {series} from '../Data'
import Items from './Items'
import {connect} from 'react-redux'

class TVSeries extends Component {
    static navigationOptions = {
        title: 'TV Series',
      };
    

    render() {
        return (
            <View style={styles.container}>
                 <Items items={series} onPress={this.props.addItemToCart}/>
            </View>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: (item) => dispatch({ type: 'ADD_TO_CART', payload: item })
    }
}

export default connect(null,mapDispatchToProps)(TVSeries);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});