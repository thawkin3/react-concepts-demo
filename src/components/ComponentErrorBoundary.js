import React, { Component } from 'react';
import './ComponentErrorBoundary.css';

class ComponentErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log('component error boundary did catch')
    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    if (this.state.error) {
      return (
        <div className="component-error-boundary">
          <h1>Something went wrong.</h1>
          <p>This is an error boundary that our component is wrapped in!</p>
          <p>When an error is caught, this fallback UI is shown. But, importantly, the rest of the app did not crash.</p>
          <p>{this.state.error.toString()}</p>
          <p className="pre-format">Stack Trace: {this.state.errorInfo.componentStack}</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ComponentErrorBoundary;
