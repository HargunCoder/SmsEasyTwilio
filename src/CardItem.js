import React from 'react';
import { View } from 'react-native';
const CardItem = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>);
};
//making a style object to design a style for component
const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    backgroundColor: '#fff',
    padding: 5,
    borderColor: '#ddd',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative'

  }
};

//exporting CardItem to be used by other component
export {CardItem};
