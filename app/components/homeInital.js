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
  ScrollView,


} from 'react-native';



export default class HomeInital extends Component {
  constructor(props){
    super(props);
    this.state={
      language:'Select Any Name',
      value: 30,
      redSlider:0,
      greenSlider:0,
      blueSlider:0,
      alphaSlider:0.6,




    };




  }





  render(){


    return (
      <View>
        <View style={styles.selectContainer}>
          <View style={styles.selectTitleContainer}>
            <Text style={styles.selectTitle}>Select Name :</Text>
          </View>
          <View >
            <Picker style={styles.namePicker}
              selectedValue={this.state.language}
              onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
              <Picker.Item label="Karthik" value="Karthi" />
            </Picker>
          </View>
        </View>
        <View style={styles.slidersizeContainer} >
          <View >
            <Text >Text Size:</Text>
          </View>
          <View style={styles.sliderContainer}>
            <Slider minimumValue={15}
              value={this.state.value}
              maximumValue={200}
              onValueChange={(value)=> this.setState({value})}
            />
          </View>
          <View>

          <Text >{this.state.value}</Text>
          </View>
        </View>
       <View style={styles.displayText}>
         <ScrollView contentContainerStyle={{flexGrow : 1, justifyContent : 'center'}}>
            <Text style={[styles.size,{fontSize: this.state.value },
              {color:'rgba('+this.state.redSlider+','+this.state.greenSlider+','+this.state.blueSlider+','+this.state.alphaSlider+')'}]}>
                {this.state.language}</Text>
        </ScrollView>
        </View>
        <View style={styles.rgbacontainer}>
            <View style={styles.slidersizeContainer} >
                <View style={styles.sliderText} >
                  <Text style={{color:'red'}} >RED</Text>
                </View>
                <View style={styles.sliderContainer}>
                  <Slider minimumValue={0}
                    value={this.state.redSlider}
                    maximumValue={255}
                    onValueChange={(redSlider)=> this.setState({redSlider})}
                  />
                </View>
                <View>
                  <Text >{parseInt(this.state.redSlider)}</Text>
                </View>
            </View>

            <View style={styles.slidersizeContainer} >
                <View style={styles.sliderText} >
                  <Text style={{color:'green'}} >Green</Text>
                </View>
                <View style={styles.sliderContainer}>
                  <Slider minimumValue={0}
                    value={this.state.greenSlider}
                    maximumValue={255}
                    onValueChange={(greenSlider)=> this.setState({greenSlider})}
                  />
                </View>
                <View>
                  <Text >{parseInt(this.state.greenSlider)}</Text>
                </View>
            </View>

            <View style={styles.slidersizeContainer} >
                <View style={styles.sliderText}>
                  <Text style={{color:'blue'}} >Blue</Text>
                </View>
                <View style={styles.sliderContainer}>
                  <Slider minimumValue={0}
                    value={this.state.blueSlider}
                    maximumValue={255}
                    onValueChange={(blueSlider)=> this.setState({blueSlider})}
                  />
                </View>
                <View>
                  <Text >{parseInt(this.state.blueSlider)}</Text>
                </View>
            </View>

            <View style={styles.slidersizeContainer} >
                <View style={styles.sliderText} >
                  <Text >Alpha</Text>
                </View>
                <View style={styles.sliderContainer}>
                  <Slider minimumValue={0.0}
                    value={this.state.alphaSlider}
                    maximumValue={1}
                    onValueChange={(alphaSlider)=> this.setState({alphaSlider})}
                  />
                </View>
                <View>
                  <Text >{parseFloat(this.state.alphaSlider)}</Text>
                </View>
            </View>
        </View>
        
    </View>




   );
  }
}

const styles=StyleSheet.create({
  size:{
    fontSize:15,
    textAlign: 'center',
    textAlignVertical: "center",


  },
  selectContainer:{
    flexDirection: 'row',
    justifyContent:'space-between',
  },
  selectTitleContainer: {
    paddingTop : 9,
    paddingLeft: 5,
    paddingBottom: 5,
    paddingRight: 5,

  },
  selectTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  namePicker:{
    height: 50,
    width: 220,
    color: '#3949ab'
  },
 sliderContainer:{
   flex: 2,

 },
 slidersizeContainer:{
   flex: 1,
   flexDirection: 'row',
   justifyContent:'space-between',
   paddingBottom:20,
   paddingRight: 10,
 },
 displayText:{
   marginTop: 10,
   marginBottom:10,
   height: 300,

   backgroundColor:'#ecf0f1',
 },
 sliderText:{
 },

});
