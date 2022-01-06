import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../scenes/App/Home';
import Search from '../scenes/App/Search';
import Spaces from '../scenes/App/Spaces';
import Notifications from '../scenes/App/Notifications';
import Messages from '../scenes/App/Messages';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

const AppBottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      screenOptions={{
        headerShown: false,
        tabBarLabel: () => {
          return null;
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="home"
              size={25}
              color={focused ? 'black' : 'gray'}
              solid={focused ? true : false}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="search"
              size={25}
              color={focused ? 'black' : 'gray'}
              solid={focused ? true : false}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Spaces"
        component={Spaces}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="star"
              size={25}
              color={focused ? 'black' : 'gray'}
              solid={focused ? true : false}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="bell"
              size={25}
              color={focused ? 'black' : 'gray'}
              solid={focused ? true : false}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="envelope"
              size={25}
              color={focused ? 'black' : 'gray'}
              solid={focused ? true : false}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppBottomTabs;
