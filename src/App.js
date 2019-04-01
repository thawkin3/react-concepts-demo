import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/home/Home';
import ErrorBoundariesPage from './pages/error-boundaries/ErrorBoundaries';
import HooksPage from './pages/hooks/Hooks';
import RefsPage from './pages/refs/Refs';
import SuspensePage from './pages/suspense/Suspense';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
            <Header />
            <Route exact path="/" component={HomePage} />
            <Route path="/error-boundaries" component={ErrorBoundariesPage} />
            <Route path="/hooks" component={HooksPage} />
            <Route path="/refs" component={RefsPage} />
            <Route path="/suspense" component={SuspensePage} />
        </Router>
      </div>
    );
  }
}

export default App;
