import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconButton from './IconButton';
import {useTheme} from '../theme';

const ScreenHeader = ({title, subtitle, onBack, right, showBorder = true}) => {
  const {colors, spacing, typography} = useTheme();

  return (
    <View
      style={[
        styles.header,
        {
          paddingHorizontal: spacing.md,
          paddingVertical: spacing.sm,
          borderBottomColor: colors.border,
          borderBottomWidth: showBorder ? StyleSheet.hairlineWidth : 0,
        },
      ]}>
      <View style={styles.side}>
        {onBack ? (
          <IconButton
            accessibilityLabel="Go back"
            onPress={onBack}
            icon={<Ionicons color={colors.text} name="arrow-back" size={22} />}
          />
        ) : null}
      </View>
      <View style={styles.center}>
        <Text
          numberOfLines={1}
          style={[typography.heading, {color: colors.text}]}>
          {title}
        </Text>
        {subtitle ? (
          <Text style={[typography.caption, {color: colors.textMuted}]}>
            {subtitle}
          </Text>
        ) : null}
      </View>
      <View style={[styles.side, styles.sideRight]}>{right}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  center: {
    alignItems: 'center',
    flex: 1,
  },
  side: {
    minWidth: 44,
  },
  sideRight: {
    alignItems: 'flex-end',
  },
});

export default ScreenHeader;
