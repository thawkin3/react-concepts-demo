import React, { Component, PureComponent } from 'react';

class ChildClassComponent extends Component {
  render() {
    console.log('Demo 5 - classComponentRender');
    return(<p>I'm a class component!</p>);
  }
}

const ChildFunctionalComponent = () => {
  console.log('Demo 5 - functionalComponentRender');
  return(<p>I'm a functional component!</p>);
}

class ChildPureComponent extends PureComponent {
  render() {
    console.log('Demo 5 - pureComponentRender');
    return(<p>I'm a pure component!</p>);
  }
}

class ParentComponent extends Component {
  state = { level1: { level2: { randomNumbers: [Math.random()] } } };

  generateRandomNumber = () => {
    this.setState(prevState => ({ level1: { level2: { randomNumbers: [...prevState.level1.level2.randomNumbers, Math.random()] } } }));
  }

  render() {
    console.log('Demo 5 - parentComponentRender');

    return (
      <div className="add-border">
        <h4>Parent Component</h4>
        <button
          type="button"
          onClick={this.generateRandomNumber}
        >
          Generate random number
        </button>
        <p>Random numbers: {this.state.level1.level2.randomNumbers.join(', ')}</p>
        <div className="children-container">
          <div className="add-border example-section">
            <h5>Class Component</h5>
            <ChildClassComponent copyOfParentState={this.state} />
          </div>
          <div className="add-border example-section">
            <h5>Functional Component</h5>
            <ChildFunctionalComponent copyOfParentState={this.state} />
          </div>
          <div className="add-border example-section">
            <h5>Pure Component</h5>
            <ChildPureComponent copyOfParentState={this.state} />
          </div>
        </div>
      </div>);
  }
}

class Demo5 extends Component {
  render() {
    return (
      <div className="demo-section pure-component-demo-5">
        <h3>Demo 5 - Re-render in a Parent Component, Child Components Accept a Prop With a Changed Deeply Nested Value In an Array</h3>
        <p>Here we have a parent component that renders three child components. Each child component is of a
          different type: a class component extending <code>React.Component</code>, a functional
          component, and a class component extending <code>React.PureComponent</code>. The parent component
          updates every time a new random number is generated, and that value is stored deep within the parent's
          state. The entire state is passed down as a prop to each of the components. Because the prop changed,
          each child component also updates and re-renders.</p>
        <ParentComponent />
      </div>
    );
  }
}

export default Demo5;
