import React from 'react';
import PropDrillingExample from './demo1/PropDrillingExample';
import ContextExample from './demo1/ContextExample';

const Demo1 = () => (
  <div className="demo-section context-demo-1">
    <h3>Demo 1 - Context vs. Prop Drilling</h3>
    <p>In this demo, we'll look at two "apps". Each will have components that are nested five levels deep. The first app will manually pass the prop down from the top-level component all the way down to the last component, the one that actually needs to use the prop. The second app will use the Context API to pass the needed prop down to the last component without also passing it to all the intermediary components. Context lets you cut out the middleman and just share the props with the components that actually need them.</p>
    <h4>Using Prop Drilling</h4>
    <PropDrillingExample />
    <h4>Using Context</h4>
    <ContextExample />
  </div>
);

export default Demo1;
