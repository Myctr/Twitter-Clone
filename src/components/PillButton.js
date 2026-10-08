import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useTheme} from '../theme';

const PillButton = ({
  label,
  onPress,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  icon,
  style,
}) => {
  const {colors, radius, typography} = useTheme();
  const isPrimary = variant === 'primary';
  const isSmall = size === 'sm';

  const backgroundColor = isPrimary ? colors.accent : 'transparent';
  const borderColor = isPrimary ? 'transparent' : colors.border;
  const textColor = isPrimary ? '#FFFFFF' : colors.text;

  return (
    <TouchableOpacity
      accessibilityRole="button"
      activeOpacity={0.85}
      disabled={disabled || loading}
      onPress={onPress}
      style={[
        styles.base,
        {
          backgroundColor,
          borderColor,
          borderRadius: radius.pill,
          paddingVertical: isSmall ? 6 : 13,
          paddingHorizontal: isSmall ? 16 : 24,
          borderWidth: isPrimary ? 0 : 1,
        },
        (disabled || loading) && styles.disabled,
        style,
      ]}>
      {loading ? (
        <ActivityIndicator color={textColor} size="small" />
      ) : (
        <>
          {icon}
          <Text
            style={[
              typography.button,
              {color: textColor, marginLeft: icon ? 8 : 0},
            ]}>
            {label}
          </Text>
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  disabled: {
    opacity: 0.5,
  },
});

export default PillButton;
