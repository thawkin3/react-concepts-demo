import React from 'react';
import Demo1 from './Demo1';
import Demo2 from './Demo2';

const ErrorBoundariesPage = () => (
  <main className="page error-boundaries-page">
    <h2>Error Boundaries</h2>
    <p>Error boundaries are a useful tool for ensuring that your entire app doesn't break if a component runs into an error. Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them. If any errors are caught, you can then show a fallback UI.</p>
    <Demo1 />
    <hr />
    <Demo2 />
  </main>
);

export default ErrorBoundariesPage;
