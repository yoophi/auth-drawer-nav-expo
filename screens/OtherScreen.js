import React from "react";
import {AsyncStorage, Button, StatusBar, View} from "react-native";
import {styles} from "../common/style";

export class OtherScreen extends React.Component {
    static navigationOptions = {
        title: 'Lots of features here',
    };

    render() {
        return (
            <View style={styles.container}>
                <Button title="I'm done, sign me out" onPress={this._signOutAsync}/>
                <StatusBar barStyle="default"/>
            </View>
        );
    }

    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };
}