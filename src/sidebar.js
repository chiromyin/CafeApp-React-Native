import React, {Component} from 'react';
import {Platform, StyleSheet,ScrollView,Image,Text, View,SafeAreaView,ImageBackground,TouchableOpacity} from 'react-native';
import {NavigationActions} from 'react-navigation';

export default class SideBar extends Component {
  navigationToScreen = (route) => () =>{
    const navigationAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigationAction)
    this.props.navigation.closeDrawer()
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{flex:1}}>
            <ImageBackground source={require('./images/img.jpeg')} style={{justifyContent:'center',padding:20,width:300,height:200}}>
              <Image source={require('./images/profile.jpeg')} style={{width:120,height:120,borderRadius:60}}/>
              <View style={{marginTop:10,paddingLeft:10}}>
                <Text style={{fontSize:16}}>yin chrom</Text>
                <Text style={{fontSize:15}}>yinchirom@gmail.com</Text>
              </View> 
            </ImageBackground>
          </View >
          <View style={{flex:2,paddingTop:8}}>
            <TouchableOpacity style={{flexDirection:'row',alignItems:'center',padding:18}} 
              onPress={this.navigationToScreen('HomePage')}>
              <Image source={require('./icon/home.png')} style={{width:30,height:30}}/>
              <Text style={{fontSize:20, marginLeft:35}}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row',alignItems:'center',padding:18}} 
              onPress={this.navigationToScreen('MenuPage')}>
              <Image source={require('./icon/menu.png')} style={{width:30,height:30}}/>
              <Text style={{fontSize:20, marginLeft:35}}>Menu</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row',alignItems:'center',padding:18}}>
              <Image source={require('./icon/like.png')} style={{width:30,height:30}}/>
              <Text style={{fontSize:20, marginLeft:35}}>Favorite</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row',alignItems:'center',padding:18}}>
              <Image source={require('./icon/settings.png')} style={{width:30,height:30}}/>
              <Text style={{fontSize:20, marginLeft:35}}>Setting</Text>
            </TouchableOpacity> 
            <TouchableOpacity style={{flexDirection:'row',alignItems:'center',padding:18}} 
               onPress={this.navigationToScreen('LoginScreen')}>
              <Image source={require('./icon/logout.png')} style={{width:30,height:30}}/>
              <Text style={{fontSize:20, marginLeft:35}}>Log Out</Text>
            </TouchableOpacity> 
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    
  }
})
