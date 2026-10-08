import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useTheme} from '../theme';

const EmptyState = ({icon, title, description, actionLabel, onAction}) => {
  const {colors, spacing, typography} = useTheme();

  return (
    <View style={[styles.container, {padding: spacing.xxl}]}>
      <Ionicons color={colors.textMuted} name={icon} size={44} />
      <Text
        style={[
          typography.heading,
          styles.title,
          {color: colors.text, marginTop: spacing.lg},
        ]}>
        {title}
      </Text>
      {description ? (
        <Text
          style={[
            typography.body,
            styles.description,
            {color: colors.textMuted, marginTop: spacing.sm},
          ]}>
          {description}
        </Text>
      ) : null}
      {actionLabel && onAction ? (
        <TouchableOpacity onPress={onAction} style={{marginTop: spacing.lg}}>
          <Text style={[typography.button, {color: colors.accent}]}>
            {actionLabel}
          </Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
  },
});

export default EmptyState;
