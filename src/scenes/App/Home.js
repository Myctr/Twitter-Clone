import React, {useMemo, useState} from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Avatar from '../../components/Avatar';
import ComposerFab from '../../components/ComposerFab';
import PostCard from '../../components/PostCard';
import SegmentedTabs from '../../components/SegmentedTabs';
import XLogo from '../../components/XLogo';
import {useDrawer} from '../../components/SideDrawer';
import posts, {currentUser} from '../../data';
import {useTheme} from '../../theme';

const TABS = ['Sizin için', 'Takip edilenler'];

const Home = () => {
  const {colors, spacing} = useTheme();
  const {open} = useDrawer();
  const [tab, setTab] = useState(TABS[0]);

  const feed = useMemo(
    () => (tab === TABS[0] ? posts : [...posts].reverse()),
    [tab],
  );

  return (
    <SafeAreaView
      edges={['top']}
      style={[styles.container, {backgroundColor: colors.background}]}>
      <View
        style={[
          styles.header,
          {
            borderBottomColor: colors.border,
            paddingHorizontal: spacing.lg,
          },
        ]}>
        <TouchableOpacity accessibilityLabel="Open menu" onPress={open}>
          <Avatar
            name={currentUser.name}
            size={32}
            source={currentUser.avatar}
          />
        </TouchableOpacity>
        <View style={styles.center}>
          <XLogo size={22} />
        </View>
        <TouchableOpacity accessibilityLabel="Settings">
          <Ionicons color={colors.text} name="settings-outline" size={22} />
        </TouchableOpacity>
      </View>

      <SegmentedTabs activeTab={tab} onChange={setTab} tabs={TABS} />

      <FlatList
        data={feed}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => <PostCard post={item} />}
        showsVerticalScrollIndicator={false}
      />

      <ComposerFab onPress={() => {}} />
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
  },
  center: {
    alignItems: 'center',
    flex: 1,
  },
});

export default Home;
