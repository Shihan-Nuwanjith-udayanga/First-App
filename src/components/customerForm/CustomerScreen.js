import { Button, Container, Content, Form, Header, Input, Item, Label, Text, View, Card } from 'native-base';
import React, { Component } from 'react';
import { Alert, Image, StyleSheet, TouchableOpacity, StatusBar, AsyncStorage, TextInput } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { ScrollView } from 'react-native-gesture-handler';
import styles from '../customerForm/CustomerScreenStyle'

const options = {
  title: 'Choose Photo',
  takePhotoButtonTitle: 'Take photo with your camera',
  chooseFromlLibraryTitle: 'choose photo from library'
}

export default class CustomerForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Name: '',
      Address: '',
      Contact: '',
      Nic: '',
      avatarSource: null,
      pic: null
    }
  }

  myPhoto = () => {
    // alert('clicked');
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('Image Picker Error: ', response.error);
      }

      else {
        let source = { uri: response.uri };

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source
        });
      }
    });
  }

  validation() {
    if (this.namevalidate(this.state.Name) && this.namevalidate(this.state.Address) && this.mobilevalidate(this.state.Contact) && this.nicvalidatate(this.state.Nic)) {
      // this.props.navigation.navigate('CustomerDetails')
      // this.props.navigation.navigate('cusDetails')
      this.saveData()
    } else {
      Alert.alert("user validation Invalid")
    }

  }
  //Mobile Validate
  mobilevalidate(text) {
    const reg = /^(?:0|94|\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|912)(0|2|3|4|5|7|9)|7(0|1|2|5|6|7|8)\d)\d{6}$/;
    if (reg.test(text) === false) {
      return false;
    } else {
      return true;
    }
  }

  //NIC validator
  nicvalidatate(text) {
    const reg = /^([0-9]{9}[x|X|v|V]|[0-9]{12})$/
    if (reg.test(text) === false) {
      return false;
    } else {
      return true;
    }
  }

  namevalidate(text) {
    const reg = /^[a-zA-Z ]*$/;
    if (reg.test(text) === false) {
      return false;
    } else {
      return true;
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <View style={styles.View}>
          <Image style={styles.img} source={require('../../assest/b1.png')}></Image>
          <TouchableOpacity style={styles.backArrow} onPress={() => this.props.navigation.navigate('LoginScreen')} >
            <Image source={require('../../assest/b2.png')}></Image>
          </TouchableOpacity>
        </View>
        <Text style={styles.text}>Signup</Text>
        <Image style={styles.Image} source={this.state.avatarSource}></Image>
        <TouchableOpacity onPress={this.myPhoto} style={styles.camera}>
          <View style={styles.cameraView}>
            <Image source={require('../../assest/b3.png')} style={{ left: 10, top: 10 }}></Image>
          </View>
        </TouchableOpacity>
        <Item style={styles.item}>
          <Image style={styles.a1img} source={require('../../assest/a1.png')}></Image>
          <TextInput
            placeholder="Name"
            onChangeText={text => this.setState({ Name: text })}
            value={this.state.Name}
          />
        </Item>
        <Item style={styles.item1}>
          <Image style={styles.a1img} source={require('../../assest/b4.png')}></Image>
          <TextInput
            placeholder="Address"
            onChangeText={text => this.setState({ Address: text })}
            value={this.state.Address}
          />
        </Item>
        <Item style={styles.item2}>
          <Image style={styles.a1img} source={require('../../assest/b5.png')}></Image>
          <TextInput
            placeholder="Contact"
            onChangeText={text => this.setState({ Contact: text })}
            value={this.state.Contact}
            keyboardType="numeric"
          />
        </Item>
        <Item style={styles.item3}>
          <Image style={styles.a1img} source={require('../../assest/b6.png')}></Image>
          <TextInput
            placeholder="Nic"
            onChangeText={text => this.setState({ Nic: text })}
            value={this.state.Nic}
          />
        </Item>
        <Button block style={styles.button} onPress={() => this.validation()}>
          <Text style={{ fontWeight: "bold" }}>submit</Text>
        </Button>
      </ScrollView>
    );
  }
}
