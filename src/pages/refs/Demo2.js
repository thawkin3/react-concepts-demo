import React from 'react';
import Demo2Parent from './Demo2Parent';

const Demo2 = () => (
  <div className="demo-section refs-demo-2">
    <h3>Demo 2 - Adding a Ref to a Class Component as a Custom Prop (Then Focusing an Input Element)</h3>
    <p>Here the ref is created in the parent component and passed down to the child component as a custom prop.</p>
    <p>The child component places the ref on the text input, and the parent component calls focus() directly
      on the text input.</p>
    <Demo2Parent />
  </div>
);

export default Demo2;
