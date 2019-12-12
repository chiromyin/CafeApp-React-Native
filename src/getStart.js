import React, {Component} from 'react';
import {StyleSheet,TextInput,ImageBackground,TouchableOpacity, Text, View,Image,SafeAreaView,FlatList} from 'react-native';

export default class GetStartScreen extends Component {

  render() {
    return (
      <View style={{flex:1}}>
        <ImageBackground source ={require('./images/backgroundCoffee.png')} style={{flex:1}}>
          <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Image style={{width:120,height:120}} source={require('./icon/logo_dark.png')}/>
          </View>
          <View style={{flex:1}}>
            <Text style={{color:'#fff',padding:60,fontSize:20}}>
              The Little Coffee Shop serves specialty Coffee, fancy grilled cheese sandwiches, scratch cooking,craft ales, and cider.
            </Text>
          </View>
          <View style={{flex:1}}>
            <TouchableOpacity style={{backgroundColor:'#00a364',padding:20,position:'absolute',bottom:0,width:'100%'}}>
              <Text style={{color:'#fff',textAlign:'center',fontSize:20}}>Get Start</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

