import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header className="header">
    <h1>React Concepts Demo</h1>
    <nav className="header-nav">
      <ul>
        <li>
          <Link to="/" className="header-nav-link">Home</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
