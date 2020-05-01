import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/Login';
import SignUp from '../screens/Signup';
import Profile from '../screens/Profile';

const Stack = createStackNavigator();

const AppNavigation = props => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="Profile" component={Profile} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation