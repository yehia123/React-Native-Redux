import React, { Component } from 'react'
import { AppRegistry, Navigator } from 'react-native'
import Home from "./src/components/Home"
import Profile from "./src/components/Profile"
import SwipePage from "./src/components/SwipePage"
import { createStackNavigator} from "react-navigation";

const AppNav =  createStackNavigator({
    Home: { screen: Home },
    Profile: { screen: Profile },
    SwipePage:  { screen: SwipePage }
});


export default class App extends Component {

    render() {
        return(
        <AppNav />
        );
    }
}

AppRegistry.registerComponent('App', () => App)
