import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Card, CardSection, Button, Header, Spinner } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
 state = { loggeIn: null };

 componentWillMount(){
   firebase.initializeApp({
    apiKey: "AIzaSyBdW9RZaXLmw9TQc2vkt8n5qAjgPWigTUs",
    authDomain: "auth-36995.firebaseapp.com",
    databaseURL: "https://auth-36995.firebaseio.com",
    storageBucket: "auth-36995.appspot.com",
    messagingSenderId: "654280539949"
  });

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      this.setState({ loggedIn: true });
    } else {
      this.setState({ loggedIn: false });
    }
  });
 }

 renderContent() {
   switch (this.state.loggedIn) {
     case true:
      return (

          <CardSection>
          <Button onPress= {() => firebase.auth().signOut()}>
            Log Out
          </Button>
        </CardSection>
       );
     case false:
      return <LoginForm />;
     default:
      return (
        <View style={styles.spinnerCenter}>
          <Spinner />
        </View>);
   }
 }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
          {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  spinnerCenter: {
    justifyContent: 'center',
    alignItems: 'center',
    height: null,
    backgroundColor: 'red'
    }
}

export default App;
