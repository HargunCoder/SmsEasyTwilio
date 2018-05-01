import React from 'react';
import { View, ActivityIndicator } from 'react-native';
// A general spinner component using ActivityIndicator
//It has one property,size
// large,small-size of spinner
// <ActivityIndicator size={size || 'large'} />
// the first size is a property while the other size is a name given by us
// in above statement we say if size is specified use it else use large
const Spinner = ({ size }) => {
  return (
      <View style={styles.spinnerStyle}>
          <ActivityIndicator size={size || 'large'} />
      </View>
  );
};

const styles = {
  spinnerStyle: {
    //to fill full width of screen
    flex: 1,
    // to center ActivityIndicator
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:20
  }
};

export default Spinner;
