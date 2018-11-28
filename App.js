/**
CODER:KARTHIK A
This is try Project
Learning React native :-)..../
 */

import React, { Component } from 'react';
import {
        View,
        StatusBar,
      } from 'react-native';


import TryAppHome from './app/components/tryapphome';
import Splash from './app/components/splash';




export default class App extends Component {

  render(){


    return (


        <View style={{flex: 1}}>
          <StatusBar backgroundColor="#3949ab"
             barStyle="light-content"
          />
          <TryAppHome />
        </View>
        //<Splash />






   );
  }
}
