import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Avatar from '../../components/Avatar';
import SegmentedTabs from '../../components/SegmentedTabs';
import TextField from '../../components/TextField';
import {useDrawer} from '../../components/SideDrawer';
import {currentUser, news, trends} from '../../data';
import {useTheme} from '../../theme';

const TABS = ['Keşfet', 'Gündem', 'Haberler', 'Spor', 'Eğlence'];

const Explore = () => {
  const {colors, spacing, typography} = useTheme();
  const {open} = useDrawer();
  const [tab, setTab] = useState(TABS[0]);
  const [query, setQuery] = useState('');

  const header = (
    <View>
      <Text
        style={[
          typography.heading,
          {color: colors.text, marginTop: spacing.lg},
        ]}>
        Bugünün haberleri
      </Text>
      {news.map(item => (
        <TouchableOpacity
          activeOpacity={0.8}
          key={item.id}
          style={[
            styles.newsCard,
            {borderColor: colors.border, marginTop: spacing.md},
          ]}>
          <View style={styles.newsText}>
            <Text style={[typography.bodyStrong, {color: colors.text}]}>
              {item.title}
            </Text>
            <Text
              style={[
                typography.caption,
                {color: colors.textMuted, marginTop: 6},
              ]}>
              {item.meta}
            </Text>
          </View>
          <View style={[styles.newsThumb, {backgroundColor: colors.surface}]} />
        </TouchableOpacity>
      ))}

      <Text
        style={[
          typography.heading,
          {color: colors.text, marginTop: spacing.xl},
        ]}>
        Gündemdekiler
      </Text>
    </View>
  );

  return (
    <SafeAreaView
      edges={['top']}
      style={[styles.container, {backgroundColor: colors.background}]}>
      <View style={{paddingHorizontal: spacing.lg}}>
        <TextField
          autoCapitalize="none"
          onChangeText={setQuery}
          placeholder="Ara"
          trailing={
            <Ionicons
              color={colors.textMuted}
              name="settings-outline"
              size={20}
            />
          }
          value={query}
        />
      </View>

      <SegmentedTabs activeTab={tab} onChange={setTab} scrollable tabs={TABS} />

      <FlatList
        ListHeaderComponent={header}
        contentContainerStyle={{
          paddingBottom: 32,
          paddingHorizontal: spacing.lg,
        }}
        data={trends}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.trend, {paddingVertical: spacing.md}]}>
            <View style={styles.grow}>
              <Text style={[typography.caption, {color: colors.textMuted}]}>
                {item.category}
              </Text>
              <Text
                style={[
                  typography.bodyStrong,
                  {color: colors.text, marginTop: 2},
                ]}>
                {item.title}
              </Text>
              <Text
                style={[
                  typography.caption,
                  {color: colors.textMuted, marginTop: 2},
                ]}>
                {item.posts}
              </Text>
            </View>
            <Ionicons
              color={colors.textMuted}
              name="ellipsis-horizontal"
              size={18}
            />
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
      />

      <TouchableOpacity
        accessibilityLabel="Open menu"
        onPress={open}
        style={[styles.fabAvatar, {backgroundColor: colors.background}]}>
        <Avatar name={currentUser.name} size={40} source={currentUser.avatar} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  newsCard: {
    borderRadius: 16,
    borderWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  newsText: {
    flex: 1,
    padding: 12,
  },
  newsThumb: {
    height: 96,
    width: 96,
  },
  trend: {
    flexDirection: 'row',
  },
  grow: {
    flex: 1,
  },
  fabAvatar: {
    borderRadius: 999,
    bottom: 16,
    left: 16,
    padding: 2,
    position: 'absolute',
    elevation: 4,
  },
});

export default Explore;
