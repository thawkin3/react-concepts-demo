import React from 'react';
import BoringComponent from './BoringComponent';
import withAddedProps from './withAddedProps';

const WrappedBoringComponent = withAddedProps(BoringComponent);

const Demo3 = () => (
  <div className="demo-section higher-order-components-demo-3">
    <h3>Demo 3 - HOC to Add Additional Props</h3>
      <p>This example adds additional props to the wrapped component. These props can be anything you want, like values, class methods, or static methods. In this case, the <code>withAddedProps</code> HOC adds props for <code>secretToLife</code>, <code>counter</code>, <code>incrementCounter()</code>, and <code>sendAlert()</code>.</p>
      <h4>Unwrapped component (no added props)</h4>
      <BoringComponent />
      <h4>Wrapped component (has added props)</h4>
      <WrappedBoringComponent />
  </div>
);

export default Demo3;
