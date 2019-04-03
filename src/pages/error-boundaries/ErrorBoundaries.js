import React from 'react';
import Demo1 from './Demo1';
import Demo2 from './Demo2';

const ErrorBoundariesPage = () => (
  <main className="page error-boundaries-page">
    <h2>Error Boundaries</h2>
    <Demo1 />
    <hr />
    <Demo2 />
  </main>
);

export default ErrorBoundariesPage;
