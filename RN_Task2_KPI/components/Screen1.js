import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    ActivityIndicator,
    Dimensions,
    FlatList,
    TouchableOpacity
} from "react-native";

import Icon from "react-native-vector-icons/AntDesign";

const column = 2;

class Screen1 extends Component {

    static navigationOptions = {
        // headerTitle instead of title
        headerTitle: "Live KPIs",
        headerTitleStyle: {
            textAlign: 'center',
            alignSelf: 'center'
        },
    };


    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            dataSource: []
        };
    }


    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then((responseJson) => {
                this.setState({
                    loading: false,
                    dataSource: responseJson
                })
            })
            .catch(error => console.log(error))
    }


    FlatListItemSeparator = () => {
        return (
            <View style={{
                height: 5,
                width: "100%",
                backgroundColor: "#F8F8F8",
            }} />
        )
    }


    renderItem = (data) =>
        <View style={styles.item}>
            <TouchableOpacity style={styles.list} /* onPress={() => this.props.navigation.navigate('View', {
                id: data.item.id,
                name: data.item.name,
                phone: data.item.phone,
                company: data.item.company.name
            })} */>
                <Text style={styles.lightText}>{data.item.name}</Text>
                <Text style={styles.lightText}>{data.item.phone}</Text>
            </TouchableOpacity>
        </View>


    render() {

        if (this.state.loading) {
            return (
                <View style={styles.loader}>
                    <ActivityIndicator size="large" color="#D959A5" />
                </View>
            )
        }

        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.dataSource}
                 //   ItemSeparatorComponent={this.FlatListItemSeparator}
                    renderItem={item => this.renderItem(item)}
                    keyExtractor={item => item.id.toString()} />
            </View>
        )
    }
}

export default Screen1;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor : '#F8F8F8',
        alignItems : 'center'
    },
    loader: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff"
    },
    list: {
        flex: 1,
        padding : 20,
        backgroundColor :'#FFF',
        borderRadius : 10
    },
    item: {
        flex: 1,
        margin: 5,
        width: Dimensions.get('window').width - 30
    },
    lightText: {
        color: '#2D975A',
        paddingLeft : 20,
        fontSize : 20
    }
});
