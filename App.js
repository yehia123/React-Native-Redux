import React, { Component } from 'react'
import { AppRegistry, Navigator } from 'react-native'
import Home from "./src/components/Home"
import Profile from "./src/components/Profile"
import { Tabs } from './src/actions/ReactNav'
export default class App extends Component {

    render() {
        return(
        <Tabs />
        )
    }
}

AppRegistry.registerComponent('App', () => App)
