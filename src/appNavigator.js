import { createStackNavigator, createAppContainer,createDrawerNavigator } from 'react-navigation';
import HomeScreen from './home';
import FlatListForm from './flatList'
import React, {Component} from 'react';
import {Image,View,Text,TouchableOpacity} from 'react-native';
import SideBar from './sidebar';
import SignUpScreen from './signup';
import GetStartScreen from './getStart';
import SplashScreen from './splashScreen';
import LoginScreen from './loginForm';
import MenuScreen from './menu';
import ProductDetailScreen from './productDetail';

const AppCeateStackNavigatorLogin = createStackNavigator({
  Login: {screen: LoginScreen},
  Signup: {
    screen: SignUpScreen,
    navigationOptions:({navigation}) => ({
      headerTitle:<View style={{alignItems:'center',justifyContent:'center',flex:1,marginRight:50}}><Text style={{fontSize:22,textAlign:'center'}}>Sign Up</Text></View>,
      headerLeft:(<TouchableOpacity  onPress={() => navigation.goBack()}><Image source={require('./icon/backbtn.png')} style={{width:28,height:28,marginLeft:10}}/></TouchableOpacity>),
    })      
    }
  },
);

const AppCeateStackNavigatorHome = createStackNavigator(
  {
  Home: {
      screen: HomeScreen,
      navigationOptions:({ navigation }) => ({
        headerRight:(<TouchableOpacity><Image source={require('./icon/addTocart.png')} style={{width:30,height:30,marginRight:20}}/></TouchableOpacity>),
        headerTitleStyle:{alignItems:'center',justifyContent:'center',flex:1,},
        headerTitle:<View style={{alignItems:'center',justifyContent:'center',flex:1}}><Text style={{fontSize:24}}>Home</Text></View>,
        headerLeft:(<TouchableOpacity onPress={()=> navigation.openDrawer()}><Image source={require('./icon/menu-button.png')} style={{width:30,height:30,marginLeft:20}}/></TouchableOpacity>),
      }), 
    },
  productDetail:{
    screen: ProductDetailScreen,
    navigationOptions:({navigation}) =>({
      headerTitle:<View style={{marginRight:50,alignItems:'center',justifyContent:'center',flex:1}}><Text style={{fontSize:22,textAlign:'center'}}>Item</Text></View>
    })
    }
  },
);
const AppCeateStackNavigatorMenu = createStackNavigator(
  {
    Menu: {
      screen: MenuScreen,
      navigationOptions:({ navigation }) => ({
        headerRight:(<TouchableOpacity><Image source={require('./icon/addTocart.png')} style={{width:30,height:30,marginRight:20}}/></TouchableOpacity>),
        headerTitle:<View style={{alignItems:'center',justifyContent:'center',flex:1}}><Text style={{fontSize:24}}>Menu</Text></View>,
        headerLeft:(<TouchableOpacity onPress={()=> navigation.openDrawer()}><Image source={require('./icon/menu-button.png')} style={{width:30,height:30,marginLeft:20}}/></TouchableOpacity>),
      }),
    }
  },
);



const AppNavigator = createDrawerNavigator(
  {
    HomePage: {screen: AppCeateStackNavigatorHome},
    MenuPage: {screen: AppCeateStackNavigatorMenu},
    LoginScreen: {screen: AppCeateStackNavigatorLogin},
  }, 
  {
    contentComponent: SideBar
  }
)
export default createAppContainer(AppNavigator);
