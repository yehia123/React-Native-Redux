import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
//import Header from './src/components/header'
import SigninBackground from "./src/components/signinBackground";

export default class App extends Component {

    render() {
        return (
            <SigninBackground/>
    )
    }
}

AppRegistry.registerComponent('App', () => App)
