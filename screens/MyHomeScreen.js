import React from "react";
import {Button, View} from "react-native";
import {styles} from "../common/style";

export class MyHomeScreen extends React.Component {
    static navigationOptions = {
        title: 'My Home',
        drawerLabel: 'Home',
    };

    render() {
        return (
            <View style={styles.container}>
                <Button
                    onPress={() => this.props.navigation.navigate('Notifications')}
                    title="Go to notifications"
                />
            </View>
        );
    }
}