import React, { Component } from 'react';

class BuggyConstructor extends Component {
  constructor(props) {
    super(props);
    // Buggy code to intentionally throw an error (numbers don't have a `map` method)
    const someNumber = 3;
    someNumber.map(element => element * 2);
  }

  render() {
    return(
      <div>I'm a component with a buggy constructor that throws errors!</div>
    );
  }
}

export default BuggyConstructor;
