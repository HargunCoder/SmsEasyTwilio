import React from 'react';
import {View, TextInput, Text} from 'react-native';

const Input = ({ label, value, onChangeText }) => {
  const {inputStyle, labelStyle, containerStyle } =styles;
  return (
  <View style={containerStyle}>
   <Text style= {labelStyle}>{label}</Text>
   <TextInput
     style={inputStyle}
     underlineColorAndroid='transparent'
     style={{ height: 50, width:200}}
     value={value}
     placeholder="+1 (202) 852-3908"
     onChangeText={onChangeText}
   />
  </View>);
};

const styles ={
 inputStyle: {
   color: "#000",
   paddingRight: 5,
   paddingLeft: 5,
   fontSize: 18,
   lineHeight: 23,
   flex: 3
 },
 labelStyle: {
   fontSize: 18,
   paddingLeft: 20,
   flex: 1

 },
 containerStyle: {
   height: 40,
   flex: 1,
   flexDirection: 'row',
    }
};


export { Input };
