import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const HomePage = () => (
  <main className="page home-page">
    <h2>Home</h2>
    <p>This demo app is meant to show off different key pieces of React's functionality, including some of its newest features.</p>
    <p>Not all of the demos are easily explainable through the UI alone, so please take a look at the <a href="https://github.com/thawkin3/react-concepts-demo">source code in GitHub</a> as well.</p>
    <nav className="home-page-nav">
      <h3>Table of Contents</h3>
      <ul>
        <li>
          <Link to="/code-splitting">Code-Splitting</Link>
        </li>
        <li>
          <Link to="/context">Context</Link>
        </li>
        <li>
          <Link to="/error-boundaries">Error Boundaries</Link>
        </li>
        <li>
          <Link to="/function-as-child-components">Function as Child Components (FACCs)</Link>
        </li>
        <li>
          <Link to="/higher-order-components">Higher-Order Components (HOCs)</Link>
        </li>
        <li>
          <Link to="/hooks">Hooks</Link>
        </li>
        <li>
          <Link to="/lifecycle-methods">Lifecycle Methods</Link>
        </li>
        <li>
          <Link to="/portals">Portals</Link>
        </li>
        <li>
          <Link to="/refs">Refs</Link>
        </li>
      </ul>
    </nav>
  </main>
);

export default HomePage;
