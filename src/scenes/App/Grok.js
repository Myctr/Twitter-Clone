import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Avatar from '../../components/Avatar';
import TextField from '../../components/TextField';
import {useDrawer} from '../../components/SideDrawer';
import {currentUser} from '../../data';
import {useTheme} from '../../theme';

const SUGGESTIONS = [
  'Bu hafta öne çıkan teknoloji haberlerini özetle',
  'React Native performans ipuçları ver',
  'Yeni bir yazı için başlık önerileri üret',
];

const Grok = () => {
  const {colors, spacing, typography} = useTheme();
  const {open} = useDrawer();
  const [prompt, setPrompt] = useState('');
  const [history, setHistory] = useState([]);

  const submit = () => {
    const value = prompt.trim();
    if (!value) {
      return;
    }
    setHistory(current => [value, ...current]);
    setPrompt('');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={[styles.container, {backgroundColor: colors.background}]}>
      <SafeAreaView edges={['top']} style={styles.container}>
        <View
          style={[
            styles.header,
            {
              borderBottomColor: colors.border,
              paddingHorizontal: spacing.lg,
            },
          ]}>
          <TouchableOpacity accessibilityLabel="Open menu" onPress={open}>
            <Avatar
              name={currentUser.name}
              size={32}
              source={currentUser.avatar}
            />
          </TouchableOpacity>
          <View style={[styles.center, styles.row]}>
            <Ionicons color={colors.text} name="sparkles-outline" size={20} />
            <Text
              style={[
                typography.heading,
                {color: colors.text, marginLeft: spacing.sm},
              ]}>
              Grok
            </Text>
          </View>
          <View style={styles.spacer} />
        </View>

        <ScrollView
          contentContainerStyle={{padding: spacing.xl}}
          showsVerticalScrollIndicator={false}>
          <Text style={[typography.title, {color: colors.text}]}>
            Merhaba, nasıl yardımcı olabilirim?
          </Text>
          <Text
            style={[
              typography.body,
              {color: colors.textMuted, marginTop: spacing.sm},
            ]}>
            Bu ekran örnek bir istem akışıdır; bağlı bir yapay zeka servisi
            yoktur.
          </Text>

          <View style={{marginTop: spacing.xl}}>
            {SUGGESTIONS.map(suggestion => (
              <TouchableOpacity
                activeOpacity={0.8}
                key={suggestion}
                onPress={() => setPrompt(suggestion)}
                style={[
                  styles.chip,
                  {
                    borderColor: colors.border,
                    marginBottom: spacing.md,
                    padding: spacing.md,
                  },
                ]}>
                <Text style={[typography.body, {color: colors.text}]}>
                  {suggestion}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {history.length > 0 ? (
            <View style={{marginTop: spacing.lg}}>
              <Text
                style={[
                  typography.heading,
                  {color: colors.text, marginBottom: spacing.md},
                ]}>
                Geçmiş
              </Text>
              {history.map((item, index) => (
                <Text
                  key={`${item}-${index}`}
                  style={[
                    typography.body,
                    {color: colors.textMuted, marginBottom: spacing.sm},
                  ]}>
                  • {item}
                </Text>
              ))}
            </View>
          ) : null}
        </ScrollView>

        <View style={[styles.composer, {padding: spacing.lg}]}>
          <TextField
            onChangeText={setPrompt}
            onSubmitEditing={submit}
            placeholder="Grok'a sor"
            trailing={
              <Ionicons
                color={prompt.trim() ? colors.accent : colors.textMuted}
                name="arrow-up-circle"
                onPress={submit}
                size={26}
              />
            }
            value={prompt}
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
  header: {
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    height: 52,
  },
  center: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  spacer: {
    width: 32,
  },
  chip: {
    borderRadius: 12,
    borderWidth: StyleSheet.hairlineWidth,
  },
  composer: {
    borderTopWidth: StyleSheet.hairlineWidth,
  },
});

export default Grok;
