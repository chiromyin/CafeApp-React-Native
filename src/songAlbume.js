import React ,{ Component }from "react";
import {View,Text,SectionList,FlatList,Image} from 'react-native';
import FlatListForm from "./flatList";

export default class SongAlbume extends Component{
  constructor(props) {
    super(props);
    this.state = {
      dataSource:[]
     };
   }
   componentDidMount(){
    fetch("https://rallycoding.herokuapp.com/api/music_albums")
    .then(response => response.json())
    .then((responseJson)=> {
      this.setState({
       dataSource: responseJson
      })
      console.log(responseJson)
    })
    .catch(error=>console.log(error)) //to catch the errors if any
    }
  render(){
    return(
      <View>
      <FlatList
      data = {this.state.dataSource}
      renderItem={({ item }) => (
          <View style={{marginTop:20,alignItems:'center'}} >
            <View>
              <Text>{item.title}</Text>
            </View>
            <View> 
              <Image 
                style={{width:'50%',height:'50%',resizeMode:'stretch'}}
                source={{uri: item.image}}
              />
              {/* {console.log('image : ' , item.image)} */}
            </View>
            <View>
              <Text>{item.artist}</Text>
            </View>
          </View>    
      )}
    />
  </View>
    );
  }
}