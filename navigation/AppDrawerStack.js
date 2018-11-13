import {createDrawerNavigator} from "react-navigation";
import {MyHomeScreen} from "../screens/MyHomeScreen";
import {MyNotificationsScreen} from "../screens/MyNotificationsScreen";
import {AppStack} from "./AppStack";

export const AppDrawerStack = createDrawerNavigator({
    Home: {
        screen: MyHomeScreen,
    },
    Notifications: {
        screen: MyNotificationsScreen,
    },
    AppStack: {
        screen: AppStack,
    }
});