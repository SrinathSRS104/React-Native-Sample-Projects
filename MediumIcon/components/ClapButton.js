import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from "react-native";

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

import ClapBubble from "./ClapBubble";

class ClapButton extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count : 0,
            claps : []
        }
        this.clap = this.clap.bind(this)
        this.keepClapping = this.keepClapping.bind(this)
        this.stopClapping = this.stopClapping.bind(this)
    }


    animationComplete(countNum) {
        claps = this.state.claps
        claps.splice(claps.indexOf(countNum),1)
        this.setState({claps})
    }

    clap() {
        let count = this.props.claps
        let claps = this.state.claps
        //count++
        this.setState(({ count }) => ({
            count: count + 1
          }));
        
        claps.push(count)
        // this.setState({count})
    }

    keepClapping() {
        this.clapTimer = setInterval( () =>
            this.clap(),150
        )
    }

    stopClapping() {
        if (this.clapTimer) {
            clearInterval(this.clapTimer)
        }
    }

    renderClaps() {
        return this.state.claps.map((countNum) => {
            return(
                <ClapBubble key={countNum} count={this.state.count} animationComplete = {this.animationComplete.bind(this)}/>
            )
        })
    }

    render() {
        let clapIcon = this.state.count > 0 ?  <Image source={require('../images/clapped.png')} style={{height:hp('6.5%'), width:hp('6.5%')}}/> :  <Image source={require('../images/clap.png')} style={{height:hp('6.5%'), width:hp('6.5%')}}/>

        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress = {this.clap}
                    onPressIn = {this.keepClapping}
                    onPressOut = {this.stopClapping}
                    style={styles.clapButton} >
                       {clapIcon}
                </TouchableOpacity>
                {this.renderClaps()}
            </View>
        );
    }
}
export default ClapButton;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    clapButton : {
        backgroundColor : '#ecf0f1',
        position : 'absolute',
        bottom : hp('3%'),
        left : wp('80%'),
        height : hp('10%'),
        width : hp('10%'),
        borderRadius : hp('8%'),
        elevation : 3,
        alignItems : 'center',
        justifyContent : 'center'
    }
});