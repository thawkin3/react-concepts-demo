import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AppErrorBoundary from './components/AppErrorBoundary';
import HomePage from './pages/home/HomePage';
import CodeSplittingPage from './pages/code-splitting/CodeSplittingPage';
import ContextPage from './pages/context/ContextPage';
import ErrorBoundariesPage from './pages/error-boundaries/ErrorBoundariesPage';
import FunctionAsChildComponentsPage from './pages/function-as-child-components/FunctionAsChildComponentsPage';
import HigherOrderComponentsPage from './pages/higher-order-components/HigherOrderComponentsPage';
import HooksPage from './pages/hooks/HooksPage';
import LifecycleMethodsPage from './pages/lifecycle-methods/LifecycleMethodsPage';
import PortalsPage from './pages/portals/PortalsPage';
import RefsPage from './pages/refs/RefsPage';
import RenderPropsPage from './pages/render-props/RenderPropsPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <AppErrorBoundary>
        <div className="app">
          <Router>
            <Header />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/code-splitting" component={CodeSplittingPage} />
              <Route path="/context" component={ContextPage} />
              <Route path="/error-boundaries" component={ErrorBoundariesPage} />
              <Route path="/function-as-child-components" component={FunctionAsChildComponentsPage} />
              <Route path="/higher-order-components" component={HigherOrderComponentsPage} />
              <Route path="/hooks" component={HooksPage} />
              <Route path="/lifecycle-methods" component={LifecycleMethodsPage} />
              <Route path="/portals" component={PortalsPage} />
              <Route path="/refs" component={RefsPage} />
              <Route path="/render-props" component={RenderPropsPage} />
              <Redirect to="/" />
            </Switch>
            <Footer />
          </Router>
        </div>
      </AppErrorBoundary>
    );
  }
}

export default App;
