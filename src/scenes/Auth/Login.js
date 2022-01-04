import React, {useState} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {CancelBar} from '../../components/Navbar';
import Logo from '../../components/Logo';
import {Header} from '../../components/Header';
import {LoginTextInput, PasswordTextInput} from '../../components/TextInputs';
import {SimpleButton} from '../../components/Buttons';
import styles from '../../styles/loginStyles';
import changeNavigationBarColor, {
  hideNavigationBar,
  showNavigationBar,
} from 'react-native-navigation-bar-color';

const Login = ({route, navigation}) => {
  const [barVisible, setBarVisible] = useState(false);
  const [password, setPassword] = useState();
  const [passwordVisibility, setPasswordVisibility] = useState(true);

  if (barVisible) {
    showNavigationBar();
    changeNavigationBarColor('transparent', false);
  } else {
    hideNavigationBar();
    changeNavigationBarColor('transparent', true);
  }
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <CancelBar
        onPress={() => {
          navigation.navigate('Welcome');
        }}
      />
      <Logo />
      <Header title={'Enter your password'} />

      <LoginTextInput value={route.params.username} />

      <PasswordTextInput
        placeholder={'Password'}
        visibility={passwordVisibility}
        value={password}
        setValue={setPassword}
        onFocus={() => {
          setBarVisible(true);
        }}
        onEndEditing={() => {
          setBarVisible(false);
        }}
      />

      <View
        style={[
          styles.passwordVisible,
          {
            opacity: password ? 1 : 0,
          },
        ]}>
        <TouchableOpacity
          onPress={() => {
            setPasswordVisibility(!passwordVisibility);
          }}>
          <Text style={styles.passwordVisibleText}>
            {passwordVisibility ? 'Reveal password' : 'Hide password'}
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={[
          styles.bottom,
          {justifyContent: barVisible ? 'flex-start' : 'flex-end'},
        ]}>
        <SimpleButton value={password} text={'Log in'} />
        <View>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
