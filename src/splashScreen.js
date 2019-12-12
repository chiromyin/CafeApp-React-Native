import React, {Component} from 'react';
import {StyleSheet,TextInput,ImageBackground,TouchableOpacity, Text, View,Image,SafeAreaView,FlatList} from 'react-native';

export default class SplashScreen extends Component {

  render() {
    return (
      <View style={{flex:1}}>
        <ImageBackground source ={require('./images/splash.png')} style={{flex:1}}>
          <View style={{flex:1,alignItems:'center',marginTop:60}}>
            <Image style={{width:120,height:120}} source={require('./icon/logo_dark.png')}/>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

