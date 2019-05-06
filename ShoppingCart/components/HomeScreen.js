import React, { Component } from "react";
import { 
    View,
    Button,
    StyleSheet
} from "react-native";
class HomeScreen extends Component {

    static navigationOptions = {
        title: 'Home',
      };
    
    render() {
        console.log("HomeScreen")
        return (
            <View style={styles.container}>
                <View style={{flex : 1 , justifyContent: "space-around"}}>
                <Button
                    title="Movies"
                    onPress={
                        () => this.props.navigation.navigate('Movies')
                    }
                />
                <Button
                    title="TV Series"
                    onPress={
                        () => this.props.navigation.navigate('TVSeries')
                    }
                />
                </View>
            </View>
        );
    }
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});