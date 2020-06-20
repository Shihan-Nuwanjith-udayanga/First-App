import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, Alert, StatusBar } from 'react-native';
import { Card, Left, Item } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import styles from '../loginForm/LoginScreenStyle'



export default class LoginScreen extends Component {
    state = {
        userName: '',
        password: ''
    } 

    showAlert() {
        Alert.alert(this.state.userName + " " + this.state.password)
    }
    validation() {
        if (this.state.userName == "shihan" && this.state.password == "123") {
            this.props.navigation.navigate('CustomerScreen')
        } else {
            Alert.alert("user name or password incorrect!")
        }
    }
    render() {
        return (
            <ScrollView>
                <View style={styles.View}>
                    <StatusBar barStyle="dark-content" hidden={false} backgroundColor={"#FFFFFF"} />
                    <Image style={styles.img} source={require('../../assest/aa.png')}></Image>
                    <Text style={styles.hello}>Hello</Text>
                    <Text style={styles.singin}>Login in to your account</Text>
                    <Item style={styles.item}>
                        <Image style={styles.a1img} source={require('../../assest/a1.png')}></Image>
                        <TextInput
                            placeholder="Username"
                            onChangeText={text => this.setState({ userName: text })}
                            value={this.state.userName}
                        />
                    </Item>
                    <Item style={styles.item1}>
                        <Image style={styles.a2img} source={require('../../assest/a2.png')}></Image>
                        <Image style={styles.a3img} source={require('../../assest/a3.png')}></Image>
                        <TextInput
                            secureTextEntry={true}
                            placeholder="Password"
                            onChangeText={text => this.setState({ password: text })}
                            value={this.state.password}
                        />
                    </Item>
                    <Text style={styles.fogot}>forgot your pssword?</Text>
                    <TouchableOpacity style={styles.Button}
                    onPress={() => this.validation()}>
                        <Text style={styles.Text}>
                            Login
                            </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}

