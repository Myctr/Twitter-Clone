import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import {ThemeProvider, useTheme} from './src/theme';

const AppContent = () => {
  const {colors, mode} = useTheme();
  const base = mode === 'dark' ? DarkTheme : DefaultTheme;
  const navigationTheme = {
    ...base,
    colors: {
      ...base.colors,
      background: colors.background,
      border: colors.border,
      card: colors.background,
      primary: colors.accent,
      text: colors.text,
    },
  };

  return (
    <NavigationContainer theme={navigationTheme}>
      <StatusBar
        backgroundColor={colors.background}
        barStyle={mode === 'dark' ? 'light-content' : 'dark-content'}
      />
      <Navigation />
    </NavigationContainer>
  );
};

const App = () => (
  <ThemeProvider>
    <AppContent />
  </ThemeProvider>
);

export default App;
