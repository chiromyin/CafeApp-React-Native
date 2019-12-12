import React, {Component} from 'react';
import {Platform, StyleSheet,StatusBar,TextInput,TouchableOpacity, Text, View,Image,SafeAreaView,FlatList} from 'react-native';

export default class SignUpScreen extends Component {

  render() {
    return (
      <View style={{flex:1,padding:20}}>
        {/* <StatusBar hidden /> */}
        <View style={{flex:2,alignItems:'center',justifyContent:'center'}}>
          <Image source={require('./icon/camera.png')} style={{width:120,height:120}}/>
        </View>
        <View style={{flex:3,justifyContent:'flex-end'}}>
          <TextInput 
            placeholder='Username'
            placeholderTextColor='#00a364'
            style={{borderWidth:1,borderColor:'#00a364',fontSize:20,padding:11}}
          />
          <TextInput 
            placeholder='Email'
            placeholderTextColor='#00a364'
            style={{borderWidth:1,borderColor:'#00a364',fontSize:20, marginTop:10,padding:11}}
          />
          <TextInput 
            placeholder='Password'
            placeholderTextColor='#00a364'
            style={{borderWidth:1,borderColor:'#00a364',fontSize:20,marginTop:10,padding:11}}
          />
          <TextInput 
            placeholder='Confirm Password'
            placeholderTextColor='#00a364'
            style={{borderWidth:1,borderColor:'#00a364',fontSize:20,marginTop:10,padding:12}}
          />
        </View>
        <View style={{flex:1,justifyContent:'flex-end'}}>
            <TouchableOpacity style={{backgroundColor:'#00a364',padding:12,alignItems:'center',justifyContent:'center'}}>
              <Text style={{fontSize:20,color:'#fff'}}>SigUp</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}

