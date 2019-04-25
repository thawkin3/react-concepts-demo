import React, { PureComponent, createContext } from 'react';

const CounterContext = createContext(0);

class PureInterrupter extends PureComponent {
  render() {
    return this.props.render();
  }
}

class Level5Component extends PureComponent {
  render() {
    return (
      <CounterContext.Consumer>
        {counterValue => (
          <PureInterrupter
            render={() => (
              <div className="add-border">
                <p><b>Level 5:</b> I actually use the counter value! I get it from the Context Consumer. <b>Counter value is: {counterValue}.</b></p>
              </div>
            )}
          />
        )}
      </CounterContext.Consumer>
    );
  }
}

class Level4Component extends PureComponent {
  render() {
    return (
      <div className="add-border">
        <p><b>Level 4:</b> I don't care about the counter value, and I don't have to have it in my props. Hooray!</p>
        <Level5Component/>
      </div>
    );
  }
}

class Level3Component extends PureComponent {
  render() {
    return (
      <div className="add-border">
        <p><b>Level 3:</b> I don't care about the counter value, and I don't have to have it in my props. Hooray!</p>
        <Level4Component/>
      </div>
    );
  }
}

class Level2Component extends PureComponent {
  render() {
    return (
      <div className="add-border">
        <p><b>Level 2:</b> I don't care about the counter value, and I don't have to have it in my props. Hooray!</p>
        <Level3Component/>
      </div>
    );
  }
}

class PureComponentContextExample extends PureComponent {
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

export default PureComponentContextExample;
