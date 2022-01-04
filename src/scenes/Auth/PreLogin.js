import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {CancelBar} from '../../components/Navbar';
import Logo from '../../components/Logo';
import {Header} from '../../components/Header';
import {StartTextInput} from '../../components/TextInputs';
import {SimpleButton} from '../../components/Buttons';
import styles from '../../styles/preLogin';
import changeNavigationBarColor, {
  hideNavigationBar,
  showNavigationBar,
} from 'react-native-navigation-bar-color';

const LoginStart = props => {
  const [barVisible, setBarVisible] = useState(false);
  const [username, setUsername] = useState();

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
          props.navigation.navigate('Welcome');
        }}
      />
      <Logo />
      <Header
        title={'To get started, first enter your phone, email, or @username'}
      />
      <StartTextInput
        placeholder={'Phone, email, or username'}
        onFocus={() => {
          setBarVisible(true);
        }}
        onEndEditing={() => {
          setBarVisible(false);
        }}
        editable={true}
        value={username}
        setValue={setUsername}
        iconName={'times-circle'}
        iconSize={15}
        onPress={() => {
          setUsername('');
        }}
        solid={true}
      />

      <View
        style={[
          styles.bottom,
          {justifyContent: barVisible ? 'flex-start' : 'flex-end'},
        ]}>
        <SimpleButton
          text={'Next'}
          value={username}
          onPress={() => {
            props.navigation.navigate('Login', {
              username: username,
            });
          }}
        />
        <View>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Forgot');
            }}>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginStart;
