import React, { Component, createRef } from 'react';

class Demo3Child extends Component {
  childTextInput = createRef();

  focusOnTextInput = () => {
    this.childTextInput.current && this.childTextInput.current.focus();
  }

  render() {
    return (
      <div>
        <h4>Child Component with a Text Input</h4>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            ref={this.childTextInput}
          />
          <br />
          <button
            type="button"
            onClick={this.focusOnTextInput}
          >
            Focus on the input from the child component
          </button>
      </div>
    );
  }
}

export default Demo3Child;
