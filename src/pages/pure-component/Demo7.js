import React from 'react';
import ComponentContextExample from './context-examples/ComponentContextExample';
import PureComponentContextExample from './context-examples/PureComponentContextExample';

const Demo7 = () => (
  <div className="demo-section pure-component-demo-7">
    <h3>Demo 7 - Context and Pure Components</h3>
    <p>In this demo, we'll look at two "apps". Each will have components that are nested five levels deep,
      and each uses the Context API. The first app implements the Context API using only components that
      extend <code>React.Component</code>. The second app implements the Context API using components that
      extend <code>React.PureComponent</code>. The final component even uses a Render Prop just for fun. It appears
      that the Context API handles component updates properly even when using <code>React.PureComponent</code>,
      which is good to know since the docs warn that components extending <code>React.PureComponent</code> can
      prevent children updates in some cases. Evidently using the Context API is not one of those cases.</p>
    <h4>Using Context and React.Component</h4>
    <ComponentContextExample />
    <h4>Using Context and React.PureComponent (and a Render Prop, Just for Fun)</h4>
    <PureComponentContextExample />
  </div>
);

export default Demo7;
