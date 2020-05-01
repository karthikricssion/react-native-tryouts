import React from 'react';
import { 
    View, 
    Text,
    TextInput,
    StyleSheet,
    Button,
    TouchableOpacity
} from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateEmail, updatePassword, signup } from '../actions/user'

import Firebase from '../config/Firebase';

class Signup extends React.Component {
    handleSignUp = () => {
        this.props.signup()
        this.props.navigation.navigate('Profile')
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

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ updateEmail, updatePassword, signup }, dispatch)
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Signup)
