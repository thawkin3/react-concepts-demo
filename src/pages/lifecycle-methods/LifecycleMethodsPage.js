import React from 'react';
import Introduction from './Introduction';
import Demo1 from './Demo1';
import Demo2 from './Demo2';
import './LifecycleMethods.css';

const LifecycleMethodsPage = () => (
  <main className="page lifecycle-methods-page">
    <h2>Lifecycle Methods</h2>
    <p>Lifecycle methods are methods that you can tie into to run code at certain points while your component
        is mounting, updating, or unmounting. Understanding when each method runs and what it's best used for
        is crucial to writing clean components.</p>
    <Introduction />
    <hr />
    <Demo1 />
    <hr />
    <Demo2 />
  </main>
);

export default LifecycleMethodsPage;
