import React from 'react';
import Demo1 from './Demo1';
import Demo2 from './Demo2';
import './Context.css';

const ContextPage = () => (
  <main className="page context-page">
    <h2>Context</h2>
    <p className="introduction">The Context API provides a way for you to manage your app's global state without having to use a third-party library like Redux. Essentially, context provides a way to pass data through the component tree without having to pass props down manually at every level.</p>
    <hr />
    <Demo1 />
    <hr />
    <Demo2 />
  </main>
);

export default ContextPage;
