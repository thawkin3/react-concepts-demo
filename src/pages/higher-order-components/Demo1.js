import React from 'react';
import Counter from './Counter';

const Demo1 = () => (
  <div className="demo-section higher-order-components-demo-1">
    <h3>Demo 1 - HOC That Logs Component Updates</h3>
    <p>We've defined an HOC called <code>logUpdates</code> that simply wraps its input component and logs information to the console during the <code>componentDidUpdate</code> lifecycle method when the new wrapped component updates. On this page we have two simple counter components. The first component is just the counter component by itself, and the second component is the counter component that has its results component wrapped in our <code>logUpdates</code> HOC.</p>
    <p>Open up your browser's developer tools and look in the JavaScript Console to see that the second component creates console logs when the button is clicked but that the first component does not.</p>
    <h4>Unwrapped counter results (no console logs)</h4>
    <Counter />
    <h4>Wrapped counter results (console logs)</h4>
    <Counter useHOC />
  </div>
);

export default Demo1;
