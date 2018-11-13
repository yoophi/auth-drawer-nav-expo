import React from "react";
import {AsyncStorage, Button, View} from "react-native";
import {styles} from "../common/style";

export class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome to the app!',
    };

    render() {
        return (
            <View style={styles.container}>
                <Button title="Show me more of the app" onPress={this._showMoreApp}/>
                <Button title="Actually, sign me out :)" onPress={this._signOutAsync}/>
            </View>
        );
    }

    _showMoreApp = () => {
        this.props.navigation.navigate('Other');
    };

    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };
}