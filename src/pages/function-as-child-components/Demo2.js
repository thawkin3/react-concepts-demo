import React from 'react';
import Progress from './Progress';

const Demo2 = () => (
  <div className="demo-section function-as-child-components-demo-2">
    <h3>Demo 2 - Progress FACC</h3>
    <p>We've defined a FACC called <code>Progress</code> that calls its <code>children</code> function with arguments for the progress value as well as callback methods to increment, decrement, reset, and set the progress value.</p>
    <p>We then have two components that use the <code>Progress</code> component. The first simply displays the progress value on the page and has buttons to increment, decrement, and reset the progress value. The second displays a slider input that controls the progress value. There is also a number input you can use to change the progress value.</p>
    <Progress>
      {props => (
        <div className="add-border example-section">
          <h4>Example A - Show buttons that control the progress</h4>
          <p>The progress value is: {props.progress}</p>
          <button
            type="button"
            onClick={props.incrementProgress}
          >
            Increase progress
          </button>
          <button
            type="button"
            onClick={props.decrementProgress}
          >
            Decrease progress
          </button>
          <button
            type="button"
            onClick={props.resetProgress}
          >
            Reset progress
          </button>
        </div>
      )}
    </Progress>
    <Progress>
      {props => (
        <div className="add-border example-section">
          <h4>Example B - Show a number input and range slider that control the progress</h4>
          <p>The progress value is: {props.progress}</p>
          <label htmlFor="progressNumberInput">Set the progress value with the number input:</label>
          <input
            type="number"
            id="progressNumberInput"
            value={props.progress}
            onChange={e => props.setProgress(e.target.value)}
          />
          <label htmlFor="progressSliderInput">Set the progress value with the slider:</label>
          <input
            type="range"
            id="progressSliderInput"
            min={0}
            max={100}
            value={props.progress}
            onChange={e => props.setProgress(e.target.value)}
          />
        </div>
        )}
    </Progress>
  </div>
);

export default Demo2;
