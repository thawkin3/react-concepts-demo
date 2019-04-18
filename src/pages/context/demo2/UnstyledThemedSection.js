import React from 'react';
import { ThemeContext } from './theme-context';

const UnstyledThemedSection = () => (
  <ThemeContext.Consumer>
    {({ toggleTheme }) => (
      <div className="add-border themed-section">
        <p>I'm a container that consumes the theme context for just the toggle method but not the styles. Click the button to see the theme change for other components that DO depend on the theme styles!</p>
        <button
          type="button"
          onClick={toggleTheme}
        >
          Toggle Theme
        </button>
      </div>
    )}
  </ThemeContext.Consumer>
);

export default UnstyledThemedSection;
