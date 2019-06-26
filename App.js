/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import { store } from './app/helpers/dataManager'
import Root from './app/components/root.js'


type Props = {};
export default class App extends Component<Props> {

  state={}

  render() {
  	console.log(store)
    return (
      <Provider store={store}>
        <Root/>
      </Provider>
    )
  }
}