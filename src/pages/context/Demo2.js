import React, { Component } from 'react';
import ThemedSection from './demo2/ThemedSection';
import UnstyledThemedSection from './demo2/UnstyledThemedSection';
import { themes, ThemeContext } from './demo2/theme-context';

class Demo2 extends Component {
  constructor(props) {
    super(props);

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };

    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme,
    };
  }

  render() {
    return (
      <div className="demo-section context-demo-2">
        <h3>Demo 2 - Passing a Value and a Method to Update That Value</h3>
        <p>When using Context, your consumer components may need a way to update or change the value(s) that they receive from the provider. In this example, we have a theme context. The provider gives the consumers a value for the current theme as well as a method for toggling the theme.</p>
        <ThemeContext.Provider value={this.state}>
          <ThemedSection withButton />
          <UnstyledThemedSection />
          <ThemedSection withButton={false} />
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default Demo2;
