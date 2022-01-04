import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PreLogin from '../scenes/Auth/PreLogin';
import Login from '../scenes/Auth/Login';
import PreRegister from '../scenes/Auth/PreRegister';
import Register from '../scenes/Auth/Register';
import Forgot from '../scenes/Auth/Forgot';
import Welcome from '../scenes/Auth/Welcome';

const Stack = createStackNavigator();
const AuthenticateStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
      }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="PreLogin" component={PreLogin} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="PreRegister" component={PreRegister} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Forgot" component={Forgot} />
    </Stack.Navigator>
  );
};
export default AuthenticateStack;
