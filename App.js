import React from 'react';
import {createSwitchNavigator} from 'react-navigation';
import {AuthLoadingScreen} from "./screens/AuthLoadingScreen";
import {AppDrawerStack} from "./navigation/AppDrawerStack";
import {AuthStack} from "./navigation/AuthStack";


export default createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: AppDrawerStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
);