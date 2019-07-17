import React, { Component } from 'react';
import { 
    AppRegistry, 
    StyleSheet, 
    Image,
    View,
    Text
    } from 'react-native';
import RowCircles from "./RowCircles"

export default class SwipePage extends Component {
    render() {
        return (
            // Try setting `flexDirection` to `column`.
            <View style={styles.container}>
                <Text>Hello </Text>
                <View style={styles.square} />
                <RowCircles />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    square: {
        width: 300,
        height: 400,
        backgroundColor: 'red',
    }
});

AppRegistry.registerComponent('SwipePage', () => SwipePage)

