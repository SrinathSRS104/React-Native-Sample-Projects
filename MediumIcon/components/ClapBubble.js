import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Animated
} from "react-native";

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import RF from "react-native-responsive-fontsize"

class ClapBubble extends Component {

    constructor() {
        super()
        this.state = {
            yPosition : new Animated.Value(0),
            opacity : new Animated.Value(0)
        }
    }

    componentDidMount() {

            Animated.timing(this.state.yPosition,{
                toValue : -hp('20%'),
                duration : 500
            }).start( () => {
                setTimeout( () => {
                    this.props.animationComplete(this.props.count)
                }, 500)
            })
            Animated.timing(this.state.opacity, {
                toValue : 1,
                duration : 500
            }).start( () => {
                setTimeout( () => {
                    this.props.animationComplete(this.props.count)
                }, 500)
            })
    }

    render() {
        let animationStyle = {
            transform : [{ translateY : this.state.yPosition}],
            opacity : this.state.opacity
        }
        return (
            <Animated.View style={[styles.clapBubble,animationStyle]}>
                <Text style={styles.clapText}>+{this.props.count} </Text>
            </Animated.View>
        );
    }
}
export default ClapBubble;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    clapBubble : {
        position : 'absolute',
        height : hp('10%'),
        width : hp('10%'),
        borderRadius : hp('8%'),
        backgroundColor : '#15a872',
        bottom : hp('3%'),
        left : wp('80%'),
      //  elevation : 3,
        alignItems : 'center',
        justifyContent : 'center'
    },
    clapText : {
        fontSize : RF(3),
        color : 'white'
    }
});