import React, { Component }  from "react";

import {
    StyleSheet,
    View,
    ActivityIndicator,
    FlatList,
    Text,
    TouchableOpacity,
    Dimensions
  } from "react-native";

import { createStackNavigator, createAppContainer } from "react-navigation";

const column = 2;


class ViewUser extends Component {

  static navigationOptions = {
    title: 'User Details',
  };


  render() {

    const { navigation } = this.props;
    const itemId = navigation.getParam('id', 'NO-ID');
    const name = navigation.getParam('name', 'NO-ID');
    const phone = navigation.getParam('phone', 'NO-ID');
    const company = navigation.getParam('company', 'NO-ID');

      return (
        <View style={styles.container}>
          <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
              <Text>{name}</Text>
              <Text>{phone}</Text>
              <Text>{company}</Text>
          </View>
        </View>
      );
  }
}

class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Home',
  };

  constructor(props) {
    super(props);
    this.state = {
    loading: true,
    dataSource:[]
  };
  }


componentDidMount(){
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then((responseJson)=> {
    this.setState({
    loading: false,
    dataSource: responseJson
  })
})
  .catch(error=>console.log(error))
}


FlatListItemSeparator = () => {
  return (
    <View style={{
      height: 2,
      width:"100%",
      backgroundColor:"rgba(0,0,0,0.5)",}}/>
  )
}


renderItem=(data)=>
  <View style={styles.item}>
    <TouchableOpacity style={styles.list} onPress={() => this.props.navigation.navigate('View',{
         id: data.item.id,
         name: data.item.name,
         phone: data.item.phone,
         company: data.item.company.name
     })}>
      <Text style={styles.lightText}>{data.item.name}</Text>
      <Text style={styles.lightText}>{data.item.phone}</Text>
      <Text style={styles.lightText}>{data.item.company.name}</Text>
    </TouchableOpacity>
  </View>


render(){

 if(this.state.loading){
  return( 
    <View style={styles.loader}> 
      <ActivityIndicator size="large" color="#0c9"/>
    </View>
  )}

    return(
      <View style={styles.container}>
       <FlatList
          data= {this.state.dataSource}
          ItemSeparatorComponent = {this.FlatListItemSeparator}
          renderItem= {item=> this.renderItem(item)}
          keyExtractor= {item=>item.id.toString()}
          numColumns={column}/>
      </View>
    )
  }
}



const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    View : ViewUser
  },
  {
    initialRouteName: "Home",
  }
);

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
   },
  loader:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
   },
  list:{
    paddingVertical: 4,
    margin: 5,
    backgroundColor: "#4D243D"
   },
   item : {
    height: Dimensions.get('window').width / column,
    backgroundColor: '#4D243D',
    alignItems : 'flex-start',
    justifyContent: 'center',
    flex: 1,
    margin: 1,
  },
  lightText :{
    color : '#fff'
  }
});