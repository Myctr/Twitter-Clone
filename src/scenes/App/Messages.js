import React, {useMemo, useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Avatar from '../../components/Avatar';
import EmptyState from '../../components/EmptyState';
import TextField from '../../components/TextField';
import {conversations} from '../../data';
import {useTheme} from '../../theme';

const Messages = () => {
  const {colors, spacing, typography} = useTheme();
  const [query, setQuery] = useState('');

  const data = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) {
      return conversations;
    }
    return conversations.filter(
      conversation =>
        conversation.name.toLowerCase().includes(term) ||
        conversation.username.toLowerCase().includes(term),
    );
  }, [query]);

  return (
    <SafeAreaView
      edges={['top']}
      style={[styles.container, {backgroundColor: colors.background}]}>
      <View
        style={[
          styles.header,
          {borderBottomColor: colors.border, paddingHorizontal: spacing.lg},
        ]}>
        <Text style={[typography.heading, {color: colors.text}]}>Mesajlar</Text>
        <Ionicons color={colors.text} name="settings-outline" size={22} />
      </View>

      <View style={{padding: spacing.lg}}>
        <TextField
          onChangeText={setQuery}
          placeholder="Mesajlarda ara"
          value={query}
        />
      </View>

      {data.length === 0 ? (
        <EmptyState
          description="Farklı bir isim veya kullanıcı adı dene."
          icon="mail-outline"
          title="Sonuç bulunamadı"
        />
      ) : (
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity
              activeOpacity={0.8}
              style={[
                styles.row,
                {
                  borderBottomColor: colors.border,
                  paddingHorizontal: spacing.lg,
                  paddingVertical: spacing.md,
                },
              ]}>
              <Avatar name={item.name} size={48} source={item.avatar} />
              <View style={[styles.body, {marginLeft: spacing.md}]}>
                <View style={styles.titleRow}>
                  <Text
                    numberOfLines={1}
                    style={[typography.bodyStrong, {color: colors.text}]}>
                    {item.name}
                  </Text>
                  <Text style={[typography.meta, {color: colors.textMuted}]}>
                    {' '}
                    {item.username} · {item.time}
                  </Text>
                </View>
                <Text
                  numberOfLines={1}
                  style={[
                    typography.body,
                    {color: colors.textMuted, marginTop: 2},
                  ]}>
                  {item.message}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
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
    justifyContent: 'space-between',
  },
  row: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
  },
  body: {
    flex: 1,
  },
  titleRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default Messages;
