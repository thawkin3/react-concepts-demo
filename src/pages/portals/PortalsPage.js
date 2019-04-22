import React from 'react';
import Demo1 from './Demo1';
import Demo2 from './Demo2';
import './Portals.css';

const PortalsPage = () => (
  <main className="page portals-page">
    <h2>Portals</h2>
    <div className="introduction">
      <p>Portals allow you to render React components into the DOM outside of the parent element's DOM hierarchy.
        Portals are great for modals, tooltips, menus, and other content that needs to break out of its parent container.</p>
    </div>
    <hr />
    <Demo1 />
    <hr />
    <Demo2 />
  </main>
);

export default PortalsPage;
