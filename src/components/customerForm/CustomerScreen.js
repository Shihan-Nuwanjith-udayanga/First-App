import { Button, Container, Content, Form, Header, Input, Item, Label, Text, View, Card } from 'native-base';
import React, { Component } from 'react';
import { Alert, Image, StyleSheet, TouchableOpacity, StatusBar, AsyncStorage, TextInput } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { ScrollView } from 'react-native-gesture-handler';
import styles from '../customerForm/CustomerScreenStyle'


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
