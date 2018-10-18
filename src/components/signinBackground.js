import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import { View, Text } from 'react-native';

export default class SigninBackground extends Component {
    render() {
        return (
            // Try setting `flexDirection` to `column`.
            <ImageBackground
                resizeMode={'cover'}
                style={{flex: 1}}
                source={{uri: 'https://placeimg.com/640/480/animals'}}
                style={{flex: 1, width: '100%', height: '100%'}}>
            </ImageBackground>
        );
    }
};
