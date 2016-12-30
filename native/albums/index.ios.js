// Index.ios.js - place code in here for ios!!!
// Import a library to help create a component
import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// Create a Component
class App extends Component {
  render() {
    return (
      <View>
        <Header
          headerText='Albums!'
        />
        <AlbumList />
      </View>

    );
  }
}

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
