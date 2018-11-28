/**
CODER:KARTHIK A
This is try Project
Learning React native :-)..../
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Picker,
  Slider,
  Switch,
  ScrollView,
  Button,
  CameraRoll,
  Image,
  ViewPagerAndroid

} from 'react-native';

import HomeInital from './homeInital';



export default class TryAppHome extends Component {
  constructor(props){
    super(props);
    this.state={

      toggled:false ,
      photos:[],
      status:false,

    };

  }

  _handleButtonPress = () => {
   CameraRoll.getPhotos({
       first: 20,
       assetType: 'Photos',
     })
     .then(r => {
       this.setState({ photos: r.edges });
     })
     .catch((err) => {
        //Error Loading Images
     });
   };

  render(){


    return (

      <View style={{flex: 1}}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}> Try App </Text>
        </View>
        <ViewPagerAndroid initialPage={1} style={styles.pager} >
          <View key="0">
            <View>
            <Button title="Load Images" onPress={this._handleButtonPress} onLongpress={()=>this.setState({photos:''})} />
             <ScrollView style={{backgroundColor:'#9e9e9e'}}>
               {this.state.photos.map((p, i) => {
               return (
                 <Image
                   key={i}
                   style={{

                     height: 100,
                     width: '100%',
                     resizeMode : 'cover',


                   }}
                   source={{ uri: p.node.image.uri }}
                 />
               );
             })}
             </ScrollView>

            </View>
          </View>

          <View key="1">
            <HomeInital />

          </View>

          <View key="2">
            <View >
              <Text> Change UI color:  </Text>
                <Switch
                  onTintColor={'#2ecc71'}
                  thumbTintColor={'#16a085'}
                  onValueChange={(value)=> this.setState({ toggled: value}) }
                  value={this.state.toggled}/>
            </View>
          </View>
        </ViewPagerAndroid>



      </View>




   );
  }
}

const styles=StyleSheet.create({
  size:{
    fontSize:30,
  },
  titleContainer:{
    height: 50,
    backgroundColor:'#3949ab',

  },
  title:{
    fontSize:20,
    fontWeight: 'bold',
    color:'#ffffff',
    textAlign: 'left',
    padding: 10,

  },
  pager:{
    flex: 1,
    marginTop: 7,

  },

});
