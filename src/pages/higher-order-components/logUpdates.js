import React, { Component } from 'react';
import getDisplayName from '../../util/getDisplayName';

function logUpdates(WrappedComponent) {
  class LogUpdates extends Component {
    componentDidUpdate(prevProps, prevState) {
      console.log('Previous props:', prevProps, 'Current props:', this.props);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  LogUpdates.displayName = `LogUpdates(${getDisplayName(WrappedComponent)})`;

  return LogUpdates;
}

export default logUpdates;
