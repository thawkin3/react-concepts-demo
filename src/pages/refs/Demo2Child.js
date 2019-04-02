import React, { Component } from 'react';

class Demo2Child extends Component {
  render() {
    return (
      <div>
        <h4>Child Component with a Text Input</h4>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            ref={this.props.inputRef}
          />
      </div>
    );
  }
}

export default Demo2Child;
