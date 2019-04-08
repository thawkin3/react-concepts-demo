import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AppErrorBoundary from './components/AppErrorBoundary';
import HomePage from './pages/home/Home';
import ErrorBoundariesPage from './pages/error-boundaries/ErrorBoundaries';
import HigherOrderComponentsPage from './pages/higher-order-components/HigherOrderComponents';
import HooksPage from './pages/hooks/Hooks';
import LifecycleMethodsPage from './pages/lifecycle-methods/LifecycleMethods';
import PortalsPage from './pages/portals/Portals';
import RefsPage from './pages/refs/Refs';
import CodeSplittingPage from './pages/code-splitting/CodeSplitting';
import './App.css';

class App extends Component {
  render() {
    return (
      <AppErrorBoundary>
        <div className="app">
          <Router>
            <Header />
            <Route exact path="/" component={HomePage} />
            <Route path="/error-boundaries" component={ErrorBoundariesPage} />
            <Route path="/higher-order-components" component={HigherOrderComponentsPage} />
            <Route path="/hooks" component={HooksPage} />
            <Route path="/lifecycle-methods" component={LifecycleMethodsPage} />
            <Route path="/portals" component={PortalsPage} />
            <Route path="/refs" component={RefsPage} />
            <Route path="/code-splitting" component={CodeSplittingPage} />
            <Footer />
          </Router>
        </div>
      </AppErrorBoundary>
    );
  }
}

export default App;
