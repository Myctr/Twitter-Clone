import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import PillButton from '../../components/PillButton';
import XLogo from '../../components/XLogo';
import {useTheme} from '../../theme';

const Welcome = ({navigation}) => {
  const {colors, spacing, typography} = useTheme();

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: colors.background}]}>
      <ScrollView
        contentContainerStyle={[styles.content, {padding: spacing.xl}]}
        showsVerticalScrollIndicator={false}>
        <XLogo size={30} />

        <Text
          style={[
            typography.display,
            styles.headline,
            {color: colors.text, marginTop: spacing.xxl},
          ]}>
          Şu anda dünyada neler oluyor?
        </Text>

        <View style={{marginTop: spacing.xxl}}>
          <PillButton
            icon={
              <FontAwesome6 brand color="#FFFFFF" name="google" size={16} />
            }
            label="Google ile devam et"
            onPress={() => {}}
          />
          <View style={{height: spacing.md}} />
          <PillButton
            icon={<FontAwesome6 brand color="#FFFFFF" name="apple" size={18} />}
            label="Apple ile devam et"
            onPress={() => {}}
          />
        </View>

        <View style={[styles.dividerRow, {marginVertical: spacing.lg}]}>
          <View style={[styles.line, {backgroundColor: colors.border}]} />
          <Text style={[typography.caption, {color: colors.textMuted}]}>
            veya
          </Text>
          <View style={[styles.line, {backgroundColor: colors.border}]} />
        </View>

        <PillButton
          label="Hesap oluştur"
          onPress={() => navigation.navigate('PreRegister')}
          variant="outline"
        />

        <Text
          style={[
            typography.caption,
            styles.legal,
            {color: colors.textMuted, marginTop: spacing.xl},
          ]}>
          Kaydolarak <Text style={{color: colors.accent}}>Şartlar</Text>,{' '}
          <Text style={{color: colors.accent}}>Gizlilik Politikası</Text> ve{' '}
          <Text style={{color: colors.accent}}>Çerez Kullanımı</Text>{' '}
          koşullarını kabul etmiş olursun.
        </Text>
      </ScrollView>

      <View style={[styles.footer, {borderTopColor: colors.border}]}>
        <Text style={[typography.body, {color: colors.textMuted}]}>
          Hesabın var mı?{' '}
          <Text
            onPress={() => navigation.navigate('PreLogin')}
            style={{color: colors.accent}}>
            Giriş yap
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingBottom: 48,
  },
  headline: {
    lineHeight: 36,
  },
  dividerRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  line: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
  },
  legal: {
    lineHeight: 18,
  },
  footer: {
    borderTopWidth: StyleSheet.hairlineWidth,
    paddingVertical: 18,
    alignItems: 'center',
  },
});

export default Welcome;
