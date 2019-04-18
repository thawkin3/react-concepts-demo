import React from 'react';
import { ThemeContext } from './theme-context';

const ThemedSection = () => (
  <ThemeContext.Consumer>
    {({ theme, toggleTheme }) => (
      <div className="add-border themed-section" style={{ background: theme.background, color: theme.foreground }}>
        <p>I'm a container that consumes the theme context for the styles and the toggle method. Click the button to see the theme change!</p>
        <button
          type="button"
          onClick={toggleTheme}
          style={{ background: theme.foreground, color: theme.background }}
        >
          Toggle Theme
        </button>
      </div>
    )}
  </ThemeContext.Consumer>
);

export default ThemedSection;
