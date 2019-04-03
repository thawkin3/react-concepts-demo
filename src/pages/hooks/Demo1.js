import React, { useState } from 'react'

const Demo1 = () => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  return (
    <div className="demo-section hooks-demo-1">
      <h3>Demo 1 - The State Hook</h3>
      <p>The state hook is used by importing <code>useState</code> from React. The <code>useState</code> method returns an array of two elements: the first is the state variable, and the second is the function that updates it.</p>
      <p>Counter value: {count}</p>
      <button type="button" onClick={() => setCount(prevCount => prevCount + 1)}>
        Increment counter
      </button>
      <button type="button" onClick={() => setCount(prevCount => prevCount - 1)}>
        Decrement counter
      </button>
      <button type="button" onClick={() => setCount(0)}>
        Reset counter
      </button>
      <p>Your name is: {name}</p>
      <input type="text" onChange={e => setName(e.target.value)}/>
    </div>
  );
}

export default Demo1;
