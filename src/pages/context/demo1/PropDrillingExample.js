import React, { Component } from 'react';

const Level5Component = (props) => (
  <div className="add-border">
    <p><b>Level 5:</b> I actually use the counter value! <b>Counter value is: {props.counterValue}.</b></p>
  </div>
);

const Level4Component = (props) => (
  <div className="add-border">
    <p><b>Level 4:</b> I don't care about the counter value, but I have it in my props and pass it down.</p>
    <Level5Component counterValue={props.counterValue} />
  </div>
);

const Level3Component = (props) => (
  <div className="add-border">
    <p><b>Level 3:</b> I don't care about the counter value, but I have it in my props and pass it down.</p>
    <Level4Component counterValue={props.counterValue} />
  </div>
);

const Level2Component = (props) => (
  <div className="add-border">
    <p><b>Level 2:</b> I don't care about the counter value, but I have it in my props and pass it down.</p>
    <Level3Component counterValue={props.counterValue} />
  </div>
);

class PropDrillingExample extends Component {
  state = { counterValue: 0 };

  incrementCounter = () => {
    this.setState(prevState => ({ counterValue: prevState.counterValue + 1 }));
  }

  render() {
    return (
      <div className="add-border">
        <p><b>Level 1:</b> I control the counter value and pass it down.</p>
        <button
          type="button"
          onClick={this.incrementCounter}
        >
          Increment counter
        </button>
        <Level2Component counterValue={this.state.counterValue}/>
      </div>
    );
  }
}

export default PropDrillingExample;
