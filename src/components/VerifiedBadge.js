import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useTheme} from '../theme';

const VerifiedBadge = ({size = 15}) => {
  const {colors} = useTheme();
  return <Ionicons name="checkmark-circle" size={size} color={colors.accent} />;
};

export default VerifiedBadge;
