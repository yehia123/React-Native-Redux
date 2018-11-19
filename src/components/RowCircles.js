import React, { Component } from 'react';
import { 
    AppRegistry, 
    StyleSheet, 
    Image,
    View,
    Text
    } from 'react-native';

export default class RowCircles extends Component {
    render() {
        return (
            // Try setting `flexDirection` to `column`.
            <View style={styles.container}>
                <View style={styles.circle} />
                <View style={styles.circle} />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    circle: {
        width: 80,
        height: 80,
        borderRadius: 80/2,
        backgroundColor: 'red',
        margin: 50
    }
});

AppRegistry.registerComponent('RowCircles', () => RowCircles)

