import React, { Component } from 'react';
import { Container, Button, Text, CardItem, Card, Body } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { AppRegistry, StyleSheet, Image} from 'react-native';

export default class ProfileCard extends Component {

    render() {
        return (
            // Try setting `flexDirection` to `column`.
            <Card>
                <Image source={{ uri:'https://placeimg.com/640/480/animals'}} />
            </Card>
        );
    }
};


AppRegistry.registerComponent('ProfileCard', () => ProfileCard)

