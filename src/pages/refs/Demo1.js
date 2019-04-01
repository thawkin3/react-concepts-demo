import React, { Component, Fragment, createRef } from 'react';

class Demo1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showInput: true,
      refCurrentValue: null,
    };

    this.textInputRef = createRef();
  }

  componentDidMount() {
    this.setState({ refCurrentValue: this.textInputRef.current });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.textInputRef.current !== this.state.refCurrentValue) {
      this.setState({ refCurrentValue: this.textInputRef.current });
    }
  }

  focusOnTextInput = () => {
    this.textInputRef.current && this.textInputRef.current.focus();
  }

  toggleTextInputDisplay = () => {
    this.setState(prevState => ({ showInput: !prevState.showInput }));
  }

  render() {
    return (
      <div className="demo-section refs-demo-1">
        <h3>Demo 1 - Adding a Ref to a DOM Element (Then Focusing an Input Element)</h3>
        {this.state.showInput && (
          <Fragment>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              ref={this.textInputRef}
            />
          </Fragment>
        )}
        <p>The current ref value is: {this.state.refCurrentValue ? this.state.refCurrentValue.tagName : 'null'}</p>
        <button
          type="button"
          onClick={this.focusOnTextInput}
        >
          Focus on the input
        </button>
        <button
          type="button"
          onClick={this.toggleTextInputDisplay}
        >
          Toggle the input display
        </button>
      </div>
    );
  }
}

export default Demo1;
