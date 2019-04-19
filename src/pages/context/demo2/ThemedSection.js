import React, { Fragment } from 'react';
import { ThemeContext } from './theme-context';

const ThemedSection = ({ withButton }) => (
  <ThemeContext.Consumer>
    {({ theme, toggleTheme }) => (
      <div className="add-border themed-section" style={{ background: theme.background, color: theme.foreground }}>
        {withButton ? (
          <Fragment>
            <p>I'm a container that consumes the theme context for the styles and the toggle method. Click the button to see the theme change!</p>
            <button
              type="button"
              onClick={toggleTheme}
              style={{ background: theme.foreground, color: theme.background }}
            >
              Toggle Theme
            </button>
          </Fragment>
        ) : (
          <p>I'm a container that consumes the theme context for just the styles but NOT the toggle method. I'll get style changes from the theme but won't try to change them at all.</p>
        )}
      </div>
    )}
  </ThemeContext.Consumer>
);

export default ThemedSection;
