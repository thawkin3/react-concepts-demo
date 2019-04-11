import React from 'react';
import yell from './yell';

const Statement = ({ children }) => (
  <p>{children}</p>
);

const Exclamation = yell(Statement);

const Demo4 = () => (
  <div className="demo-section higher-order-components-demo-2">
    <h3>Demo 4 - HOC for Making Your Component Yell</h3>
      <p>In this demo we've defined an HOC called <code>yell</code> that takes its children and makes the text all uppercase. The first statement below is not wrapped in the HOC, and the second statement is wrapped in the HOC.</p>
      <h4>Not wrapped (normal casing)</h4>
      <Statement>This is a normal statement</Statement>
      <h4>Wrapped (uppercasing)</h4>
      <Exclamation>This one is yelling</Exclamation>
  </div>
);

export default Demo4;
