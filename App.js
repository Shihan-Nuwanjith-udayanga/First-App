/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { Navigator, StatusBar, Platform, StyleSheet, Text, View, Alert, AsyncStorage } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator, Header } from 'react-navigation-stack';



import LoginScreen from './src/components/loginForm/LoginScreen';
import CustomerScreen from './src/components/customerForm/CustomerScreen';
import RegisterScreen from './src/components/registerForm/RegisterScreen';


const RootStack = createStackNavigator({

  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: { header: null }
  },

  CustomerScreen: {
    screen: CustomerScreen,
    navigationOptions: { header: null }
  },

  RegisterScreen:{
    screen: RegisterScreen,
    navigationOptions:{header: null}
  }

},

  {
    initialRouteName: 'RegisterScreen',


  },
  {
    headerMode: 'screen'
  },

 
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppContainer />
      </View>
    );
  }


}




//----------------------------------------------------------------------------//

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


  
   


