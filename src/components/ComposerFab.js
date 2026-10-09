import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useTheme} from '../theme';

const ComposerFab = ({onPress}) => {
  const {colors, radius, spacing} = useTheme();

  return (
    <TouchableOpacity
      accessibilityLabel="Compose a post"
      accessibilityRole="button"
      activeOpacity={0.9}
      onPress={onPress}
      style={[
        styles.fab,
        {
          backgroundColor: colors.accent,
          bottom: spacing.xl,
          right: spacing.lg,
          borderRadius: radius.pill,
        },
      ]}>
      <Ionicons color="#FFFFFF" name="create-outline" size={24} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fab: {
    alignItems: 'center',
    elevation: 6,
    height: 56,
    justifyContent: 'center',
    position: 'absolute',
    shadowColor: '#000000',
    shadowOffset: {height: 4, width: 0},
    shadowOpacity: 0.3,
    shadowRadius: 8,
    width: 56,
  },
});

export default ComposerFab;
