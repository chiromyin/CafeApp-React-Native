import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,SafeAreaView,FlatList,Image,Button,ActivityIndicator,TouchableOpacity} from 'react-native';

export default class HomeScreen extends Component {

  constructor(props){
    super(props);
    this.state={
      dataSource: {}
    }
  }

  async componentDidMount(){
    const response = await fetch('https://api.jsonbin.io/b/5df069ecbc5ffd04009767a2/2');
    const json = await response.json();
    this.setState({
      dataSource: json
    })
  }

  render() {
    // console.warn(this.state.dataSource.items)
    if(this.state.dataSource === {}) {
      return (
        <View style={{alignItems: 'center',justifyContent: 'center'}}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    } else {
      return (
        <View>        
          <FlatList
            data={this.state.dataSource.items}
            numColumns={2}
            renderItem={({ item }) => (
              <View style={{flex:1,paddingLeft:10,paddingRight:10,paddingTop:20}}>
                <TouchableOpacity style={{flex:1,backgroundColor:'#fff',paddingLeft:10,paddingRight:10,borderBottomColor:'#000',borderWidth:0.2,elevation:19,shadowOpacity:1,borderRadius:10}}
                  onPress={() => this.props.navigation.navigate('productDetail', {
                    names: item.name,
                    prices: item.price,
                    images: item.imgURL
                  })
                }>
                  <View style={{flex:1,justifyContent:'center',alignItems:'center',padding:2}}>
                    <Text style={{fontSize:15,color:'#696969'}}>{item.name}</Text>
                  </View> 
                  <View style={{flex:2,backgroundColor:'#fff'}}>
                    <Image source={{uri:item.imgURL}} style={{height:157,resizeMode:'cover'}} />
                  </View>
                  <View style={{flex:1,padding:2}}>
                    <Text style={{fontSize:15,color:'#696969'}}>{item.price}</Text>
                  </View>                 
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={(item) => this.state.dataSource.items.indexOf(item)+''}
          />
        </View>
      );
    }
  }
}

