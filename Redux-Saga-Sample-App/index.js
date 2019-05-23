/**
 * @format
 */
import React, {Component} from 'react';
import {AppRegistry} from 'react-native';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import {name as appName} from './app.json';

import allReducers from './reducers'
import CounterContainer from './containers/CounterContainer'
import CounterComponent from './components/CounterComponent'

let store = createStore(allReducers)

const App = () => (
   <Provider store={store}>
        <CounterContainer/>
    </Provider>
)

AppRegistry.registerComponent(appName, () => App);
