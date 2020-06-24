import React,{ Component } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Card, Left, Item } from 'native-base';
import {Text, View , Image,TextInput,TouchableOpacity,StatusBar,StyleSheet}from 'react-native';
import styles from '../registerForm/RegisterScreenStyle';


export default class RegisterScreen extends Component{
    render(){
        return(
            <ScrollView>
                 <View style={styles.View}>
                    <StatusBar barStyle="dark-content" hidden={false} backgroundColor={"#FFFFFF"} />
                    <Image style={styles.img} source={require('../../assest/aa.png')}></Image>
                    <Text style={styles.singin}>Sing Up</Text>
                    <Item style={styles.item}>
                        <Image style={styles.a1img} source={require('../../assest/a1.png')}></Image>
                        <TextInput
                            placeholder="Username"
                            onChangeText={text => this.setState({ userName: text })}
                        />
                    </Item>
                    <Item style={styles.item1}>
                        <Image style={styles.a2img} source={require('../../assest/email.png')}></Image>
                        <TextInput
                            placeholder="email"
                            onChangeText={text => this.setState({ password: text })}
                        />
                    </Item>
                    <Item style={styles.item2}>
                        <Image style={styles.a2img} source={require('../../assest/a2.png')}></Image>
                        <Image style={styles.a3img} source={require('../../assest/a3.png')}></Image>
                        <TextInput
                            secureTextEntry={true}
                            placeholder="password"
                            onChangeText={text => this.setState({ password: text })}
                        />
                    </Item>
                    <TouchableOpacity style={styles.Button}>
                        <Text style={styles.Text} onPress={()=>this.props.navigation.navigate('LoginScreen')}>
                            Register
                            </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}

