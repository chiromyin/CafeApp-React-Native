import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,SafeAreaView,FlatList,Image,Button,ActivityIndicator,TouchableOpacity} from 'react-native';

export default class MenuScreen extends Component {
  render(){
      return (
        <View style={{flex:1,padding:20}}>        
          <TouchableOpacity style={{flex:1,}}>
            <Image source={require('./images/breakfast.png')} style={{height:'100%',width:'100%'}}/>
          </TouchableOpacity>
          <TouchableOpacity style={{flex:1,paddingTop:20}}>
            <Image  source={require('./images/lunch.png')} style={{height:'100%',width:'100%'}}/>
          </TouchableOpacity>
          <TouchableOpacity style={{flex:1,paddingTop:20}}>
            <Image  source={require('./images/munchies.png')} style={{height:'100%',width:'100%'}}/>
          </TouchableOpacity>
          <TouchableOpacity style={{flex:1,paddingTop:20}}>
            <Image  source={require('./images/expresso.png')} style={{height:'100%',width:'100%'}}/>
          </TouchableOpacity>
        </View>
      );
    }
  }


