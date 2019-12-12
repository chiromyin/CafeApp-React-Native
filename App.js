import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Home from './src/home';
import FlatListForm from './src/flatList';
import SongAlbume from './src/songAlbume';
import AppNavigator from './src/appNavigator';
import SplashScreen from './src/splashScreen';
import GetStartScreen from './src/getStart';
export default class App extends Component {
//   componentWillMount() {
//     this.state = {
//         view : <SplashScreen />
//     };
//   setTimeout(() => {
//     this.setState({
//       view : <GetStartScreen />
//     }) 
//   }, 5000) 
// }
  render() {
    return <AppNavigator />
  }
}
