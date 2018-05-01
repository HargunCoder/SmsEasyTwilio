import React from 'react';
import { View } from 'react-native';

// we use a functional component because we just want to render the content not
// use the lifecycle Methods
const Card = (props) => {
  return (
    <View style={styles.containerStyle}>{props.children}</View>
  );
};
const styles = {
  containerStyle: {
    borderWidth: 1,           //put borderWidth of given thickness
    borderColor: '#000',      //put borderColor as black
    borderRadius: 2,          //rounds borders at the edges
    borderBottomWidth: 0,     //no borderBottomWidth as in cards styling we dont want it
    //setting shadow for android
    elevation: 2,
    //setting shadow for ios
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 0 },
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};
// exporting card to be used by other components
export {Card};
