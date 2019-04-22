import React from 'react';
import ListViewerWithDifferentRenderPropName from './ListViewerWithDifferentRenderPropName';

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

const Demo4 = () => (
  <div className="demo-section render-props-demo-4">
    <h3>Demo 4 - Render Prop Not Called "Render"</h3>
    <p>The <code>render</code> prop doesn't have to be called <code>render</code>. Here we're using a similar setup compared
      to the previous demo, only this time our <code>render</code> prop is actually called <code>formatListItem</code></p>
    <div className="add-border example-section">
      <h4>Example A - Data is an array of strings</h4>
      <ListViewerWithDifferentRenderPropName
        data={dataSet1}
        formatListItem={item => <li>{item}</li>}
      />
    </div>
    <div className="add-border example-section">
      <h4>Example B - Data is an array of objects</h4>
      <ListViewerWithDifferentRenderPropName
        data={dataSet2}
        formatListItem={person => <li>{`${person.firstName} ${person.lastName}, ${person.age}`}</li>}
      />
    </div>
  </div>
);

export default Demo4;
