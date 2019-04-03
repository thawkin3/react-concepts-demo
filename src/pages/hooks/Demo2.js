import React, { useState, useEffect } from 'react'

const Demo2 = () => {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;

    // If you return a function, that gets run when the component unmounts, so similar to componentWillUnmount:
    return (() => {
      document.title = 'React Concepts';
    });
  });

  return (
    <div className="demo-section hooks-demo-2">
      <h3>Demo 2 - The Effect Hook</h3>
      <p>The effect hook is used by importing <code>useEffect</code> from React. The <code>useEffect</code> method allows you to write a function that gets run when the component mounts and when it updates.</p>
      <p>If your effect function returns a function, that function gets called when the component unmounts. This is where you do any needed cleanup.</p>
      <p>Click the button below, and then check the page's title shown in the browser tab to see it get updated.</p>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        Click to increment counter
      </button>
    </div>
  );
}

export default Demo2;
