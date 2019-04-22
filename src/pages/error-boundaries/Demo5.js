import React, { Component } from 'react';
import BuggyConstructor from './BuggyConstructor';

class Demo5 extends Component {
  state = { showChild: false };

  toggleShowChild = () => {
    this.setState(prevState => ({ showChild: !prevState.showChild }));
  }

  render() {
    return (
      <div className="demo-section error-boundaries-demo-5">
        <h3>Demo 5 - Error Thrown in the Constructor</h3>
        <p>In this demo we have a button to show a child component. This child component has a constructor
          with bad code in it that will throw an error when called. When the button is clicked, the child
          component will begin mounting, which will call the constructor, which will then throw an error
          which is caught by our error boundary.</p>
        <button
          type="button"
          onClick={this.toggleShowChild}
        >
          {this.state.showChild ? 'Hide Child' : 'Show Child'}
        </button>
        {this.state.showChild && <BuggyConstructor />}
      </div>
    );
  }
}

export default Demo5;
