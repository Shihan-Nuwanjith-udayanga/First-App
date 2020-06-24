import React,{ Component } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Card, Left, Item } from 'native-base';
import {Text, View , Image,TextInput,TouchableOpacity,StatusBar,StyleSheet}from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


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

const styles=StyleSheet.create({

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
        top: 130,
        fontSize: 50,
        left: 75,
        fontWeight: "bold"
    },
    item: {
        position: "absolute",
        top: 280,
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
        top: 345,
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
    item2:{
        position: "absolute",
        top: 410,
        height: 50,
        width: 300,
        backgroundColor: '#EAEDF1',
        borderRadius: 50,
        paddingLeft: 50,
        shadowColor: "#000"
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

    dont: {
        bottom:0,
        position:'absolute',
        width:wp("100%"),
        backgroundColor:'#EEEEEE',
        height:30,
        alignItems:'center',
        justifyContent:'center'
    },

    last:{
        color:'#737273'
    }

}); 