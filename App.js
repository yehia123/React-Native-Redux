import React, { Component } from 'react'
import { AppRegistry, Navigator } from 'react-native'
import Home from "./src/components/Home"
import Profile from "./src/components/Profile"
import { createStackNavigator} from "react-navigation";

const AppNav =  createStackNavigator({
    Home: { screen: Home },
    Profile: { screen: Profile },
});


export default class App extends Component {

    render() {
        return(
        <AppNav />
        );
    }
}

AppRegistry.registerComponent('App', () => App)
