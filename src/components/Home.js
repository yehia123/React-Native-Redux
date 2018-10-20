import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import { AppRegistry, Button, View, Text } from 'react-native';

export default class Home extends Component {

    render() {
        return (
            // Try setting `flexDirection` to `column`.
            <ImageBackground
                resizeMode={'cover'}
                source={{uri: 'https://placeimg.com/640/480/animals'}}
                style={{flex: 1, width: '100%', height: '100%'}}>
                <Button
                    onPress={()=> this.props.navigation.navigate('Profile')}
                    title="Login with Facebook"
                    color="#841584"
                />
            </ImageBackground>
        );
    }
};

AppRegistry.registerComponent('Home', () => Home)

