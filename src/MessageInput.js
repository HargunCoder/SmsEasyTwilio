import React from 'react';
import {View, TextInput, Text} from 'react-native';

const MessageInput = ({ label, value, onChangeText }) => {
  const {inputStyle, labelStyle, containerStyle } =styles;
  return (
  <View style={containerStyle}>
   <TextInput
     style={inputStyle}
     underlineColorAndroid='transparent'
     multiline={true}
     numberOfLines={4}
     style={{ height: 250, width:300,marginLeft:30}}
     value={value}
     placeholder="Enter Message Here"
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
   flex: 1
 },
 labelStyle: {
   fontSize: 18,
   paddingLeft: 20,
   flex: 1

 },
 containerStyle: {
   height: 40,
   flex: 1,
    }
};


export { MessageInput };
