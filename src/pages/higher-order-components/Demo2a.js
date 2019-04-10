import React, { Component } from 'react';
import ColoredText from './ColoredText';
import logUpdates from './logUpdates';

const WrappedColoredText = logUpdates(ColoredText);

class Demo2a extends Component {
  state = { textColor: 'red' };

  handleTextInputChange = (e) => {
    this.setState({ textColor: e.target.value });
  }

  render() {
    const { textColor } = this.state;

    return (
      <div>
        <label htmlFor="textColorInput">Text Color:</label>
        <input
          type="text"
          id="textColorInput"
          value={textColor}
          onChange={this.handleTextInputChange}
        />
        <WrappedColoredText textColor={textColor} />
      </div>
    );
  }
}

export default Demo2a;
