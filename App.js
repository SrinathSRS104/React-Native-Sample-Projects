/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';


export default class App extends Component {

  constructor() {
    super()
    this.state = {
      resultText: "",
      calculationText: ""
  }
  this.operations = ['DEL','*', '/', '-', '+']
    }

  calculateResult() {
    const text = this.state.resultText
    
    this.setState ({
      calculationText: eval(text)
    })
  }

  validate(){
    const text = this.state.resultText

    switch(text.slice(-1)){
      case '+':
      case '-':
      case '*':
      case '/':
        return false
    }
    return true
  }

  buttonPressed(text) {

    if (text == "=") {
      return this.validate() && this.calculateResult()
    }

    this.setState({
      resultText: this.state.resultText + text
    })
  }

  operate(operation) {
    switch(operation){
      case 'DEL':
          let text = this.state.resultText.split('')
          text.pop()
          this.setState({
            resultText : text.join('')
          })
          break
        case '+':
        case '-':
        case '*':
        case '/':

          const lastChar = this.state.resultText.split('').pop()

          if (this.operations.indexOf(lastChar) > 0 ) return
          if (this.state.text == "") return
            this.setState({
              resultText: this.state.resultText + operation
            })
          
    } 
  }


  render() {

    // for loop for numbers
    let rows = []
    let nums = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['.', 0, '=']]

    for (let i = 0; i < 4; i++) {

      let row = []

      for (let j = 0; j < 3; j++) {
        row.push(<TouchableOpacity onPress={() => this.buttonPressed(nums[i][j])} style={styles.btn}>
          <Text style={styles.btnText}>{nums[i][j]}</Text>
        </TouchableOpacity>)
      }
      rows.push(<View style={styles.row}>{row}</View>)
    }

    // for loop for operations
    let ops = []
    let operations = ['DEL','*', '/', '-', '+']

    for (let i = 0; i < 5; i++) {
      ops.push(<TouchableOpacity onPress={ () => this.operate(operations[i])}  style={styles.btn}>
        <Text style={[styles.btnText, styles.white]}>{operations[i]}</Text>
      </TouchableOpacity>)
    }

    return (
      <View style={styles.container}>

        <View style={styles.result}>
          <Text style={styles.resultText}>{this.state.resultText}</Text>
        </View>

        <View style={styles.calculations}>
          <Text style={styles.calculationText}> {this.state.calculationText} </Text>
        </View>

        <View style={styles.buttons}>

          <View style={styles.numbers}>
            {rows}
          </View>

          <View style={styles.operations}>
            {ops}
          </View>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  calculationText: {
    fontSize: 36,
    color: 'white'
  },

  resultText: {
    fontSize: 30,
    color: 'white',
  },

  btnText: {
    fontSize: 28
  },

  btn: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center'
  },

  white: {
    color: 'white'
  },

  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },

  btn: {

  },

  operations: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'orange'
  },

  result: {
    flex: 2,
    backgroundColor: '#cccccc',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },

  calculations: {
    flex: 1,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },

  buttons: {
    flex: 6,
    flexDirection: 'row'
  },

  numbers: {
    flex: 3,
    backgroundColor: 'green'
  }
});
