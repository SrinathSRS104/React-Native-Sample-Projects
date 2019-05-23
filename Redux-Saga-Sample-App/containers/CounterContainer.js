/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {connect} from 'react-redux';
import Counter from '../components/CounterComponent'

import { increaseAction } from '../actions'
import { decreaseAction } from '../actions'

const mapStateToProps = (state) => {

    alert ('state after changed :$(JSON.stringify(state.counterReducer)}')
    return {
        times : state.counterReducer ? state.counterReducer : 0
    }
}

const mapDispatchToProps = (state) => {
    return {
        onDecrement : (step) => {
            dispatch(decreaseAction(step))
        },
        onIncrement : (step) => {
            dispatch(increaseAction(step))
        }
    }
}

const CounterContainer = connect (mapStateToProps, mapDispatchToProps)(Counter)
export default CounterContainer


