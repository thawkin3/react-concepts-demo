import React from 'react';
import Button from './Button';

const BoringComponent = (props) => (
  <div className="add-border">
    <p>This is <b>{props.secretToLife ? 'an exciting' : 'a boring'}</b> component.</p>
    <p>The secret to life is: {props.secretToLife || '???'}</p>
    {props.sendAlert && (
      <Button buttonText="Send alert" clickHandler={props.sendAlert} />
    )}
    {props.counter != null && props.incrementCounter && (
      <div>
        <Button buttonText="Increment counter" clickHandler={props.incrementCounter} />
        <p>Counter value: {props.counter}</p>
      </div>
    )}
  </div>
);

export default BoringComponent;
