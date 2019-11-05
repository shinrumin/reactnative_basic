import React, { Component } from 'react'
import { Text, View, Alert } from 'react-native'
import styles from './styles'
import { Button, Card, InputGroup, Input, Icon as II } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class RegisterScreen extends Component {

    static navigationOptions = {
        header: null,
    };

    state = {
        username: '',
        password: '',
        confirmPassword: ''
    }

    _onNavigateLogin = () => {
        let { username, password, confirmPassword } = this.state;
        if(username.length > 0 && password.length > 0 && confirmPassword.length > 0 && password == confirmPassword){
            this.props.navigation.navigate('Login', { username })
        }else if(password != confirmPassword){
            Alert.alert('Username hoặc password bị sai !')
        }else {
            Alert.alert('Vui lòng nhập thông tin đầy đủ!')
        }
    }

    _onNavigateLogin = () => {
        this.props.navigation.navigate('Login')
    }

    render() {
        return (
            <View style={styles.container}>
                <Card style={styles.wrapTopAuth}>
                    <Text style={styles.textLoginAuth}> Đăng nhập với </Text>
                    <View style={styles.wrapButtonAuth}>
                        <View style={{ marginRight: 8 }}>
                            <Icon.Button
                                name="github"
                                backgroundColor="#24292e"
                                onPress={this.loginWithFacebook}>
                                Login with Github
                        </Icon.Button>
                        </View>
                        <View style={{ marginLeft: 8 }}>
                            <Icon.Button
                                name="facebook"
                                backgroundColor="#145388"
                                onPress={this.loginWithFacebook}>
                                Login with Facebook
                        </Icon.Button>
                        </View>
                    </View>
                </Card>

                <Text style={styles.textTitleLogin}>Đăng Ký</Text>
                <View style={{ marginTop: 32, width: '100%' }}>
                    <InputGroup style={styles.input} >
                        <II name="ios-person" style={{ color: '#162a4c' }} />
                        <Input onChangeText={value => this.setState({ username: value })} placeholder="Username" />
                    </InputGroup>
                    <InputGroup style={styles.input} >
                        <II name="ios-unlock" style={{ color: '#162a4c' }} />
                        <Input secureTextEntry={true} onChangeText={value => this.setState({ password: value })} placeholder="Password" />
                    </InputGroup>
                    <InputGroup style={styles.input} >
                        <II name="ios-unlock" style={{ color: '#162a4c' }} />
                        <Input secureTextEntry={true} onChangeText={value => this.setState({ confirmPassword: value })} placeholder="Confirm password" />
                    </InputGroup>
                    <Text style={{ marginLeft: 20, marginTop: 10, fontStyle: 'italic' }}>
                        Nếu bạn đã có tài khoản?
                        <Text onPress={this._onNavigateLogin } style={{ color: 'blue', fontStyle: 'normal' }}> Đăng nhập</Text></Text>
                </View>

                <View style={{ flex: 1, flexWrap: 'wrap', alignItems: 'center', marginTop: 42 }}>
                    <Button onPress={ this._onNavigateLogin } style={styles.buttonLogin} block info >
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>Đăng Ký</Text>
                    </Button>
                </View>
            </View>
        )
    }
}
