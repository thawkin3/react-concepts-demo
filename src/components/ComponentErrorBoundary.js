import React, { Component } from 'react';

class ComponentErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="full-page">
          <h1>Something went wrong.</h1>
          <p>This is an error boundary that a component is wrapped in!</p>
          <p>When an error is caught, this fallback UI is shown.</p>
          <p>You can put error boundaries anywhere in your app, as many as you'd like, as small or as large as you'd like!</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ComponentErrorBoundary;
