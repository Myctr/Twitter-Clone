import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  Animated,
  Dimensions,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import Avatar from './Avatar';
import VerifiedBadge from './VerifiedBadge';
import {useTheme} from '../theme';

const DRAWER_WIDTH = Math.min(Dimensions.get('window').width * 0.82, 320);

const DrawerContext = createContext({open: () => {}, close: () => {}});

export const useDrawer = () => useContext(DrawerContext);

const MENU_ITEMS = [
  {icon: 'person-outline', label: 'Profile'},
  {icon: 'star-outline', label: 'Premium'},
  {icon: 'bookmark-outline', label: 'Bookmarks'},
  {icon: 'people-outline', label: 'Communities'},
  {icon: 'list-outline', label: 'Lists'},
  {icon: 'sparkles-outline', label: 'Spaces'},
  {icon: 'rocket-outline', label: 'Creator Studio'},
  {icon: 'briefcase-outline', label: 'Jobs'},
];

const SECONDARY_ITEMS = [
  {icon: 'settings-outline', label: 'Settings and privacy'},
  {icon: 'help-circle-outline', label: 'Help Center'},
];

export const DrawerProvider = ({children, user}) => {
  const [visible, setVisible] = useState(false);
  const progress = useRef(new Animated.Value(0)).current;
  const {colors, spacing, typography, mode, toggleTheme} = useTheme();
  const navigation = useNavigation();

  const animate = useCallback(
    toValue =>
      new Promise(resolve => {
        Animated.timing(progress, {
          duration: 220,
          toValue,
          useNativeDriver: true,
        }).start(() => resolve());
      }),
    [progress],
  );

  const open = useCallback(async () => {
    setVisible(true);
    await animate(1);
  }, [animate]);

  const close = useCallback(async () => {
    await animate(0);
    setVisible(false);
  }, [animate]);

  const value = useMemo(() => ({open, close}), [close, open]);

  const translateX = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [-DRAWER_WIDTH, 0],
  });

  const renderItem = item => (
    <TouchableOpacity
      activeOpacity={0.7}
      key={item.label}
      onPress={close}
      style={[styles.item, {paddingVertical: spacing.md}]}>
      <Ionicons color={colors.text} name={item.icon} size={22} />
      <Text
        style={[typography.bodyStrong, styles.itemLabel, {color: colors.text}]}>
        {item.label}
      </Text>
    </TouchableOpacity>
  );

  return (
    <DrawerContext.Provider value={value}>
      {children}
      <Modal
        animationType="none"
        onRequestClose={close}
        transparent
        visible={visible}>
        <View style={styles.modalRoot}>
          <Pressable onPress={close} style={styles.backdrop}>
            <Animated.View
              style={[
                styles.backdropFill,
                {backgroundColor: colors.overlay, opacity: progress},
              ]}
            />
          </Pressable>
          <Animated.View
            style={[
              styles.panel,
              {
                backgroundColor: colors.background,
                borderRightColor: colors.border,
                transform: [{translateX}],
                width: DRAWER_WIDTH,
              },
            ]}>
            <ScrollView
              contentContainerStyle={{paddingBottom: spacing.xxl}}
              showsVerticalScrollIndicator={false}>
              <View style={[styles.profile, {paddingHorizontal: spacing.lg}]}>
                <View style={styles.profileRow}>
                  <Avatar name={user?.name} size={44} source={user?.avatar} />
                  <View style={[styles.profileText, {marginLeft: spacing.md}]}>
                    <View style={styles.nameRow}>
                      <Text
                        numberOfLines={1}
                        style={[typography.bodyStrong, {color: colors.text}]}>
                        {user?.name ?? 'Guest'}
                      </Text>
                      <VerifiedBadge />
                    </View>
                    <Text style={[typography.meta, {color: colors.textMuted}]}>
                      {user?.username ?? '@guest'}
                    </Text>
                  </View>
                  <Ionicons
                    color={colors.textMuted}
                    name="ellipsis-horizontal"
                    size={18}
                  />
                </View>
                <View style={[styles.stats, {marginTop: spacing.md}]}>
                  <Text style={[typography.meta, {color: colors.textMuted}]}>
                    <Text style={[typography.bodyStrong, {color: colors.text}]}>
                      {user?.following ?? 0}
                    </Text>{' '}
                    Following
                  </Text>
                  <Text
                    style={[
                      typography.meta,
                      {color: colors.textMuted, marginLeft: spacing.lg},
                    ]}>
                    <Text style={[typography.bodyStrong, {color: colors.text}]}>
                      {user?.followers ?? 0}
                    </Text>{' '}
                    Followers
                  </Text>
                </View>
              </View>

              <View
                style={[styles.divider, {backgroundColor: colors.border}]}
              />
              <View style={{paddingHorizontal: spacing.lg}}>
                {MENU_ITEMS.map(renderItem)}

                <View
                  style={[
                    styles.divider,
                    {
                      backgroundColor: colors.border,
                      marginVertical: spacing.md,
                    },
                  ]}
                />

                <View style={[styles.toggleRow, {paddingVertical: spacing.sm}]}>
                  <Ionicons
                    color={colors.text}
                    name={mode === 'dark' ? 'moon-outline' : 'sunny-outline'}
                    size={22}
                  />
                  <Text
                    style={[
                      typography.bodyStrong,
                      styles.itemLabel,
                      styles.toggleLabel,
                      {color: colors.text},
                    ]}>
                    Lights out
                  </Text>
                  <Switch
                    onValueChange={toggleTheme}
                    thumbColor={colors.background}
                    trackColor={{false: colors.border, true: colors.accent}}
                    value={mode === 'dark'}
                  />
                </View>

                {SECONDARY_ITEMS.map(renderItem)}

                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={async () => {
                    await close();
                    navigation.navigate('Welcome');
                  }}
                  style={[styles.item, {paddingVertical: spacing.md}]}>
                  <Ionicons
                    color={colors.text}
                    name="log-out-outline"
                    size={22}
                  />
                  <Text
                    style={[
                      typography.bodyStrong,
                      styles.itemLabel,
                      {color: colors.text},
                    ]}>
                    Log out
                  </Text>
                </TouchableOpacity>
              </View>

              <View
                style={{marginTop: spacing.lg, paddingHorizontal: spacing.lg}}>
                <Text style={[typography.caption, {color: colors.textMuted}]}>
                  A community-built clone for learning purposes.
                </Text>
              </View>
            </ScrollView>
          </Animated.View>
        </View>
      </Modal>
    </DrawerContext.Provider>
  );
};

const styles = StyleSheet.create({
  modalRoot: {
    flex: 1,
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
  },
  backdropFill: {
    ...StyleSheet.absoluteFillObject,
  },
  panel: {
    borderRightWidth: StyleSheet.hairlineWidth,
    bottom: 0,
    left: 0,
    position: 'absolute',
    top: 0,
  },
  profile: {
    paddingTop: 56,
  },
  profileRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  profileText: {
    flex: 1,
  },
  nameRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  stats: {
    flexDirection: 'row',
  },
  divider: {
    height: StyleSheet.hairlineWidth,
  },
  item: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  itemLabel: {
    marginLeft: 16,
  },
  toggleLabel: {
    flex: 1,
  },
  toggleRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
