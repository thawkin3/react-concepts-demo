import React from 'react';
import Demo1 from './Demo1';
import Demo2 from './Demo2';

const HooksPage = () => (
  <main className="page hooks-page">
    <h2>Hooks</h2>
    <p>Hooks are pretty cool! They let you use state and other React features in functional components, so you no longer need to define a class component if you don't want to.</p>
    <Demo1 />
    <hr />
    <Demo2 />
  </main>
);

export default HooksPage;
