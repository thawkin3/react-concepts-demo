import React, { Component } from 'react';
import Button from './Button';
import CounterResults from './CounterResults';
import logUpdates from './logUpdates';

const WrappedCounterResults = logUpdates(CounterResults);

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { counterValue: 0 };
    this.incrementCounter = this.incrementCounter.bind(this);
  }

  incrementCounter() {
    this.setState(prevState => ({ counterValue: prevState.counterValue + 1 }));
  }

  render() {
    const { useHOC } = this.props;
    const { counterValue } = this.state;
    return (
      <div className="counter">
        <Button
          buttonText="Increment counter"
          clickHandler={this.incrementCounter}
        />
        {useHOC ? (
          <WrappedCounterResults counterValue={counterValue} />
        ) : (
          <CounterResults counterValue={counterValue} />
        )}
      </div>
    );
  }
}

export default Counter;
