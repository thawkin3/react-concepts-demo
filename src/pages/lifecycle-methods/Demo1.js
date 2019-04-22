import React from 'react';
import Demo1Parent from './Demo1Parent';

const Demo1 = () => (
  <div className="demo-section lifecycle-methods-demo-1">
    <h3>Demo 1 - Console Log the Lifecycle Methods</h3>
    <p>Here we render a parent component and a child component. Each of them have lifecycle methods implemented
        that console log when they are called as well as any data associated with them.</p>
    <p>The parent component has a text input in which you can enter a color value. This value is stored in the
        parent's state and passed down to the child component as a prop. The parent component also has a button
        to show or hide the child component so that the child component can be mounted and unmounted repeatedly.</p>
    <p>The child component accepts the text color prop and renders some text in that color. It also has a button
        to increment a counter, and that counter value is stored in its state.</p>
    <Demo1Parent />
  </div>
);

export default Demo1;
