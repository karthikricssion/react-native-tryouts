import React from 'react'
import { 
    View, 
    Text,
    TextInput,
    StyleSheet,
    Button,
    TouchableOpacity
} from 'react-native'

import Firebase from '../config/Firebase'

class SignUp extends React.Component {
    state = {
        name: '',
        email: '',
        password: ''
    }

    handleSignUp = () => {
        const { email, password } = this.state
        Firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => this.props.navigation.navigate('Profile'))
            .catch(error => console.log(error))
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput 
                    style={styles.inputBox}
                    value={this.state.name}
                    placeholder='Full name'
                    onChangeText={name => this.setState({ name })}
                />

                <TextInput 
                    style={styles.inputBox}
                    value={this.state.email}
                    placeholder='Email'
                    autoCapitalize='none'
                    onChangeText={email => this.setState({ email })}
                />

                <TextInput 
                    style={styles.inputBox}
                    value={this.state.password}
                    placeholder='Password'
                    onChangeText={password => this.setState({ password })}
                    secureTextEntry={true}
                />

                <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
                    <Text style={styles.buttonText}>Signup</Text>
                </TouchableOpacity>

                <Button style={styles.buttonSignup} 
                    title="Have an account! Login in" 
                    onPress={() => this.props.navigation.navigate('Login')}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff'
    },
    
    inputBox: {
        width: '85%',
        borderBottomWidth: 1,
        margin: 8,
        padding: 16,
        fontSize: 16,
        borderColor: '#d3d3d3',
        textAlign: 'center'
    },

    button: {
        width: '90%',
        borderColor: '#F6820D',
        borderWidth: 1,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 30,
        paddingVertical: 5,
        backgroundColor: '#F6820D'
    },

    buttonText: {
        fontSize: 20,
        fontWeight: '500',
        color: '#fff'
    },

    buttonSignup: {
        fontSize: 12
    }
});

export default SignUp
