import React, { Component } from 'react';
import './AppErrorBoundary.css';

class AppErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <div className="full-page">
          <h1>Something went wrong.</h1>
          <p>This is an error boundary that our app is wrapped in!</p>
          <p>When an error is caught, this fallback UI is shown.</p>
          <p>To get back to the normal app, please refresh your page.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default AppErrorBoundary;
