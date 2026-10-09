import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PillButton from '../../components/PillButton';
import ScreenHeader from '../../components/ScreenHeader';
import TextField from '../../components/TextField';
import XLogo from '../../components/XLogo';
import {useTheme} from '../../theme';

const Login = ({route, navigation}) => {
  const {colors, spacing, typography} = useTheme();
  const [password, setPassword] = useState('');
  const [revealed, setRevealed] = useState(false);
  const username = route?.params?.username ?? '';
  const canContinue = password.length > 0;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={[styles.container, {backgroundColor: colors.background}]}>
      <SafeAreaView style={styles.container}>
        <ScreenHeader onBack={() => navigation.goBack()} showBorder={false} />

        <View style={[styles.body, {padding: spacing.xl}]}>
          <XLogo size={26} />
          <Text
            style={[
              typography.title,
              {color: colors.text, marginTop: spacing.xl},
            ]}>
            Şifreni gir
          </Text>

          <View style={{marginTop: spacing.xl}}>
            <TextField editable={false} label="Hesap" value={username} />
            <View style={{height: spacing.md}} />
            <TextField
              label="Şifre"
              onChangeText={setPassword}
              onSubmitEditing={() => canContinue && navigation.navigate('App')}
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
          </View>
        </View>

        <View style={[styles.footer, {padding: spacing.xl}]}>
          <PillButton
            disabled={!canContinue}
            label="Giriş yap"
            onPress={() => navigation.navigate('App')}
          />
          <Text
            onPress={() => navigation.navigate('Forgot')}
            style={[
              typography.body,
              styles.link,
              {color: colors.text, marginTop: spacing.lg},
            ]}>
            Şifreni mi unuttun?
          </Text>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
  },
  footer: {
    alignItems: 'center',
  },
  link: {
    textAlign: 'center',
  },
});

export default Login;
