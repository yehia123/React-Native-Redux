import React, { Component } from 'react';
import { 
    AppRegistry, 
    View, 
    Button, 
    Text, 
    Image, 
    TouchableOpacity,
    StyleSheet
} from 'react-native';


export default class Profile extends Component {

    render() {
        return (
            // Try setting `flexDirection` to `column`.
            <View style={styles.mainView}>
                <Image 
                    source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
                    style={styles.Image} />
                
                    <Button 
                    title="Upload Picture!"
                    color="#841584"
                    >
                        Sign Out
                    </Button>
                
                    <TouchableOpacity
                        onPress={ () => this.props.navigation.navigate('SwipePage')}
                        style={styles.button}
                    >
                        <Text> Start Swiping! </Text>
                    </TouchableOpacity>
                
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
    },
    button: {
        alignItems: 'stretch',
        backgroundColor: '#DDDDDD',
        padding: 10,
        marginTop: 350
    }
});


AppRegistry.registerComponent('Profile', () => Profile)

