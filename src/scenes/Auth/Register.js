import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {ReturnBar} from '../../components/Navbar';
import Logo from '../../components/Logo';
import {Header} from '../../components/Header';
import {LoginTextInput} from '../../components/TextInputs';
import {SimpleButton} from '../../components/Buttons';
import styles from '../../styles/registerStyles';

const Register = ({route, navigation}) => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ReturnBar
        onPress={() => {
          navigation.navigate('PreRegister');
        }}
      />
      <Logo />
      <Header title="Create your account" />
      <LoginTextInput value={route.params.name} />
      <LoginTextInput value={route.params.phoneNumber} />
      <LoginTextInput value={route.params.date} />
      <Text style={styles.privacyText}>
        By signing up, you agree to the{' '}
        <Text style={styles.touchableOpacity}>Terms of Service</Text> and
        <Text style={styles.touchableOpacity}>Privacy Policy</Text>, including{' '}
        <Text style={styles.touchableOpacity}>Cookie Use</Text>. Others will be
        able to find you by email or phone number when provided.
        <Text style={styles.touchableOpacity}>Privacy Options</Text>
      </Text>
      <View style={styles.bottom}>
        <SimpleButton value={true} text={'Sign up'} />
      </View>
    </SafeAreaView>
  );
};
export default Register;
