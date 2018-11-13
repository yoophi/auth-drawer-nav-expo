import {createStackNavigator} from "react-navigation";
import {SignInScreen} from "../screens/SignInScreen";

export const AuthStack = createStackNavigator({SignIn: SignInScreen});