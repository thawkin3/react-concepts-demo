import React from 'react';
import Demo3Parent from './Demo3Parent';

const Demo3 = () => (
  <div className="demo-section refs-demo-3">
    <h3>Demo 3 - Adding a Ref to a Class Component as an Actual Ref (Then Focusing an Input Element)</h3>
    <p>Here the ref is created in the parent component and placed directly on the child component.</p>
    <p>So in this case, the ref refers not to the text input, but to the entire child component instance.</p>
    <p>The child component also creates its own ref on the text input and defines a method to focus on the text input.</p>
    <p>Now the child can use its own method to focus on the text input, and the parent can also access the child's method which then focuses on the text input.</p>
    <Demo3Parent />
  </div>
);

export default Demo3;
