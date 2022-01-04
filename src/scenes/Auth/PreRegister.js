import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {CancelBar} from '../../components/Navbar';
import Logo from '../../components/Logo';
import {Header} from '../../components/Header';
import {StartTextInput} from '../../components/TextInputs';
import {SimpleButton} from '../../components/Buttons';
import styles from '../../styles/preRegisterStyles';
import changeNavigationBarColor, {
  hideNavigationBar,
  showNavigationBar,
} from 'react-native-navigation-bar-color';
import DatePicker from 'react-native-date-picker';

const Register = props => {
  const [barVisible, setBarVisible] = useState(false);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [date, setDate] = useState(new Date());
  const [dateModal, setDateModal] = useState(false);

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
      <Header title={'Create your account'} />
      <StartTextInput
        placeholder={'Name'}
        color="#000000"
        iconName={name.length > 3 ? 'check-circle' : 'exclamation-circle'}
        iconSize={25}
        iconColor={name.length > 3 ? '#6BE4BC' : '#E95063'}
        regular={true}
        onFocus={() => {
          setBarVisible(true);
        }}
        onEndEditing={() => {
          setBarVisible(false);
        }}
        setValue={setName}
        value={name}
        keyboardType={'twitter'}
      />
      <StartTextInput
        placeholder={'Phone number'}
        color="#000000"
        iconName={
          phoneNumber.length > 10 ? 'check-circle' : 'exclamation-circle'
        }
        iconSize={25}
        iconColor={phoneNumber.length > 10 ? '#6BE4BC' : '#E95063'}
        regular={true}
        onFocus={() => {
          setBarVisible(true);
        }}
        onEndEditing={() => {
          setBarVisible(false);
        }}
        setValue={setPhoneNumber}
        value={phoneNumber}
        keyboardType={'numeric'}
      />
      <StartTextInput
        placeholder={'Date of birth'}
        color="#000000"
        onFocus={() => {
          setDateModal(true);
        }}
        iconName={
          date.getFullYear() < 2004 ? 'check-circle' : 'exclamation-circle'
        }
        iconSize={25}
        iconColor={date.getFullYear() < 2004 ? '#6BE4BC' : '#E95063'}
        regular={true}
        value={date.toDateString()}
      />
      <DatePicker
        modal
        mode="date"
        open={dateModal}
        date={date}
        onConfirm={date => {
          setDateModal(false);
          setDate(date);
        }}
        onCancel={() => {
          setDateModal(false);
        }}
      />
      <View
        style={[
          styles.bottom,
          {justifyContent: barVisible ? 'flex-start' : 'flex-end'},
        ]}>
        {/* TODO: Yup ile verileri kontrol et */}
        <SimpleButton
          text="Next"
          value={name && phoneNumber && date}
          onPress={() => {
            props.navigation.navigate('Register', {
              name: name,
              phoneNumber: phoneNumber,
              date: date.toDateString(),
            });
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Register;
