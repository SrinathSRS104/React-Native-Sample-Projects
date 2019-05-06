import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";


class Items extends Component {

    renderItems = (items) => {

        return items.map((item, index) => {
            
            return (
                <View key={index} style={{ padding: 20 }}>
                    <Button onPress={
                        () => this.props.onPress(item)
                        }
                        title = {item.name + " - " + item.price} />
                </View>
            )
        })
    }


    render() {
        return (
            <View>
                {this.renderItems(this.props.items)}
            </View>
        );
    }
}
export default Items;