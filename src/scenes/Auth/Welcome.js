import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import Logo from '../../components/Logo';
import {WelcomeHeader} from '../../components/Header';
import {LogoButton, CreateAccountButton} from '../../components/Buttons';
import styles from '../../styles/welcomeStyles';
import apple_logo from '../../assets/icons/apple_logo.png';
import google_logo from '../../assets/icons/google_logo.png';
import changeNavigationBarColor, {
  hideNavigationBar,
} from 'react-native-navigation-bar-color';
const Welcome = props => {
  hideNavigationBar();
  changeNavigationBarColor('transparent', true);
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Logo />
      <WelcomeHeader title={"See what's happening in the world right now."} />

      <View style={styles.view}>
        <LogoButton imageSource={google_logo} text={'Continue with Google'} />
        <LogoButton imageSource={apple_logo} text={'Continue with Apple'} />

        <Text>or</Text>

        <CreateAccountButton
          text={'Create Account'}
          onPress={() => {
            props.navigation.navigate('PreRegister');
          }}
        />

        <View style={styles.privacyView}>
          <Text>By signing up, you are to our </Text>
        </View>
        <View style={styles.privacyView}>
          <TouchableOpacity>
            <Text style={styles.touchableOpacityText}>Terms</Text>
          </TouchableOpacity>
          <Text>{', '}</Text>
          <TouchableOpacity>
            <Text style={styles.touchableOpacityText}>Privacy Policy</Text>
          </TouchableOpacity>
          <Text>,</Text>
          <Text> and </Text>
          <TouchableOpacity>
            <Text style={styles.touchableOpacityText}>Cookie Use</Text>
          </TouchableOpacity>
          <Text>.</Text>
        </View>

        <View style={styles.privacyView}>
          <Text style={{fontSize: 16}}>Have an account already? </Text>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('PreLogin');
            }}>
            <Text style={[styles.touchableOpacityText, {fontSize: 16}]}>
              Log in
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
