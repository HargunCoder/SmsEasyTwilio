//this is ou button component we have added to add button functionality
// read more about it in notes
//importing components to use
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
// creating component button
const Button = ({ whenPressed, children }) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity
     style={buttonStyle}
     onPress={whenPressed}
    >
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};
// we will now style the button for having a more button like look
// we use flex:1 so that the full sapce is taken up by view
// alignItems gives instruction to child inside container how to style
// themselves using justify content rules
// we use alignSelf which tells an item how to style itself
// for view we used stretch to make it take up complete space
// for text we used center to center the text

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderColor: '#007aff',
    borderWidth: 1,
    marginLeft: 10,
    marginRight: 10

  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 18,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10

  }
};


//exporting button for use
export {Button};
