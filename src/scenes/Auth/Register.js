import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PillButton from '../../components/PillButton';
import ScreenHeader from '../../components/ScreenHeader';
import TextField from '../../components/TextField';
import {useTheme} from '../../theme';

const Register = ({navigation, route}) => {
  const {colors, spacing, typography} = useTheme();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [revealed, setRevealed] = useState(false);
  const canSubmit = username.trim().length > 2 && password.length >= 8;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={[styles.container, {backgroundColor: colors.background}]}>
      <SafeAreaView style={styles.container}>
        <ScreenHeader
          onBack={() => navigation.goBack()}
          title="Hesap oluştur"
        />

        <ScrollView
          contentContainerStyle={{padding: spacing.xl}}
          showsVerticalScrollIndicator={false}>
          <Text style={[typography.title, {color: colors.text}]}>
            Hesabını oluştur
          </Text>
          <Text
            style={[
              typography.body,
              {color: colors.textMuted, marginTop: spacing.sm},
            ]}>
            {route?.params?.name
              ? `Merhaba ${route.params.name}, son adım kaldı.`
              : 'Son adım kaldı.'}
          </Text>

          <View style={{marginTop: spacing.xl}}>
            <TextField
              label="Kullanıcı adı"
              onChangeText={setUsername}
              placeholder="kullanici_adi"
              value={username}
            />
            <View style={{height: spacing.md}} />
            <TextField
              label="Şifre"
              onChangeText={setPassword}
              secureTextEntry={!revealed}
              trailing={
                <Ionicons
                  color={colors.textMuted}
                  name={revealed ? 'eye-off-outline' : 'eye-outline'}
                  onPress={() => setRevealed(current => !current)}
                  size={20}
                />
              }
              value={password}
            />
            <Text
              style={[
                typography.caption,
                {color: colors.textMuted, marginTop: spacing.sm},
              ]}>
              En az 8 karakter kullan.
            </Text>
          </View>
        </ScrollView>

        <View style={[styles.footer, {padding: spacing.xl}]}>
          <PillButton
            disabled={!canSubmit}
            label="Kaydol"
            onPress={() => navigation.navigate('App')}
          />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
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

export default Register;
