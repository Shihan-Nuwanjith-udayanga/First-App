import { Button, Container, Content, Form, Header, Input, Item, Label, Text, View, Card } from 'native-base';
import React, { Component } from 'react';
import { Alert, Image, StyleSheet, TouchableOpacity, StatusBar, AsyncStorage, TextInput } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { ScrollView } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default class CustomerForm extends Component {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <View style={styles.View}>
          <Image style={styles.img} source={require('../../assest/b1.png')}></Image>
          <TouchableOpacity style={styles.backArrow} >
            <Image source={require('../../assest/b2.png')}></Image>
          </TouchableOpacity>
        </View>
        <Text style={styles.text}>Signup</Text>
        <Image style={styles.Image}></Image>
        <TouchableOpacity  style={styles.camera}>
          <View style={styles.cameraView}>
            <Image source={require('../../assest/b3.png')} style={{ left: 10, top: 10 }}></Image>
          </View>
        </TouchableOpacity>
        <Item style={styles.item}>
          <Image style={styles.a1img} source={require('../../assest/a1.png')}></Image>
          <TextInput
            placeholder="Name"
            onChangeText={text => this.setState({ Name: text })}
            //value={this.state.Name}
          />
        </Item>
        <Item style={styles.item1}>
          <Image style={styles.a1img} source={require('../../assest/b4.png')}></Image>
          <TextInput
            placeholder="Address"
            onChangeText={text => this.setState({ Address: text })}
            //value={this.state.Address}
          />
        </Item>
        <Item style={styles.item2}>
          <Image style={styles.a1img} source={require('../../assest/b5.png')}></Image>
          <TextInput
            placeholder="Contact"
            onChangeText={text => this.setState({ Contact: text })}
            //value={this.state.Contact}
            keyboardType="numeric"
          />
        </Item>
        <Item style={styles.item3}>
          <Image style={styles.a1img} source={require('../../assest/b6.png')}></Image>
          <TextInput
            placeholder="Nic"
            onChangeText={text => this.setState({ Nic: text })}
           // value={this.state.Nic}
          />
        </Item>
        <Button block style={styles.button} >
          <Text style={{ fontWeight: "bold" }}>submit</Text>
        </Button>
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
    width: 260,
    top: 0,
    right: 0,
    position: "absolute",
  },
  backArrow:{
    position:"absolute",
    top:10,
    left:20
  },
  text: {
    position: "absolute",
    right: 30,
    top: 1e0,
    fontSize: 50,
    fontWeight: "bold",
    color: "white"
  },
  form: {
    position: "absolute",
    top: 280,
  },
  button: {
    position: "absolute",
    width: 220,
    height: 50,
    backgroundColor: "#F9AB4B",
    borderRadius: 20,
    bottom: 10,
    left:72
  },
  Image: {
    position: "absolute",
    borderRadius: 100,
    borderWidth: 0.5,
    width: 150,
    height: 150,
    left: 105,
    top: 110,
    backgroundColor: "#EBEDED"
  },
  camera: {
    position: "absolute",
    left: 150,
    top: 150,
    width: 8000,
    height: 8000
  },
  cameraView: {
    position: "absolute",
    backgroundColor: "#F8772A",
    top: 60,
    width: 50,
    height: 50,
    left: 60,
    borderRadius: 50
  },
  item: {
    position: "absolute",
    top: 330,
    left: 25,
    height: 50,
    width: 310,
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
  item1:{
    position: "absolute",
    top: 390,
    left: 25,
    height: 50,
    width: 310,
    backgroundColor: '#EAEDF1',
    borderRadius: 50,
    paddingLeft: 50,
    shadowColor: "#000"
  },
  item2:{
    position: "absolute",
    top: 450,
    left: 25,
    height: 50,
    width: 310,
    backgroundColor: '#EAEDF1',
    borderRadius: 50,
    paddingLeft: 50,
    shadowColor: "#000"
  },
  item3:{
    position: "absolute",
    top: 510,
    left: 25,
    height: 50,
    width: 310,
    backgroundColor: '#EAEDF1',
    borderRadius: 50,
    paddingLeft: 50,
    shadowColor: "#000"
  },
});