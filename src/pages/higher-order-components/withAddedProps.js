import React, { Component } from 'react';
import getDisplayName from '../../util/getDisplayName';

function withAddedProps(WrappedComponent) {
  class WithAddedProps extends Component {
    state = { counter: 0 };

    incrementCounter = () => {
      this.setState(prevState => ({ counter: prevState.counter + 1 }));
    }

    static sendAlert = () => {
      window.alert('Alert from the withAddedProps HOC!');
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          secretToLife={42}
          counter={this.state.counter}
          incrementCounter={this.incrementCounter}
          sendAlert={WithAddedProps.sendAlert}
        />
      );
    }
  }

  WithAddedProps.displayName = `WithAddedProps(${getDisplayName(WrappedComponent)})`;

  return WithAddedProps;
}

export default withAddedProps;
