import React, { Component, createContext } from 'react';

const CounterContext = createContext(0);

const Level5Component = (props) => (
  <CounterContext.Consumer>
    {counterValue => (
      <div className="add-border">
        <p><b>Level 5:</b> I actually use the counter value! I get it from the Context Consumer. <b>Counter value is: {counterValue}.</b></p>
      </div>
    )}
  </CounterContext.Consumer>
);

const Level4Component = () => (
  <div className="add-border">
    <p><b>Level 4:</b> I don't care about the counter value, and I don't have to have it in my props. Hooray!</p>
    <Level5Component />
  </div>
);

const Level3Component = () => (
  <div className="add-border">
    <p><b>Level 3:</b> I don't care about the counter value, and I don't have to have it in my props. Hooray!</p>
    <Level4Component />
  </div>
);

const Level2Component = () => (
  <div className="add-border">
    <p><b>Level 2:</b> I don't care about the counter value, and I don't have to have it in my props. Hooray!</p>
    <Level3Component />
  </div>
);

class ComponentContextExample extends Component {
  state = { counterValue: 0 };

  incrementCounter = () => {
    this.setState(prevState => ({ counterValue: prevState.counterValue + 1 }));
  }

  render() {
    return (
      <CounterContext.Provider value={this.state.counterValue}>
        <div className="add-border">
          <p><b>Level 1:</b> I control the counter value and pass it into the Context Provider. <b>Counter value is: {this.state.counterValue}.</b></p>
          <button
            type="button"
            onClick={this.incrementCounter}
          >
            Increment counter
          </button>
          <Level2Component />
        </div>
      </CounterContext.Provider>
    );
  }
}

export default ComponentContextExample;
