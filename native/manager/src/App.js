import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
   apiKey: 'AIzaSyAywwIbb5Nc16lsE9QWNZxLku_PvBS9OUQ',
   authDomain: 'manager-d183f.firebaseapp.com',
   databaseURL: 'https://manager-d183f.firebaseio.com',
   storageBucket: 'manager-d183f.appspot.com',
   messagingSenderId: '892950571008'
 };
 firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
