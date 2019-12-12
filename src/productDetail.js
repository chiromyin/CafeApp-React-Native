import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,SafeAreaView,FlatList,Image,Button,ActivityIndicator,TouchableOpacity} from 'react-native';

export default class ProductDetailScreen extends Component {

  constructor(props){
    super(props);
    this.state={
      amount:''
    }
  }

  render(){
    const {amount} = this.state
    const { navigation } = this.props;
    const price = (navigation.getParam('prices'));
    const name = (navigation.getParam('names'));
    // const totalPrice = ({price} * this.state.amount)
      return (
        <View style={{flex:1,paddingTop:10,paddingBottom:10}}>        
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Image source={{uri:navigation.getParam('images')}} style={{backgroundColor:'#fff',width:'120%',height:'120%',resizeMode:'contain'}}/>
          </View>
          <View style={{flex:2}}>
            <View style={{flex:1}}>
              <Text style={{fontSize:30,color:'#008000',textAlign:'center',flex:1}}>{name}</Text>
              <View style={{flex:1,flexDirection:'row'}}>
                <View style={{alignItems:'center',justifyContent:'center',borderBottomColor:'#000',borderBottomWidth:1,borderTopColor:'#000',borderTopWidth:1,flex:1}}>
                  <Text style={{fontSize:35,textAlign:'center'}}>{price}</Text>
                </View>
                <View style={{alignItems:'center',justifyContent:'center',borderLeftWidth:1,borderLeftColor:'#000',borderBottomColor:'#000',borderBottomWidth:1,borderTopColor:'#000',borderTopWidth:1,flex:1}}>
                  {/* <Text >{(navigation.getParam('prices'))}</Text> */}
                  <TextInput style={{alignItems:'center',backgroundColor:'#fff'}}
                    placeholder='Amount'
                    onChangeText={(amount)=>this.setState({amount})}
                  />
                </View >
              </View>
              <View style={{flex:1,flexDirection:'row',padding:10}}>
                <Text style={{fontSize:30,flex:1,alignItems:'flex-end',justifyContent:'flex-end'}}>Total Price : </Text>
                <Text style={{fontSize:30,flex:1,alignItems:'center',textAlign:'center'}}> {price}</Text>
              </View>
            </View>
            <View style={{flex:1,paddingLeft:10,paddingRight:10,justifyContent:'flex-end'}}>
              <TouchableOpacity style={{backgroundColor:'#00a364',padding:15,justifyContent:'center',alignItems:'center',borderRadius:10}}>
                <Text style={{color:'#fff'}}>Place Order</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{backgroundColor:'#00a364',marginTop:10,padding:15,justifyContent:'center',alignItems:'center',borderRadius:10}}>
                <Text style={{color:'#fff'}}>Add To Cart</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{backgroundColor:'#00a364',marginTop:10,padding:15,justifyContent:'center',alignItems:'center',borderRadius:10}}>
                <Text style={{color:'#fff'}}>Add To Favorite</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    }
  }


