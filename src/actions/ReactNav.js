import {createStackNavigator} from "react-navigation";
import Home from "../components/Home";
import Profile from "../components/Profile";

const AppStackNavigator =  createStackNavigator({
    Login: Home,
    profile: Profile
})