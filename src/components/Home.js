import React, { Component } from 'react';
import {
    AppRegistry,
    View,
    ImageBackground,
    Image,
    Button,
    Text,
    StyleSheet
} from 'react-native';

/**
 * SVG image background needs to be added..... uri={}
 * */
export default class Home extends Component {

    render() {
        return (
                <ImageBackground
                    resizeMode={'cover'}
                    source={{uri: 'https://placeimg.com/640/480/animals'}}
                    style={styles.container}
                >

                    <Button 
                        onPress={ () => this.props.navigation.navigate('Profile')}
                        title="Sign In With Facebook!"
                        color="#841584">
                    </Button>
                </ImageBackground>
        );
    }
};

const styles = StyleSheet.create({
    button: {
        flex: 1,
        height: '10%',
        backgroundColor: '#DDDDDD'
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end'
    }
})

AppRegistry.registerComponent('Home', () => Home)

