import React, { Component, createRef } from 'react';
import Demo3Child from './Demo3Child';

class Demo3Parent extends Component {
  constructor(props) {
    super(props);

    this.childComponentRef = createRef();
  }

  focusOnTextInputThruChildComponentMethod = () => {
    this.childComponentRef.current && this.childComponentRef.current.focusOnTextInput();
  }

  render() {
    return (
      <div>
        <h4>Parent Component with a Button</h4>
        <button
          type="button"
          onClick={this.focusOnTextInputThruChildComponentMethod}
        >
          Focus on the input from the parent component
        </button>
        <Demo3Child ref={this.childComponentRef} />
      </div>
    );
  }
}

export default Demo3Parent;
