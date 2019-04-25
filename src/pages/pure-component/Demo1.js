import React, { Component, PureComponent } from 'react';

class ChildClassComponent extends Component {
  render() {
    console.log('Demo 1 - classComponentRender');
    return(<p>I'm a class component!</p>);
  }
}

const ChildFunctionalComponent = () => {
  console.log('Demo 1 - functionalComponentRender');
  return(<p>I'm a functional component!</p>);
}

class ChildPureComponent extends PureComponent {
  render() {
    console.log('Demo 1 - pureComponentRender');
    return(<p>I'm a pure component!</p>);
  }
}

class ParentComponent extends Component {
  state = { randomNumber: Math.random() };

  generateRandomNumber = () => {
    this.setState({ randomNumber: Math.random() });
  }

  render() {
    console.log('Demo 1 - parentComponentRender');

    return (
      <div className="add-border">
        <h4>Parent Component</h4>
        <button
          type="button"
          onClick={this.generateRandomNumber}
        >
          Generate random number
        </button>
        <p>Random number: {this.state.randomNumber}</p>
        <div className="children-container">
          <div className="add-border example-section">
            <h5>Class Component</h5>
            <ChildClassComponent />
          </div>
          <div className="add-border example-section">
            <h5>Functional Component</h5>
            <ChildFunctionalComponent />
          </div>
          <div className="add-border example-section">
            <h5>Pure Component</h5>
            <ChildPureComponent />
          </div>
        </div>
      </div>);
  }
}

class Demo1 extends Component {
  render() {
    return (
      <div className="demo-section pure-component-demo-1">
        <h3>Demo 1 - Re-render in a Parent Component, Child Components Do Not Accept Any Props</h3>
        <p>Here we have a parent component that renders three child components. Each child component is of a
          different type: a class component extending <code>React.Component</code>, a functional
          component, and a class component extending <code>React.PureComponent</code>. The parent component
          updates every time a new random number is generated. The component extending <code>React.Component</code> and
          the functional component re-render every time, but the component extending <code>React.PureComponent</code> does
          not re-render since its props (or lack thereof) don't change!</p>
        <p>Open up your browser's JavaScript console and then interact with the demo to see console logs when each
          component re-renders.</p>
        <ParentComponent />
      </div>
    );
  }
}

export default Demo1;
