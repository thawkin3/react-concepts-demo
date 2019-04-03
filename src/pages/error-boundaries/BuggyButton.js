import React, { Component } from 'react';

class BuggyButton extends Component {
  state = { hasError: false };

  throwError = () => {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      throw new Error('Component has an error!');
    }

    return(
      <button
        type="button"
        onClick={this.throwError}
      >
        Click me to throw an error
      </button>
    );
  }
}

export default BuggyButton;
