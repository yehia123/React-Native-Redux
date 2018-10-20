import React, { Component } from 'react'
import { AppRegistry, Navigator } from 'react-native'
import Home from "./src/components/Home"
import Profile from "./src/components/Profile"
import { createStackNavigator } from 'react-navigation'
export default class App extends Component {

    render() {
        return(
        <AppStackNavigator/>
        )
    }
}

const AppStackNavigator =  createStackNavigator({
    Login: Home,
    profile: Profile
})

AppRegistry.registerComponent('App', () => App)
