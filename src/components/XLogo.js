import React from 'react';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {useTheme} from '../theme';

const XLogo = ({size = 28, color}) => {
  const {colors} = useTheme();
  return (
    <FontAwesome6
      name="x-twitter"
      size={size}
      color={color ?? colors.text}
      brand
    />
  );
};

export default XLogo;
