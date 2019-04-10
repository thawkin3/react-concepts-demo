import React, { Component } from 'react';

function logUpdates(WrappedComponent) {
  return class extends Component {
    componentDidUpdate(prevProps, prevState) {
      console.log('Previous props:', prevProps, 'Current props:', this.props, 'Previous state:', prevState, 'Current state:', this.state);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
}

export default logUpdates;
