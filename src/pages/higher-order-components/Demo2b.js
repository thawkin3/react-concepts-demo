import React, { Component } from 'react';
import Button from './Button';
import logUpdates from './logUpdates';

const WrappedButton = logUpdates(Button);

class Demo2b extends Component {
  state = { buttonIsOn: false };

  toggleValue = () => {
    this.setState(prevState => ({ buttonIsOn: prevState.buttonIsOn + 1 }));
  }

  render() {
    const { buttonIsOn } = this.state;

    return (
      <div>
        <p>Toggled value is: {buttonIsOn ? 'On' : 'Off'}</p>
        <WrappedButton
          buttonText={buttonIsOn ? 'Turn Off' : 'Turn On'}
          clickHandler={this.toggleValue}
        />
      </div>
    );
  }
}

export default Demo2b;
