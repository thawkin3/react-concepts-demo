import React, { Component } from 'react';

class Demo4 extends Component {
  state = { counter: 0 };

  incrementCounter = () => {
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
  }

  render() {
    if (this.state.counter === 3) {
      // `map` is an array helper, so calling this on a number will throw an error since numbers don't have a `map` method
      this.state.counter.map(element => element * 2);
    }
    return (
      <div className="demo-section error-boundaries-demo-4">
        <h3>Demo 4 - Error Thrown in the Render Method</h3>
        <p>In this demo we have a button to increment a counter. In our <code>render</code> method, if the
          counter's value is 3, we'll try to perform a <code>map()</code> function on the number, which
          isn't valid since this is an array helper method. This is meant to simulate running into an
          unintentional error during the component's render method. It's import to always code defensively,
          but when errors do happen, it's nice to have an error boundary to catch them!</p>
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

export default Demo4;
