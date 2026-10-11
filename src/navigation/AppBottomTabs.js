import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Explore from '../scenes/App/Explore';
import Grok from '../scenes/App/Grok';
import Home from '../scenes/App/Home';
import Messages from '../scenes/App/Messages';
import Notifications from '../scenes/App/Notifications';
import {DrawerProvider} from '../components/SideDrawer';
import {currentUser} from '../data';
import {useTheme} from '../theme';

const Tab = createBottomTabNavigator();

const TABS = [
  {component: Home, icon: 'home', outline: 'home-outline', title: 'Home'},
  {
    component: Explore,
    icon: 'search',
    outline: 'search-outline',
    title: 'Explore',
  },
  {
    component: Grok,
    icon: 'sparkles',
    outline: 'sparkles-outline',
    title: 'Grok',
  },
  {
    badge: 19,
    component: Notifications,
    icon: 'notifications',
    outline: 'notifications-outline',
    title: 'Notifications',
  },
  {
    badge: 1,
    component: Messages,
    icon: 'mail',
    outline: 'mail-outline',
    title: 'Messages',
  },
];

const createTabBarIcon = ({active, inactive}) =>
  function TabBarIcon({color, focused, size}) {
    return (
      <Ionicons
        color={color}
        name={focused ? active : inactive}
        size={size ?? 24}
      />
    );
  };

const AppBottomTabs = () => {
  const {colors} = useTheme();

  return (
    <DrawerProvider user={currentUser}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: colors.text,
          tabBarInactiveTintColor: colors.textMuted,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: colors.background,
            borderTopColor: colors.border,
            borderTopWidth: StyleSheet.hairlineWidth,
          },
        }}>
        {TABS.map(tab => (
          <Tab.Screen
            component={tab.component}
            key={tab.title}
            name={tab.title}
            options={{
              tabBarBadge: tab.badge,
              tabBarBadgeStyle: {
                backgroundColor: colors.accent,
                color: '#FFFFFF',
                fontSize: 10,
                fontWeight: '700',
              },
              tabBarIcon: createTabBarIcon({
                active: tab.icon,
                inactive: tab.outline,
              }),
            }}
          />
        ))}
      </Tab.Navigator>
    </DrawerProvider>
  );
};

export default AppBottomTabs;
