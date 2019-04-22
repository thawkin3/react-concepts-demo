import React, { Component } from 'react';
import ComponentErrorBoundary from '../../components/ComponentErrorBoundary';
import BuggyButton from './BuggyButton';

class Demo2 extends Component {
  render() {
    return (
      <div className="demo-section error-boundaries-demo-2">
        <h3>Demo 2 - Error Boundary Surrounding a Smaller Component</h3>
        <p>Here we will intentionally throw an error. This button component is wrapped in an error boundary,
          so a fallback UI will be displayed for just this section if an error is caught.</p>
        <ComponentErrorBoundary>
          <BuggyButton />
        </ComponentErrorBoundary>
        <p>Here we will also intentionally throw an error. However, this button component is not wrapped in
          an error boundary, so the error will go all the way up to our main app error boundary.</p>
        <BuggyButton />
      </div>
    );
  }
}

export default Demo2;
