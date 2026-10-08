import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

const palettes = {
  dark: {
    background: '#000000',
    surface: '#16181C',
    elevated: '#1E2126',
    border: '#2F3336',
    text: '#E7E9EA',
    textMuted: '#71767B',
    textInverse: '#000000',
    accent: '#1D9BF0',
    accentPressed: '#1A8CD8',
    like: '#F91880',
    repost: '#00BA7C',
    danger: '#F4212E',
    overlay: 'rgba(91, 112, 131, 0.4)',
    skeleton: '#202327',
  },
  light: {
    background: '#FFFFFF',
    surface: '#F7F9F9',
    elevated: '#FFFFFF',
    border: '#EFF3F4',
    text: '#0F1419',
    textMuted: '#536471',
    textInverse: '#FFFFFF',
    accent: '#1D9BF0',
    accentPressed: '#1A8CD8',
    like: '#F91880',
    repost: '#00BA7C',
    danger: '#F4212E',
    overlay: 'rgba(0, 0, 0, 0.4)',
    skeleton: '#EFF3F4',
  },
};

const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 32,
};

const radius = {
  sm: 8,
  md: 12,
  lg: 16,
  pill: 999,
};

const typography = {
  brand: {fontSize: 32, fontWeight: '800', letterSpacing: -0.5},
  display: {fontSize: 28, fontWeight: '800', letterSpacing: -0.4},
  title: {fontSize: 23, fontWeight: '800', letterSpacing: -0.3},
  heading: {fontSize: 20, fontWeight: '800'},
  body: {fontSize: 15, fontWeight: '400'},
  bodyStrong: {fontSize: 15, fontWeight: '700'},
  meta: {fontSize: 15, fontWeight: '400'},
  caption: {fontSize: 13, fontWeight: '400'},
  tab: {fontSize: 15, fontWeight: '600'},
  button: {fontSize: 15, fontWeight: '700'},
};

const ThemeContext = createContext(null);

export const ThemeProvider = ({children}) => {
  const [mode, setMode] = useState('dark');

  const toggleTheme = useCallback(() => {
    setMode(current => (current === 'dark' ? 'light' : 'dark'));
  }, []);

  const value = useMemo(
    () => ({
      mode,
      colors: palettes[mode],
      spacing,
      radius,
      typography,
      toggleTheme,
    }),
    [mode, toggleTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const theme = useContext(ThemeContext);
  if (!theme) {
    throw new Error('useTheme must be used inside a ThemeProvider');
  }
  return theme;
};

export {palettes, spacing, radius, typography};
