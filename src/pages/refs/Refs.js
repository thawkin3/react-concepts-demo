import React from 'react';
import Demo1 from './Demo1';
import Demo2 from './Demo2';
import Demo3 from './Demo3';
import './Refs.css';

const RefsPage = () => (
  <main className="page refs-page">
    <h2>Refs</h2>
    <div className="introduction">
      <p>Refs are used for accessing DOM nodes directly. They should be used sparingly, but they're good for things like programmatically shifting focus to an element.</p>
      <p>When trying to call methods on a ref, it's always a good idea to check that the ref is not null first to avoid errors.</p>
    </div>
    <hr />
    <Demo1 />
    <hr />
    <Demo2 />
    <hr />
    <Demo3 />
  </main>
);

export default RefsPage;
