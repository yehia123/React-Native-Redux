import { createStackNavigator } from "react-navigation";
import Home from "../components/Home";
import Profile from "../components/Profile";
import {AppRegistry} from "react-native";

export const Tabs =  createStackNavigator({
    Login: {
        Home
    },
    profile: {
        Profile:
    }
})

AppRegistry.registerComponent('Tabs', () => Tabs);