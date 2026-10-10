import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EmptyState from '../../components/EmptyState';
import SegmentedTabs from '../../components/SegmentedTabs';
import {notifications} from '../../data';
import {useTheme} from '../../theme';

const TABS = ['Tümü', 'Doğrulanmış', 'Bahsetmeler'];

const Notifications = () => {
  const {colors, spacing, typography} = useTheme();
  const [tab, setTab] = useState(TABS[0]);

  const data = tab === TABS[0] ? notifications : [];

  return (
    <SafeAreaView
      edges={['top']}
      style={[styles.container, {backgroundColor: colors.background}]}>
      <View
        style={[
          styles.header,
          {borderBottomColor: colors.border, paddingHorizontal: spacing.lg},
        ]}>
        <Text style={[typography.heading, {color: colors.text}]}>
          Bildirimler
        </Text>
        <Ionicons color={colors.text} name="settings-outline" size={22} />
      </View>

      <SegmentedTabs activeTab={tab} onChange={setTab} tabs={TABS} />

      {data.length === 0 ? (
        <EmptyState
          description="Bu sekmede şimdilik bir bildirim yok."
          icon="notifications-outline"
          title="Henüz bir şey yok"
        />
      ) : (
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity
              activeOpacity={0.8}
              style={[
                styles.row,
                {
                  borderBottomColor: colors.border,
                  paddingHorizontal: spacing.lg,
                  paddingVertical: spacing.lg,
                },
              ]}>
              <Ionicons color={item.color} name={item.icon} size={26} />
              <View style={[styles.body, {marginLeft: spacing.lg}]}>
                <Text style={[typography.body, {color: colors.text}]}>
                  {item.title}
                </Text>
                <Text
                  style={[
                    typography.caption,
                    {color: colors.textMuted, marginTop: 4},
                  ]}>
                  {item.time}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    height: 52,
    justifyContent: 'space-between',
  },
  row: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
  },
  body: {
    flex: 1,
  },
});

export default Notifications;
