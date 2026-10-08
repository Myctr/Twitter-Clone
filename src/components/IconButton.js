import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useTheme} from '../theme';

const IconButton = ({icon, onPress, accessibilityLabel, size = 40, variant = 'plain'}) => {
  const {colors, radius} = useTheme();

  return (
    <TouchableOpacity
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="button"
      activeOpacity={0.7}
      onPress={onPress}
      style={[
        styles.base,
        {
          width: size,
          height: size,
          borderRadius: variant === 'circle' ? radius.pill : radius.sm,
          backgroundColor: variant === 'circle' ? colors.surface : 'transparent',
        },
      ]}>
      {icon}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default IconButton;
