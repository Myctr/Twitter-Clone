import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useTheme} from '../theme';

const SegmentedTabs = ({tabs, activeTab, onChange, scrollable = false}) => {
  const {colors, spacing, typography} = useTheme();

  const content = tabs.map(tab => {
    const isActive = tab === activeTab;
    return (
      <TouchableOpacity
        accessibilityRole="tab"
        accessibilityState={{selected: isActive}}
        activeOpacity={0.8}
        key={tab}
        onPress={() => onChange(tab)}
        style={[styles.tab, {paddingHorizontal: spacing.lg}]}>
        <Text
          style={[
            typography.tab,
            {color: isActive ? colors.text : colors.textMuted},
          ]}>
          {tab}
        </Text>
        <View
          style={[
            styles.indicator,
            {
              backgroundColor: isActive ? colors.accent : 'transparent',
            },
          ]}
        />
      </TouchableOpacity>
    );
  });

  const wrapper = scrollable ? (
    <ScrollView
      contentContainerStyle={styles.scrollContent}
      horizontal
      showsHorizontalScrollIndicator={false}>
      {content}
    </ScrollView>
  ) : (
    <View style={styles.row}>{content}</View>
  );

  return (
    <View style={[styles.container, {borderBottomColor: colors.border}]}>
      {wrapper}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  row: {
    flexDirection: 'row',
  },
  scrollContent: {
    flexDirection: 'row',
  },
  tab: {
    alignItems: 'center',
    paddingVertical: 14,
  },
  indicator: {
    borderRadius: 2,
    height: 4,
    marginTop: 10,
    width: 56,
  },
});

export default SegmentedTabs;
