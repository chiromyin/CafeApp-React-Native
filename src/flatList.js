import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList,Image,TouchableOpacity} from 'react-native';

export default class  FlatListForm  extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource:[]
     };
   }
   componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then((responseJson)=> {
      this.setState({
       dataSource: responseJson
      })
      // console.log(responseJson)
    })
    .catch(error=>console.log(error)) //to catch the errors if any
    }
    // FlatListItemSeparator = () => {
    //   return (
    //     <View style={{
    //        height: .5,
    //        width:"100%",
    //        backgroundColor:"rgba(0,0,0,0.5)",
    //       }}
    //     />
    //   );
    // }
 
  render() {
    return (
      <View>
        <FlatList 
          data={this.state.dataSource}
          keyExtractor= {item=>item.id}
          renderItem= {({item}, index) => (
            <View style={{alignItems:'center'}} >
            <View key = {index} style={{backgroundColor:'#d8d4cb',width:'90%',marginTop:15, borderRadius:6,flexDirection:'row'}}>
              <View style={{padding:10,width:'80%'}}>                 
                <Text>{item.name}</Text>
                <Text>{item.email}</Text>
                <Text>{item.company.bs}</Text>
              </View>
              <TouchableOpacity style={{padding:10,width:'6%',height:'6%'}}>
                  <Image source={require('./icon/next.png')} style={{resizeMode:'center'}}/>
              </TouchableOpacity>
                {/* {console.log('name : ', item.name)}
                {console.log('email : ', item.email)} */}
              </View>
            </View>
          )}  
        />
      </View>
     
    )
  }
}
