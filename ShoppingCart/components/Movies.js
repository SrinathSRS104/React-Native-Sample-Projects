import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

import {movies} from '../Data'
import Items from './Items'

import {connect} from 'react-redux'

class Movies extends Component {

    static navigationOptions = {
        // headerTitle instead of title
        headerTitle: "Sample",
      };
    

      
    render() {
        return (
            <View style={styles.container}>
                <Items items={movies} onPress={this.props.addItemToCart}/>
            </View>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: (item) => dispatch({ type: 'ADD_TO_CART', payload: item })
    }
}

export default connect(null,mapDispatchToProps)(Movies);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

/* export const movies = [
    {
        id: 1,
        name: 'Iron Man',
        price: 49.99
    },
    {
        id: 2,
        name: 'Intersteller',
        price: 199
    },
    {
        id: 3,
        name: 'End Game',
        price: 300
    }
] */