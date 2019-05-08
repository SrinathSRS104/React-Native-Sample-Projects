import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    TouchableOpacity,
    Dimensions,
    Alert
} from "react-native";

import FlatListData from '../data/FlatListData'
import RF from "react-native-responsive-fontsize"
import Swipeout from 'react-native-swipeout'
import Icon from "react-native-vector-icons/FontAwesome5";


class FlatListItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            activeRowKey : null
        }
        //this.navigation.navigate = this.navigation.navigate.bind(this)
    }

    render() {
        //const {navigate} = this.props.navigation

        const SwipeSettings = {
            autoClose : true,
            onClose: (secId,rowId,direction) =>{
                this.setState({
                    activeRowKey : null
                })
            },
            onOpen: (secId,rowId,direction) =>{
                this.setState({
                    activeRowKey : this.props.item.key
                })
            },
            right : [
                {
                    onPress : () => {
                        alert("Update")
                    },
                    text : 'Edit', type : 'primary'
                },
                {
                    onPress : () => {

                        const deletingRow = this.state.activeRowKey

                        Alert.alert (
                            'Alert',
                            'Are you sure you want to delete?',
                            [
                                {text : 'No', onPress : () => console.log('Cancel'), style:'cancel'},
                                {text : 'Yes' , onPress : () => {
                                    FlatListData.splice(this.props.index , 1)
                                    this.props.parentFlatList.refreshFlatList(deletingRow)
                                }}
                            ],
                            { cacncelable : true}
                        )
                    },
                    text : 'Delete', type: 'delete'
                }
            ],
            rowId: this.props.index,
            sectionId:1
        }


        return (
            <Swipeout {...SwipeSettings}>
                <View style={styles.item}>
                
                <TouchableOpacity 
                    style={{ flex:1 , flexDirection : "row",
                              //  backgroundColor: this.props.index % 2 == 0 ? this.props.index % 4 == 0 ?  '#6A6A6A' : 'tomato' : (this.props.index + 1) % 4 == 0 ?  '#6A6A6A' : 'tomato',
                                backgroundColor: this.props.index % 2 == 0 ? '#6A6A6A' : 'tomato',
                                alignItems : 'center',
                                justifyContent: 'space-between'
                            }}
                    onPress={() =>
                        this.props.navigation.navigate('Details',{
                            url : this.props.item.imageURL,
                            name : this.props.item.name,
                            price : this.props.item.price
                        }
                        )
                    }>
                    
                    <Image
                        source = {{uri : this.props.item.imageURL}}
                        //style = {{ width : Dimensions.get('window').width / 2, height : Dimensions.get('window').width / 2.4, margin : 5 }}>
                        style = {{ alignItems:'flex-start', width : Dimensions.get('window').width / 3,height: Dimensions.get('window').width / 4, margin : 5 }}>
                    </Image>
                    <View style={{flex:1}}>
                        <Text style={styles.FlatListItem}> {this.props.item.name} </Text> 
                    </View>
                </TouchableOpacity>
            </View>
            </Swipeout>
        )
    }
}

class BasicFlatList extends Component {

    constructor(props) {
        super(props)
        this.state = ({
            deleteRowKey : null
        })
    }

    refreshFlatList = (deletekey) => {
        this.setState((prevState) => {
            return {
                deleteRowKey : deletekey
            }
        })
    }

    static navigationOptions = {
        title: 'Home',
    };

    FlatListItemSeparator = () => {
        return (
          <View style={{
            height: 3,
            width:"100%",
            backgroundColor:"#FFF",}}/>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{flexDirection:'row', height: Dimensions.get('window').width / 8, alignItems:'center',backgroundColor:'white'}}>
                    {/* <Image source={{uri:'https://upload.wikimedia.org/wikipedia/sco/d/d2/Pizza_Hut_logo.svg'}} style={{height:40,width:40}}/> */}
                    <Icon name="pizza-slice" style={{color:'tomato', fontSize: RF(4), paddingLeft: 10 ,paddingRight:5}}/>
                    <Text style={{fontSize: RF(4), color:'tomato', fontWeight: '500'}}> Pizza </Text>
                    <Text style={{fontSize: RF(4), color : 'black',fontWeight: '500'}}> Hut </Text>
                </View>
                <FlatList
                    style={{}}
                    data={FlatListData}
                    ItemSeparatorComponent = {this.FlatListItemSeparator}
                    renderItem = { ({item,index}) => {
                        console.log('Item=${JSON.stringify(item)}')
                        return (
                            <FlatListItem item={item} index={index} parentFlatList={this} navigation={this.props.navigation}/>
                        )
                    }}
                   // numColumns = {2}
                />
            </View>
        );
    }
}

export default BasicFlatList;


const styles = StyleSheet.create({
    container :{
        flex: 1
    },
    FlatListItem : {
        color : 'white',
        padding : 5,
        fontSize : RF(3),
    },
    item : {
       // height: Dimensions.get('window').width / 2,
        backgroundColor: '#4D243D',
     //   alignItems : 'flex-start',
     //   justifyContent: 'center',
        flex: 1,
       // margin: 1,
      }

});