import React, { Component } from 'react';

class Demo3 extends Component {
  state = { counterValue: 0 };

  shouldComponentUpdate(nextProps, nextState) {
    console.log(`Demo 3 - shouldComponentUpdate | nextState.counterValue: ${nextState.counterValue} | updating: ${nextState.counterValue % 3 === 0}`);
    return nextState.counterValue % 3 === 0;
  }

  componentDidUpdate() {
    console.log('Demo 3 - componentDidUpdate');
  }

  incrementCounter = () => {
    this.setState(prevState => ({ counterValue: prevState.counterValue + 1 }));
  }

  render() {
    console.log('Demo 3 - render');

    return (
      <div className="demo-section lifecycle-methods-demo-3">
        <h3>Demo 3 - shouldComponentUpdate</h3>
        <p>This lifecycle method can be used as a performance optimization. Normally, a React component re-renders
          on every state or props change, even if it doesn't affect the UI. With <code>shouldComponentUpdate</code>,
          you can tell the component not to re-render by making a comparison of the current props and state with the
          next props and state and then returning <code>false</code> if you would like it not to update.</p>
        <p>Note that in future React versions, this method may be treated as more of a hint rather than a command,
          so the component still may re-render even if you tell it not to. Also note that
          the <code>PureComponent</code> is another alternative for performance optimization since pure components
          just do a shallow check of the props and state to see if the component should re-render.</p>
        <p>In this demo, we have a counter, and clicking the button increments the counter value by 1. However,
          we've implemented a <code>shouldComponentUpdate</code> lifecycle method that tells the component
          to only re-render if the counter value is divisible by 3. This means that while the state IS actually
          updating each time you click the button, the UI will only change due to a re-render when the value is
          3, 6, 9, etc.</p>
        <p>Check out the JavaScript console to see the output! You'll only see
          the <code>render</code> and <code>componentDidUpdate</code> lifecycle methods called when the
          counter value is divisible by 3.</p>
        <div className="add-border">
          <p>Counter value is: {this.state.counterValue}</p>
          <button
            type="button"
            onClick={this.incrementCounter}
          >
            Increment counter
          </button>
        </div>
      </div>
    );
  }
}

export default Demo3;
