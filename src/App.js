import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AppErrorBoundary from './components/AppErrorBoundary';
import HomePage from './pages/home/Home';
import CodeSplittingPage from './pages/code-splitting/CodeSplitting';
import ContextPage from './pages/context/Context';
import ErrorBoundariesPage from './pages/error-boundaries/ErrorBoundaries';
import FunctionAsChildComponentsPage from './pages/function-as-child-components/FunctionAsChildComponents';
import HigherOrderComponentsPage from './pages/higher-order-components/HigherOrderComponents';
import HooksPage from './pages/hooks/Hooks';
import LifecycleMethodsPage from './pages/lifecycle-methods/LifecycleMethods';
import PortalsPage from './pages/portals/Portals';
import RefsPage from './pages/refs/Refs';
import RenderPropsPage from './pages/render-props/RenderProps';
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
