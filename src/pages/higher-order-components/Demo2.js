import React from 'react';
import Demo2a from './Demo2a';
import Demo2b from './Demo2b';

const Demo2 = () => (
  <div className="demo-section higher-order-components-demo-2">
    <h3>Demo 2 - HOC for Cross-Cutting Concerns</h3>
    <p>The nice thing about HOCs is that you can use the same HOC with different input components. For example, you can use Redux's <code>connect</code> method to wrap any component you want.</p>
    <p>Here we have two different types of components that are both wrapped in our <code>logUpdates</code> HOC. The two components do different things, but both are wrapped in the console logging functionality. The first component receives a prop for the text color based on the value of the text input above it. The second component is a button that receives props for the button text and the click handler. The button text prop changes to reflect whether the toggle value is On or Off.</p>
    <Demo2a />
    <Demo2b />
  </div>
);

export default Demo2;
