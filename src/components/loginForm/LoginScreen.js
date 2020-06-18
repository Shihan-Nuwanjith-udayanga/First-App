import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, Alert, StatusBar } from 'react-native';
import { Card, Left, Item } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



export default class LoginScreen extends Component {
    
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
                           
                        />
                    </Item>
                    <Item style={styles.item1}>
                        <Image style={styles.a2img} source={require('../../assest/a2.png')}></Image>
                        <Image style={styles.a3img} source={require('../../assest/a3.png')}></Image>
                        <TextInput
                            secureTextEntry={true}
                            placeholder="Password"
                            onChangeText={text => this.setState({ password: text })}
                            
                        />
                    </Item>
                    <Text style={styles.fogot}>forgot your pssword?</Text>
                    <TouchableOpacity style={styles.Button}>
                        <Text style={styles.Text}>
                            Login
                            </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({

    View: {
        backgroundColor: 'white',
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        height: hp('96%'),
        width: wp('100%')
    },
    img: {
        width: 200,
        top: 0,
        right: 0,
        position: "absolute"
    },
    hello: {
        fontSize: 80,
        fontWeight: "bold",
        top: 135,
        left: 70,
        position: "absolute"
    },
    singin: {
        position: "absolute",
        top: 230,
        fontSize: 18,
        left: 75,
        fontWeight: "bold"
    },
    item: {
        position: "absolute",
        top: 330,
        height: 50,
        width: 300,
        backgroundColor: '#EAEDF1',
        borderRadius: 50,
        paddingLeft: 50,
        shadowColor: "#000"
    },
    a1img: {
        position: "absolute",
        left: 20,
        top: 15,
        width: 20,
        height: 20
    },
    item1: {
        position: "absolute",
        top: 400,
        height: 50,
        width: 300,
        backgroundColor: '#EAEDF1',
        borderRadius: 50,
        paddingLeft: 50,
        shadowColor: "#000"
    },
    passwordField: {
        position: "absolute",
        height: 50,
        width: 300,
        backgroundColor: '#EAEDF1',
        borderRadius: 50,
        top: 70,
        paddingLeft: 50
    },
    a2img: {
        position: "absolute",
        left: 20,
        top: 15,
        width: 20,
        height: 20
    },
    a3img: {
        position: "absolute",
        right: 20,
        top: 15,
        width: 25,
        height: 25
    },
    Button: {
        position: "absolute",
        width: 100,
        height: 50,
        backgroundColor: "#F9AB4B",
        borderRadius: 20,
        bottom: 90,
        left: 220
    },
    Text: {
        color: "white",
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        top: 10
    },
    fogot: {
        top:150,
        color:"#7F8994",
        left:65
    }

}); 