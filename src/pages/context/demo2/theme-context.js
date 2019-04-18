import { createContext } from 'react';

export const themes = {
  light: {
    foreground: '#ff1493',
    background: '#fff',
    name: 'light',
  },
  dark: {
    foreground: '#ff1493',
    background: '#2e2e2e',
    name: 'dark',
  },
};

// We provide default values when creating the theme.
// The toggleTheme method is just a dummy function that does nothing for now.
export const ThemeContext = createContext({
  theme: themes.light,
  toggleTheme: () => {},
});
