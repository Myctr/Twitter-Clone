import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {useTheme} from '../theme';

const TextField = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  keyboardType,
  autoCapitalize = 'none',
  editable = true,
  trailing,
  onFocus,
  onBlur,
  onSubmitEditing,
}) => {
  const {colors, radius, spacing, typography} = useTheme();
  const [focused, setFocused] = useState(false);
  const borderColor = focused ? colors.accent : colors.border;

  return (
    <View
      style={[
        styles.container,
        {
          borderColor,
          borderRadius: radius.sm,
          backgroundColor: colors.background,
          paddingHorizontal: spacing.md,
          paddingTop: spacing.sm,
          paddingBottom: spacing.sm,
        },
      ]}>
      {label ? (
        <Text style={[typography.caption, {color: colors.textMuted}]}>
          {label}
        </Text>
      ) : null}
      <View style={styles.row}>
        <TextInput
          autoCapitalize={autoCapitalize}
          autoCorrect={false}
          editable={editable}
          keyboardType={keyboardType}
          onBlur={event => {
            setFocused(false);
            onBlur?.(event);
          }}
          onChangeText={onChangeText}
          onFocus={event => {
            setFocused(true);
            onFocus?.(event);
          }}
          onSubmitEditing={onSubmitEditing}
          placeholder={placeholder}
          placeholderTextColor={colors.textMuted}
          secureTextEntry={secureTextEntry}
          selectionColor={colors.accent}
          style={[styles.input, typography.body, {color: colors.text}]}
          value={value}
        />
        {trailing}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    paddingVertical: 6,
  },
});

export default TextField;
