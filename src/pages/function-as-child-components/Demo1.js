import React from 'react';
import WindowWidth from './WindowWidth';

const Demo1 = () => (
  <div className="demo-section function-as-child-components-demo-1">
    <h3>Demo 1 - FACC That Keeps Track of Window Resize</h3>
    <p>We've defined a FACC called <code>WindowWidth</code> that listens for the resize event on the window and then calls its <code>children</code> function with the window width value as an argument. Remember, it expects its <code>children</code> prop to be a function not JSX.</p>
    <p>We then have two components that use the <code>WindowWidth</code> component. The first simply displays the window width value on the page. The second displays a description of the window width with a name ("large", "medium", or "small") and a color. That's the neat thing about FACCs: the child function decides how to use the props its given, while the parent component manages the business logic.</p>
    <WindowWidth>
      {windowWidth => (
        <div className="add-border example-section">
          <h4>Example A - Show the window width</h4>
          <p>The current window width is: {windowWidth}px</p>
        </div>
      )}
    </WindowWidth>
    <WindowWidth>
      {windowWidth => {
        const widthDescription = windowWidth > 1024 ? 'Extra Large' : windowWidth > 768 ? 'Large' : windowWidth > 480 ? 'Medium' : 'Small';
        const widthColor = windowWidth > 1024 ? 'red' : windowWidth > 768 ? 'green' : windowWidth > 480 ? 'blue' : 'orange';

        return(
          <div className="add-border example-section">
            <h4>Example B - Show a description and color for the width</h4>
            <p>Window size: <span style={{ color: widthColor }}>{widthDescription}</span></p>
          </div>
        )
      }}
    </WindowWidth>
  </div>
);

export default Demo1;
