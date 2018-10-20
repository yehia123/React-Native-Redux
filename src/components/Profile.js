import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import { AppRegistry, Button, View, Text, StyleSheet} from 'react-native';

export default class Profile extends Component {
    onPressButton = () => {
        console.log('test');
    }
    render() {
        return (
            // Try setting `flexDirection` to `column`.
            <ImageBackground
                resizeMode={'cover'}
                source={{uri: 'https://placeimg.com/640/480/animals'}}
                style={{flex: 1, width: '100%', height: '100%'}}>
                <Button
                    onPress={()=> this.props.navigation.goBack()}
                    title="Sign Out"
                    color="#841584"
                />
               <View style={ styles.bigblue }>>
                   <Text>Hello Welcome</Text>
               </View>
            </ImageBackground>
        );
    }
};
const styles = StyleSheet.create({
    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    },
});

AppRegistry.registerComponent('Profile', () => Profile)

