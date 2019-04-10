import React from 'react';
import Demo1 from './Demo1';
import Demo2 from './Demo2';
import './CodeSplitting.css';

const CodeSplittingPage = () => (
  <main className="page code-splitting-page">
    <h2>Code-Splitting</h2>
    <div className="introduction">
      <p>Lazy loading allows you to do code-splitting in your app. In other words, rather than loading everything up front, you only load portions of your code when you need it. This helps you reduce bundle sizes and cut down on initial page load time.</p>
    </div>
    <hr />
    <Demo1 />
    <hr />
    <Demo2 />
  </main>
);

export default CodeSplittingPage;
