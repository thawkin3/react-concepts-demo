import React, { Component } from 'react';

class Demo1 extends Component {
  state = { hasError: false };

  throwErrorViaRender = () => {
    this.setState({ hasError: true });
  }

  throwErrorViaClickHandlerIncorrectly = () => {
    throw new Error('I crashed inside a click handler!');
  }

  throwErrorViaClickHandlerCorrectly = () => {
    try {
      throw new Error('I crashed inside a click handler!');
    } catch (error) {
      this.setState({ hasError: true });
    }
  }

  render() {
    if (this.state.hasError) {
      throw new Error('I crashed during the render method!');
    }
    return (
      <div className="demo-section error-boundaries-demo-1">
        <h3>Demo 1 - Error Boundary Surrounding the Entire App</h3>
        <p>Here we will intentionally throw an error. Our entire app is wrapped in an error boundary, and we'll show an error message.</p>
        <p>This button will cause an error in the component's render method, which will then be caught by the error boundary.</p>
        <button
          type="button"
          onClick={this.throwErrorViaRender}
        >
          Throw an error through the render method
        </button>
        <p>This button will throw an error inside the click handler, but this will NOT be caught by the error boundary. Don't do this!</p>
        <button
          type="button"
          onClick={this.throwErrorViaClickHandlerIncorrectly}
        >
          Throw an error through the click handler (incorrect)
        </button>
        <p>Instead, you still need to use try/catch blocks to handle errors in your event handlers.</p>
        <button
          type="button"
          onClick={this.throwErrorViaClickHandlerCorrectly}
        >
          Throw an error through the click handler (correct)
        </button>
      </div>
    );
  }
}

export default Demo1;
