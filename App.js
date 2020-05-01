import 'react-native-gesture-handler';
import React, { Component } from 'react';

// import News from './src/components/News'
// import SignUp from './src/screens/Signup'
import AppNav from './src/navigation/SwitchNavigator'

export default class App extends Component {
    render() {
        return <AppNav />;
    }
}
