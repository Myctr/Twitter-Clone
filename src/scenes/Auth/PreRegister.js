import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import DatePicker from 'react-native-date-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PillButton from '../../components/PillButton';
import ScreenHeader from '../../components/ScreenHeader';
import TextField from '../../components/TextField';
import {useTheme} from '../../theme';

const formatDate = date =>
  date.toLocaleDateString('tr-TR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

const PreRegister = ({navigation}) => {
  const {colors, spacing, typography} = useTheme();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [birthDate, setBirthDate] = useState(new Date(2000, 0, 1));
  const [pickerVisible, setPickerVisible] = useState(false);
  const canContinue = name.trim().length > 1 && phone.trim().length >= 10;

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: colors.background}]}>
      <ScreenHeader onBack={() => navigation.goBack()} title="Hesap oluştur" />

      <ScrollView
        contentContainerStyle={{padding: spacing.xl}}
        showsVerticalScrollIndicator={false}>
        <Text style={[typography.title, {color: colors.text}]}>
          Seni tanıyalım
        </Text>
        <Text
          style={[
            typography.body,
            {color: colors.textMuted, marginTop: spacing.sm},
          ]}>
          Bilgilerini girerek hesabını oluştur.
        </Text>

        <View style={{marginTop: spacing.xl}}>
          <TextField
            autoCapitalize="words"
            label="Ad"
            onChangeText={setName}
            value={name}
          />
          <View style={{height: spacing.md}} />
          <TextField
            keyboardType="phone-pad"
            label="Telefon numarası"
            onChangeText={setPhone}
            value={phone}
          />
          <View style={{height: spacing.md}} />
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setPickerVisible(true)}>
            <View pointerEvents="none">
              <TextField
                editable={false}
                label="Doğum tarihi"
                trailing={
                  <Ionicons
                    color={colors.textMuted}
                    name="calendar-outline"
                    size={20}
                  />
                }
                value={formatDate(birthDate)}
              />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={[styles.footer, {padding: spacing.xl}]}>
        <PillButton
          disabled={!canContinue}
          label="İleri"
          onPress={() =>
            navigation.navigate('Register', {
              birthDate: formatDate(birthDate),
              name: name.trim(),
              phone: phone.trim(),
            })
          }
        />
      </View>

      <DatePicker
        date={birthDate}
        maximumDate={new Date()}
        mode="date"
        modal
        onCancel={() => setPickerVisible(false)}
        onConfirm={date => {
          setPickerVisible(false);
          setBirthDate(date);
        }}
        open={pickerVisible}
        theme={colors.background === '#000000' ? 'dark' : 'light'}
        title="Doğum tarihini seç"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {
    alignItems: 'center',
  },
});

export default PreRegister;
