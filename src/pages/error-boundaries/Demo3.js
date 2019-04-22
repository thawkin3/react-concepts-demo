import React, { Component } from 'react';

class Demo3 extends Component {
  state = { counter: 0 };

  componentDidUpdate() {
    if (this.state.counter === 3) {
      throw new Error('I crashed inside a lifecycle method!');
    }
  }

  incrementCounter = () => {
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
  }

  render() {
    return (
      <div className="demo-section error-boundaries-demo-3">
        <h3>Demo 3 - Error Thrown in a Lifecycle Method</h3>
        <p>In this demo we have a button to increment a counter. We have a <code>componentDidUpdate</code> lifecycle
          method defined that will throw an error when the counter's value is 3. The error boundary
          will then catch that error since it occurred in a lifecycle method.</p>
        <button
          type="button"
          onClick={this.incrementCounter}
        >
          Increment counter
        </button>
        <p>Counter value: {this.state.counter}</p>
      </div>
    );
  }
}

export default Demo3;
