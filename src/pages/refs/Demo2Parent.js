import React, { Component, createRef } from 'react';
import Demo2Child from './Demo2Child';

class Demo2Parent extends Component {
  constructor(props) {
    super(props);

    this.textInputRef = createRef();
  }

  focusOnTextInput = () => {
    this.textInputRef.current && this.textInputRef.current.focus();
  }

  render() {
    return (
      <div>
        <h4>Parent Component with a Button</h4>
        <button
          type="button"
          onClick={this.focusOnTextInput}
        >
          Focus on the input
        </button>
        <Demo2Child inputRef={this.textInputRef} />
      </div>
    );
  }
}

export default Demo2Parent;
