import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from './styles'
import { Button, Card, InputGroup, Input, Icon as II } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class LoginScreen extends Component {

    static navigationOptions = {
        header: null,
    };

    state = {
        username: '',
        password: ''
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            username: nextProps.navigation.state.params.username
        })
    }
    
    

    _onNavigateHome = () => {
        this.props.navigation.navigate('Main')
    }

    _onNavigateRegister = () => {
        this.props.navigation.navigate('Register')
    }

    render() {
        console.log(this.props.navigation);
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

                <Text style={styles.textTitleLogin}>Đăng Nhập</Text>
                <View style={{ marginTop: 32, width: '100%' }}>
                    <InputGroup style={styles.input} >
                        <II name="ios-person" style={{ color: '#162a4c' }} />
                        <Input value={this.state.username} onChangeText={value => this.setState({ username: value })} placeholder="Username" />
                    </InputGroup>
                    <InputGroup style={styles.input} >
                        <II name="ios-unlock" style={{ color: '#162a4c' }} />
                        <Input onChangeText={value => this.setState({ username: value })} placeholder="Password" />
                    </InputGroup>
                    <Text style={{ marginLeft: 20, marginTop: 10, fontStyle: 'italic' }}>
                        Nếu bạn chưa có tài khoản?
                        <Text onPress={this._onNavigateRegister} style={{ color: 'blue', fontStyle: 'normal' }}> Đăng ký</Text></Text>
                </View>

                <View style={{ flex: 1, flexWrap: 'wrap', alignItems: 'center', marginTop: 42 }}>
                    <Button onPress={this._onNavigateHome} style={styles.buttonLogin} block info >
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>Đăng Nhập</Text>
                    </Button>
                </View>
            </View>
        )
    }
}
