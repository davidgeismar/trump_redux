import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}> {props.headerText} </Text>
    </View>
  );
};
const styles = {
  textStyle: {
    fontSize: 20,

  },
  viewStyle: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 5 },
    elevation: 2,
    position: 'relative'
  }

};

export default Header;
