import React from 'react'
import { 
    View, 
    Text,
    TextInput,
    StyleSheet,
    Button,
    TouchableOpacity
} from 'react-native'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateEmail, updatePassword, login, getUser } from '../actions/user'

import Firebase from '../config/Firebase'

class Login extends React.Component {
    componentDidMount = () => {
        Firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.props.getUser(user.uid)
                if (this.props.user != null) {
                    this.props.navigation.navigate('Profile')
                }
            }
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput 
                    style={styles.inputBox}
                    value={this.props.user.email}
                    placeholder='Email'
                    autoCapitalize='none'
                    onChangeText={email => this.props.updateEmail(email)}
                />

                <TextInput 
                    style={styles.inputBox}
                    value={this.props.user.password}
                    placeholder='Password'
                    onChangeText={password => this.props.updatePassword(password)}
                    secureTextEntry={true}
                />

                <TouchableOpacity style={styles.button} onPress={this.props.login()}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <Button style={styles.buttonSignup} 
                    title="Don't have an account yet? Sign up" 
                    onPress={() => this.props.navigation.navigate('SignUp')}
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
        width: 200,
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

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ updateEmail, updatePassword, login, getUser }, dispatch)
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)
