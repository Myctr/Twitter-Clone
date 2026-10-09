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
import {useTheme} from '../../theme';

const Forgot = ({navigation}) => {
  const {colors, spacing, typography} = useTheme();
  const [identifier, setIdentifier] = useState('');
  const [sent, setSent] = useState(false);
  const canSend = identifier.trim().length > 4;

  if (sent) {
    return (
      <SafeAreaView
        style={[styles.container, {backgroundColor: colors.background}]}>
        <ScreenHeader onBack={() => navigation.goBack()} showBorder={false} />
        <View style={[styles.body, {padding: spacing.xl}]}>
          <Ionicons color={colors.accent} name="mail-outline" size={40} />
          <Text
            style={[
              typography.title,
              {color: colors.text, marginTop: spacing.lg},
            ]}>
            Bağlantı gönderildi
          </Text>
          <Text
            style={[
              typography.body,
              {color: colors.textMuted, marginTop: spacing.sm},
            ]}>
            {identifier} adresine şifre sıfırlama bağlantısı gönderdik.
          </Text>
        </View>
        <View style={[styles.footer, {padding: spacing.xl}]}>
          <PillButton
            label="Girişe dön"
            onPress={() => navigation.navigate('PreLogin')}
          />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={[styles.container, {backgroundColor: colors.background}]}>
      <SafeAreaView style={styles.container}>
        <ScreenHeader onBack={() => navigation.goBack()} showBorder={false} />

        <View style={[styles.body, {padding: spacing.xl}]}>
          <Text style={[typography.title, {color: colors.text}]}>
            Şifreni sıfırla
          </Text>
          <Text
            style={[
              typography.body,
              {color: colors.textMuted, marginTop: spacing.sm},
            ]}>
            Hesabına bağlı telefon numarasını veya e-posta adresini gir.
          </Text>

          <View style={{marginTop: spacing.xl}}>
            <TextField
              autoCapitalize="none"
              label="Telefon veya e-posta"
              onChangeText={setIdentifier}
              value={identifier}
            />
          </View>
        </View>

        <View style={[styles.footer, {padding: spacing.xl}]}>
          <PillButton
            disabled={!canSend}
            label="Sıfırlama bağlantısı gönder"
            onPress={() => setSent(true)}
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
  body: {
    flex: 1,
  },
  footer: {
    alignItems: 'center',
  },
});

export default Forgot;
