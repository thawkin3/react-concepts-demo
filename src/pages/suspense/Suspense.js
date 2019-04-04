import React from 'react';
import Demo1 from './Demo1';
import './Suspense.css';

const SuspensePage = () => (
  <main className="page suspense-page">
    <h2>Suspense</h2>
    <p>Lazy loading allows you to do code-splitting in your app. In other words, rather than loading everything up front, you only load portions of your code when you need it. This helps you reduce bundle sizes and cut down on initial page load time.</p>
    <Demo1 />
  </main>
);

export default SuspensePage;
