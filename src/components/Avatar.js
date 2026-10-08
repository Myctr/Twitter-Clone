import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useTheme} from '../theme';

const Avatar = ({source, name = '', size = 40}) => {
  const {colors} = useTheme();
  const shape = {width: size, height: size, borderRadius: size / 2};

  if (source) {
    return <Image source={source} style={[styles.image, shape]} />;
  }

  return (
    <View style={[styles.fallback, shape, {backgroundColor: colors.accent}]}>
      <Text style={[styles.initial, {fontSize: size * 0.42}]}>
        {name.trim().charAt(0).toUpperCase() || '?'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    resizeMode: 'cover',
  },
  fallback: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  initial: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
});

export default Avatar;
