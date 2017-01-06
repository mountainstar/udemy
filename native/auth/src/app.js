import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
 componentWillMount(){
   firebase.initializeApp({
    apiKey: "AIzaSyBdW9RZaXLmw9TQc2vkt8n5qAjgPWigTUs",
    authDomain: "auth-36995.firebaseapp.com",
    databaseURL: "https://auth-36995.firebaseio.com",
    storageBucket: "auth-36995.appspot.com",
    messagingSenderId: "654280539949"
  });
 }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
          <LoginForm />
      </View>
    );
  }
}

export default App;
