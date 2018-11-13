import {createStackNavigator} from "react-navigation";
import {HomeScreen} from "../screens/HomeScreen";
import {OtherScreen} from "../screens/OtherScreen";

export const AppStack = createStackNavigator({
    'AppStack.Home': HomeScreen,
    Other: OtherScreen
});