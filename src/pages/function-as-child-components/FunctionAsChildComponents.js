import React from 'react';
import Demo1 from './Demo1';
import Demo2 from './Demo2';
import './FunctionAsChildComponents.css';

const FunctionAsChildComponentsPage = () => (
  <main className="page function-as-child-components-page">
    <h2>Function as Child Components (FACCs)</h2>
    <p className="introduction">"Function as child components" (FACCs) are components which expect their <code>children</code> prop to be a function rather than JSX. FACCs are an alternative to higher-order components (HOCs). FACCs provide a way to manage state and event listeners inside of the parent component while giving the child component the flexibility to decide how to handle the values it is given.</p>
    <hr />
    <Demo1 />
    <hr />
    <Demo2 />
  </main>
);

export default FunctionAsChildComponentsPage;
