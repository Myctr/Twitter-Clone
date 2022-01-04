import React, {useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {CancelBar} from '../../components/Navbar';
import Logo from '../../components/Logo';
import {Header} from '../../components/Header';
import {StartTextInput} from '../../components/TextInputs';
import {SimpleButton} from '../../components/Buttons';
import changeNavigationBarColor, {
  hideNavigationBar,
  showNavigationBar,
} from 'react-native-navigation-bar-color';
import styles from '../../styles/forgotStyles';

const Forgot = props => {
  const [barVisible, setBarVisible] = useState(false);
  const [email, setEmail] = useState();

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
      <Header title={'Find your Twitter account'} />
      <StartTextInput
        color="#1DA1F2"
        placeholder={'Enter your email, phone number, or username'}
        onFocus={() => {
          setBarVisible(true);
        }}
        onEndEditing={() => {
          setBarVisible(false);
        }}
        editable={true}
        value={email}
        setValue={setEmail}
        iconName={'times-circle'}
        iconSize={15}
        onPress={() => {
          setEmail('');
        }}
        solid={true}
      />
      <View
        style={[
          styles.bottom,
          {justifyContent: barVisible ? 'flex-start' : 'flex-end'},
        ]}>
        <SimpleButton text={'Search'} value={email} />
      </View>
    </SafeAreaView>
  );
};

export default Forgot;
