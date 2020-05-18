global.addEventListener
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
// import { createStore, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
// import thunkMiddleware from 'redux-thunk';


// import News from './src/components/News'
// import SignUp from './src/screens/Signup'
// import AppNav from './src/navigation/SwitchNavigator';
// import reducer from './src/reducers';

// const middleWare = applyMiddleware(thunkMiddleware);
// const store = createStore(reducer, middleWare);

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

class Home extends Component {
    render() {
        return (
            <View style={{
                padding: 8
            }}>
                <Text>I am Home</Text>
                <View style={{
                        marginTop: 8
                }}>
                    <Button 
                        title="Detail Screen"
                        onPress={() => this.props.navigation.navigate('Detail')}
                    />
                </View>
                
                <View style={{
                        marginTop: 8
                    }}>
                    <Button                     
                        title="Open Modal"
                        onPress={() => this.props.navigation.navigate('MyModal')}
                    />
                </View>
            </View>
        )
    }
}

class DetailScreen extends Component {
    render() {
        return (
            <View style={{
                padding: 8
            }}>
                <Text>I am DetailScreen</Text>
                <View style={{
                        marginTop: 8
                }}>
                    <Button 
                        title="Open Modal"
                        onPress={() => this.props.navigation.navigate('MyModal')}
                    />
                </View>
            </View>
        )
    }
}

class ModalScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 30 }}>This is a modal!</Text>
                <Button onPress={() => this.props.navigation.goBack()} title="Dismiss" />
            </View>
        )
    }
}


const MainStack =  createStackNavigator()
const RootStack = createStackNavigator()


class MainStackScreen extends Component {
    render() {
        return (
            <MainStack.Navigator>
                <MainStack.Screen name="Home" component={Home} />
                <MainStack.Screen name="Detail" component={DetailScreen} />
            </MainStack.Navigator>
        )
    }
}

export default class App extends Component {
    render() {
        return (
            <NavigationContainer>
                <RootStack.Navigator mode="modal" headerMode="none">
                    <RootStack.Screen 
                        name="Main" 
                        component={MainStackScreen} 
                    />
                    <RootStack.Screen name="MyModal" component={ModalScreen} />
                </RootStack.Navigator>
            </NavigationContainer>
        );
    }
}
