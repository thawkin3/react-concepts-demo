import React from 'react';
import Demo1 from './Demo1';
import Demo2 from './Demo2';
import Demo3 from './Demo3';
import Demo4 from './Demo4';
import Demo5 from './Demo5';
import Demo6 from './Demo6';
import Demo7 from './Demo7';
import './PureComponent.css';

const PureComponentPage = () => (
  <main className="page pure-component-page">
    <h2>PureComponent</h2>
    <div className="introduction">
      <p><code>React.PureComponent</code> is a component you can inherit from to get a slight performance optimization.
        While <code>React.Component</code> does a re-render every time a component's props or state changes or
        whenever its parent component re-renders, regardless of whether or not it affects the component's
        UI, <code>React.PureComponent</code> implements the <code>shouldComponentUpdate</code> lifecycle method and
        does a shallow comparison of the component's props and state and only re-renders if it finds a difference
        there.</p>
      <p>This works well for flat data structures and complex data structures if you always return new objects/arrays,
        but you can get into trouble if you are mutating arrays or objects (which you shouldn't be doing anyway!)
        because then those changes won't get picked up by the shallow comparison since the reference to the array or
        object would still be the same. Moral of the story: don't mutate data; return new copies of the data like
        a good functional programmer.</p>
      <p>The other caveat to keep in mind is that if a component extending <code>React.PureComponent</code> doesn't
        update, then its children won't update either.</p>
    </div>
    <hr />
    <Demo1 />
    <hr />
    <Demo2 />
    <hr />
    <Demo3 />
    <hr />
    <Demo4 />
    <hr />
    <Demo5 />
    <hr />
    <Demo6 />
    <hr />
    <Demo7 />
  </main>
);

export default PureComponentPage;
