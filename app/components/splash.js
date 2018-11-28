/**
CODER:KARTHIK A
This is try Project
Learning React native :-)..../
 */

import React, { Component } from 'react';
import {
        View,
        Text,
        Image,
        StyleSheet,
      } from 'react-native';







export default class Splash extends Component {

  render(){


    return (

      <View style={styles.splashContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.splashImage} source={require('../assets/res/drawable-xxxhdpi/baseline_code_white_48.png')}/>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.splashText}>Try App</Text>
        </View>
      </View>




   );
  }
}

const styles=StyleSheet.create({
  splashContainer: {
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:'#2ecc71',
  },
  splashText:{
    fontSize: 35 ,
    fontWeight: 'bold',
    color:"white",
    
  },
  imageContainer: {

  },
  splashImage: {
    height: 70,
    width: 70,
  },
  titleContainer: {

  }

});
