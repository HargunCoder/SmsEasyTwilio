import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Header extends Component {
  render (){
const { viewStyle, textStyle } = styles;
    return (
      <View style = {viewStyle}>
        <Text style= {textStyle}>{this.props.title}</Text>
      </View>
    );
  }
}
const styles={
  viewStyle: {
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    paddingTop: 15,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 25,
    color: '#000'
  }

};

export { Header };
