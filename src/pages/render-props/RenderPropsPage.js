import React from 'react';
import Demo1 from './Demo1';
import Demo2 from './Demo2';
import Demo3 from './Demo3';
import Demo4 from './Demo4';
import './RenderProps.css';

const RenderPropsPage = () => (
  <main className="page render-props-page">
    <h2>Render Props</h2>
    <p className="introduction">A component with a render prop takes a function that returns a React element and
      calls it instead of implementing its own render logic. Essentially, a render prop is a function prop that
      a component uses to know what to render. It's a technique for sharing reusable code between components and
      is very similar to "function as child" components (FACCs). In fact, FACCs are a type of components with
      render props, except the prop they rely on is the <code>children</code> prop. Render props are also an
      alternative to using higher-order components (HOCs).</p>
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

export default RenderPropsPage;
