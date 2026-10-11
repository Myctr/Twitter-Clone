import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AppBottomTabs from './AppBottomTabs';
import Forgot from '../scenes/Auth/Forgot';
import Login from '../scenes/Auth/Login';
import PreLogin from '../scenes/Auth/PreLogin';
import PreRegister from '../scenes/Auth/PreRegister';
import Register from '../scenes/Auth/Register';
import Welcome from '../scenes/Auth/Welcome';
import {useTheme} from '../theme';

const Stack = createStackNavigator();

const AuthenticateStack = () => {
  const {colors} = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {backgroundColor: colors.background},
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        headerShown: false,
      }}>
      <Stack.Screen component={Welcome} name="Welcome" />
      <Stack.Screen component={PreLogin} name="PreLogin" />
      <Stack.Screen component={Login} name="Login" />
      <Stack.Screen component={Forgot} name="Forgot" />
      <Stack.Screen component={PreRegister} name="PreRegister" />
      <Stack.Screen component={Register} name="Register" />
      <Stack.Screen component={AppBottomTabs} name="App" />
    </Stack.Navigator>
  );
};

export default AuthenticateStack;
