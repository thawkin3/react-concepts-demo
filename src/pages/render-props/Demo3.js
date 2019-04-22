import React from 'react';
import ListViewer from './ListViewer';

const dataSet1 = [
  'bread',
  'butter',
  'milk',
  'eggs',
];

const dataSet2 = [
  { firstName: 'John', lastName: 'Doe', age: 25 },
  { firstName: 'Mary', lastName: 'Smith', age: 22 },
  { firstName: 'Ron', lastName: 'Swanson', age: 34 },
];

const Demo3 = () => (
  <div className="demo-section render-props-demo-3">
    <h3>Demo 3 - List Viewer Render Prop Component</h3>
    <p>We've defined a component called <code>ListViewer</code> that accepts two props: 1) <code>data</code>,
      an array of items, and 2) <code>render</code>, a function which tells the component how to render each item.
      Our component then calls its <code>render</code> prop function with the <code>data</code> prop as the argument.</p>
    <p>We then have two components that use the <code>ListViewer</code> component. The first has an array of strings
      as its data set, and the render function simply prints the string for each item. The second has an array of
      objects as its data set, and the render function uses the different key/value pairs in the object to print
      out each item's (person's) first and last name followed by their age.</p>
    <div className="add-border example-section">
      <h4>Example A - Data is an array of strings</h4>
      <ListViewer
        data={dataSet1}
        render={item => <li>{item}</li>}
      />
    </div>
    <div className="add-border example-section">
      <h4>Example B - Data is an array of objects</h4>
      <ListViewer
        data={dataSet2}
        render={person => <li>{`${person.firstName} ${person.lastName}, ${person.age}`}</li>}
      />
    </div>
  </div>
);

export default Demo3;
