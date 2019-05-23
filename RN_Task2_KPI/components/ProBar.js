import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class ProBar extends Component {

    static navigationOptions = {
        // headerTitle instead of title
        headerTitle: "Calls",
        headerLayoutPreset: 'center'
      };
    
    render() {
        return (
            <View style={styles.container}>
                    <View style={styles.text}>
                        <Text style={{fontSize:18,fontWeight:'600'}}>SLA</Text>
                    </View>
                    <View style={styles.bar}>
                        <View style={styles.progressLayer}></View>
                        <View style={styles.offsetLayer}></View>
                    </View> 
            </View>
        );
    }
}
export default ProBar;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bar : {
        width: 200,
        height: 200,
        borderWidth: 20,
        borderRadius: 100,
        backgroundColor : '#FFF',
        borderColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center'
    },
    progressLayer: {
        width: 200,
        height: 200,
        borderWidth: 20,
        borderRadius: 100,
        position: 'absolute',
        backgroundColor : '#FFFDDD',
        borderLeftColor: 'transparent',
        borderBottomColor: 'transparent',
        borderRightColor: '#3498db',
        borderTopColor: '#3498db',
        transform:[{rotateZ: '-45deg'}]
      },
      offsetLayer: {
        width: 200,
        height: 200,
        borderWidth: 20,
        borderRadius: 100,
        backgroundColor : '#FFF',
        borderLeftColor: 'transparent',
        borderBottomColor: 'transparent',
        borderRightColor: 'grey',
        borderTopColor: 'grey',
        transform:[{rotateZ: '-135deg'}]
      }
});