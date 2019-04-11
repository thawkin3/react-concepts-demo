import React from 'react';
import Demo1 from './Demo1';
import Demo2 from './Demo2';
import Demo3 from './Demo3';
import Demo4 from './Demo4';
import './HigherOrderComponents.css';

const HigherOrderComponentsPage = () => (
  <main className="page higher-order-components-page">
    <h2>Higher-Order Components (HOCs)</h2>
    <div className="introduction">
      <p>A higher-order component is a function that takes a component and returns a new component. HOCs are an advanced technique in React for reusing component logic. Redux's <code>connect</code> and React Router's <code>withRouter</code> are two great examples of common HOCs that we use all the time.</p>
      <p>HOCs should not mutate the input component they receive. They should return a new component.</p>
      <p>The input component's props should be passed through so that you don't lose anything.</p>
      <p>The HOC should wrap the input component's <code>displayName</code> for easy debugging. Redux's <code>connect</code> is a great example of this. If you have a <code>Button</code> component that you then use with <code>connect</code>, the resulting wrapped component gets a <code>displayName</code> of <code>Connect(Button)</code>.</p>
      <p>One caveat for HOCs is that static methods on the input component don't get automatically included on the wrapped component. <code>hoist-non-react-statics</code> is a great package that can help solve this problem.</p>
      <p>A second caveat with HOCs is that refs don't get passed through since refs are not props. The solution for this problem is to use the <code>React.forwardRef</code> API.</p>
    </div>
    <hr />
    <Demo1 />
    <hr />
    <Demo2 />
    <hr />
    <Demo3 />
    <hr />
    <Demo4 />
  </main>
);

export default HigherOrderComponentsPage;
