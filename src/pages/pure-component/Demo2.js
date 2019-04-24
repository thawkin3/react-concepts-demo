import React, { Component, PureComponent } from 'react';

class ChildClassComponent extends Component {
  render() {
    console.log('Demo 2 - classComponentRender');
    return(<p>I'm a class component!</p>);
  }
}

const ChildFunctionalComponent = () => {
  console.log('Demo 2 - functionalComponentRender');
  return(<p>I'm a functional component!</p>);
}

class ChildPureComponent extends PureComponent {
  render() {
    console.log('Demo 2 - pureComponentRender');
    return(<p>I'm a pure component!</p>);
  }
}

class ParentComponent extends Component {
  state = { randomNumber: Math.random() };

  generateRandomNumber = () => {
    this.setState({ randomNumber: Math.random() });
  }

  render() {
    console.log('Demo 2 - parentComponentRender');

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
            <ChildClassComponent unrelatedProp={1} />
          </div>
          <div className="add-border example-section">
            <h5>Functional Component</h5>
            <ChildFunctionalComponent unrelatedProp={1} />
          </div>
          <div className="add-border example-section">
            <h5>Pure Component</h5>
            <ChildPureComponent unrelatedProp={1} />
          </div>
        </div>
      </div>);
  }
}

class Demo2 extends Component {
  render() {
    return (
      <div className="demo-section pure-component-demo-2">
        <h3>Demo 2 - Re-render in a Parent Component, Child Components Accept a Prop Which Does Not Change</h3>
        <p>Here we have a parent component that renders three child components. Each child component is of a
          different type: a class component extending <code>React.Component</code>, a functional
          component, and a class component extending <code>React.PureComponent</code>.The parent component
          updates every time a new random number is generated. The component extending <code>React.Component</code> and
          the functional component re-render every time, but the component extending <code>React.PureComponent</code> does
          not re-render since its prop doesn't change!</p>
        <ParentComponent />
      </div>
    );
  }
}

export default Demo2;
