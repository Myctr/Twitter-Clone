import React from 'react';
import {Image} from 'react-native';
import {useTheme} from '../theme';

const logo = require('../assets/images/x_logo.png');

const XLogo = ({size = 28, color}) => {
  const {colors} = useTheme();
  return (
    <Image
      resizeMode="contain"
      source={logo}
      style={{height: size, tintColor: color ?? colors.text, width: size}}
    />
  );
};

export default XLogo;
