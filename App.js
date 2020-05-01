global.addEventListener
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

// import News from './src/components/News'
// import SignUp from './src/screens/Signup'
import AppNav from './src/navigation/SwitchNavigator';
import reducer from './src/reducers';

const middleWare = applyMiddleware(thunkMiddleware);
const store = createStore(reducer, middleWare);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppNav />
            </Provider>
        );
    }
}
