import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import PillButton from '../../components/PillButton';
import ScreenHeader from '../../components/ScreenHeader';
import TextField from '../../components/TextField';
import XLogo from '../../components/XLogo';
import {useTheme} from '../../theme';

const PreLogin = ({navigation}) => {
  const {colors, spacing, typography} = useTheme();
  const [identifier, setIdentifier] = useState('');
  const canContinue = identifier.trim().length > 2;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={[styles.container, {backgroundColor: colors.background}]}>
      <SafeAreaView style={styles.container}>
        <ScreenHeader
          onBack={() => navigation.navigate('Welcome')}
          showBorder={false}
        />

        <View style={[styles.body, {padding: spacing.xl}]}>
          <XLogo size={26} />
          <Text
            style={[
              typography.title,
              {color: colors.text, marginTop: spacing.xl},
            ]}>
            Başlamak için telefon, e-posta veya kullanıcı adı gir
          </Text>

          <View style={{marginTop: spacing.xl}}>
            <TextField
              autoCapitalize="none"
              label="Telefon, e-posta veya kullanıcı adı"
              onChangeText={setIdentifier}
              value={identifier}
            />
          </View>
        </View>

        <View style={[styles.footer, {padding: spacing.xl}]}>
          <PillButton
            disabled={!canContinue}
            label="İleri"
            onPress={() =>
              navigation.navigate('Login', {username: identifier.trim()})
            }
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

export default PreLogin;
