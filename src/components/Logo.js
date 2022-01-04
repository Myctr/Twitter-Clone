import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {logoStyles} from '../styles/componentStyles';
const Logo = () => {
  return (
    <View style={logoStyles.view}>
      <Icon name="twitter" size={30} color={'#1D9BF0'} />
    </View>
  );
};
export default Logo;
