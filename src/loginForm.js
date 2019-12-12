import React, {Component} from 'react';
import {StyleSheet,TextInput,StatusBar,ImageBackground,TouchableOpacity, Text, View,Image,SafeAreaView,FlatList} from 'react-native';
import SignUpScreen from './signup';

export default class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  }
  constructor(props){
    super(props);
    this.state = {
        username:'',
        password:'',
        data:{}
    } 
  }
  componentDidMount(){
    fetch("https://api.jsonbin.io/b/5deda5c2cb4ac60420769f8f")
    .then(response => response.json())
    .then((response)=> {
      this.setState({data:response})
    })
    // console.warn(response)
    }

  signin_btn = () => {
    var user = this.state.username;
    var password = this.state.password;
    var found = false;
    // console.warn(user+'    '+password)
    var userandpass = '';

    if(user == ''){
      userandpass+="user can't be empty";
    }

    if(password == ""){
      userandpass+= "\npassword can't be empty";
    }

    if(userandpass!=""){
      alert(userandpass);
      return;
    }

    contents = this.state.data.user.map(function (item) {
      // console.warn(item.username+' '+item.password)
      if(item.username==user){
        if(item.password==assword){
          found = true;
          alert('username & pass is correct')
          return;
        }else{
          found = false;
          alert('pass incorrect')
          return;
        }
      }else {
        found = false;
        alert('username incorrect')
        return;
      }
  });
    if(found == false)
    {
      alert("Username Or Password is incorrected");
    }

  }
  render() {
    return (
      <View style={{flex:1}}>
        {/* <StatusBar hidden /> */}
        <ImageBackground source ={require('./images/backgroundCoffee.png')} style={{flex:1,padding:20}}>
          <View style={{flex:2,alignItems:'center',justifyContent:'center'}}>
            <Image style={{width:120,height:120}} source={require('./icon/logo_dark.png')}/>
          </View>
          <View style={{flex:2,justifyContent:'center'}}>
            <TextInput
              placeholder='Username'
              onChangeText={(username) => this.setState({username})}
              style={{borderWidth:1,backgroundColor:'#fff',borderColor:'#00a364',padding:12,fontSize:20}} />
            <TextInput 
              placeholder='Password'
              secureTextEntry
              onChangeText={(password) => this.setState({password})}
              style={{borderWidth:1,backgroundColor:'#fff',borderColor:'#00a364',padding:12,fontSize:20,marginTop:10}} />
            <TouchableOpacity onPress={this.signin_btn} style={{backgroundColor:'#00a364',marginTop:10,padding:13}}>
              <Text style={{color:'#fff',textAlign:'center',fontSize:20}}> Sign In </Text>
            </TouchableOpacity>
            <View style={{flexDirection:'row',flex:1,justifyContent:'center',marginTop:12}}>
              <Text style={{color:'#fff',fontSize:17}}>Don't have an account ?</Text>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Signup')}>
                <Text style={{color:'#fff',fontSize:18,marginLeft:10,fontWeight:'bold'}}>Sing Up</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{flex:1}}>
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
              <Text style={{color:'#fff',fontSize:17,}}>Or Sign In with Facebook or Google</Text>  
            </View>    
            <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
              <TouchableOpacity style={{flex:1,alignItems:'flex-start',justifyContent:'flex-end'}}>
                <Image source={require('./images/facebook_button.png')} style={{width:'98%',height:'85%'}}/>
              </TouchableOpacity>
              <TouchableOpacity style={{flex:1,alignItems:'flex-end',justifyContent:'flex-end'}}>
                <Image source={require('./images/google_button.png')} style={{width:'98%',height:'85%'}}/>
              </TouchableOpacity>
            </View>       
          </View>
        </ImageBackground>
      </View>
    );
  }
}

