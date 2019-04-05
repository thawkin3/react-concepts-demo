import React, { Component } from 'react';

class Demo1Child extends Component {
  constructor(props) {
    console.log('Demo1 Child constructor');
    super(props);

    this.state = { counter: 0 };

    this.incrementCounter = this.incrementCounter.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('Demo1 Child getDerivedStateFromProps', 'nextProps:', nextProps, 'prevState:', prevState);
    return null;
  }

  componentDidMount() {
    console.log('Demo1 Child componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Demo1 Child shouldComponentUpdate', 'nextProps:', nextProps, 'nextState:', nextState);
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('Demo1 Child getSnapshotBeforeUpdate', 'prevProps:', prevProps, 'prevState:', prevState);
    return { timestamp: (new Date()).getMilliseconds() };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(
      'Demo1 Child componentDidUpdate',
      'prevProps:', prevProps, 'props:', this.props,
      'prevState:', prevState, 'state:', this.state,
      'snapshot:', snapshot, 'new timestamp:', { timestamp: (new Date()).getMilliseconds() },
    );
  }

  componentWillUnmount() {
    console.log('Demo1 Child componentWillUnmount');
  }

  incrementCounter() {
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
  }

  render() {
    console.log('Demo1 Child render');
    const { textColor } = this.props;
    const { counter } = this.state;
    return (
      <div className="demo1-child">
        <p>I'm a child component. I accept props for the text color of the following text:</p>
        <p style={{ color: textColor }}>Watch my color change!</p>
        <button
          type="button"
          onClick={this.incrementCounter}
        >
          Increment counter
        </button>
        <p>Counter value: {counter}</p>
      </div>
    );
  }
}

export default Demo1Child;
