import React from "react";
import {Button, View} from "react-native";
import {styles} from "../common/style";

export class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
        title: 'Notifications',
        drawerLabel: 'Notifications',
    };

    render() {
        return (
            <View style={styles.container}>
                <Button
                    onPress={() => this.props.navigation.goBack()}
                    title="Go back home"
                />
            </View>
        );
    }
}