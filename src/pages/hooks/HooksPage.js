import React from 'react';
import Demo1 from './Demo1';
import Demo2 from './Demo2';
import Demo3 from './Demo3';
import Demo4 from './Demo4';
import './Hooks.css';

const HooksPage = () => (
  <main className="page hooks-page">
    <h2>Hooks</h2>
    <div className="introduction">
      <p>Hooks are pretty cool! They let you use state and other React features in functional components, so you
          no longer need to define a class component if you don't want to.</p>
    </div>
    <hr/>
    <Demo1/>
    <hr/>
    <Demo2/>
    <hr/>
    <Demo3/>
    <hr/>
    <Demo4/>
  </main>
);

export default HooksPage;
