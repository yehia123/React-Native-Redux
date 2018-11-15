import React, { Component } from 'react';
import { AppRegistry, View, Button, Text, Image, StyleSheet} from 'react-native';
import ProfileCard from './ProfileCard';

export default class Profile extends Component {

    render() {
        return (
            // Try setting `flexDirection` to `column`.
            <View style={styles.mainView}>
                <Image 
                    source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
                    style={styles.Image} />
                <View style={styles.buttonView}>
                    <Button 
                    title="Upload Picture!"
                    color="#841584"
                    >
                        Sign Out
                    </Button>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    Image: {
        height: 100, 
        borderRadius: 50, 
        width: 100
    },
    mainView: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
});


AppRegistry.registerComponent('Profile', () => Profile)

