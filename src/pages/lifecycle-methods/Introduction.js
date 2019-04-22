import React from 'react';

const Introduction = () => (
  <div className="introduction">
    <h3>Mounting</h3>
    <p>When a component is being created and inserted into the DOM, the following lifecycle methods are called in
      this order:</p>
    <ol>
      <li><b>constructor()</b> - Initialize state and bind methods here. Don't forget to
        call <code>super(props)</code>. Don't cause any side effects here.</li>
      <li><b>getDerivedStateFromProps()</b> - Create a new state based on the new props and previous state.
        Don't cause any side effects here.</li>
      <li><b>render()</b> - Render your component (write your JSX here). Don't cause any side effects here.</li>
      <li><b>componentDidMount()</b> - Set up subscriptions, intervals, timeouts, event listeners, or make API
        requests here.</li>
    </ol>
    <h3>Updating</h3>
    <p>When a component is updating and being re-rendered due to a change in state or props, the following
      lifecycle methods are called in this order:</p>
    <ol>
      <li><b>getDerivedStateFromProps()</b> - Create a new state based on the new props and previous state.
        Don't cause any side effects here.</li>
      <li><b>shouldComponentUpdate()</b> - Return <code>true</code> to update or <code>false</code> to not update.
        Defaults to <code>true</code>. In general, you shouldn't use this method and just let React decide when
        the component needs to update.</li>
      <li><b>render()</b> - Render your component (write your JSX here). Don't cause any side effects here.</li>
      <li><b>getSnapshotBeforeUpdate()</b> - Capture information about the DOM just before the new content is
        rendered on the screen. This is generally good for getting things like elements heights or positions
        if you need to auto-scroll somewhere after the component updates.</li>
      <li><b>componentDidUpdate()</b> - Make API requests here if you need to. In general, you'll want to
        wrap any code here in an if statement so that the code only runs when certain pieces of props or
        state change, not just any time the component updates.</li>
    </ol>
    <h3>Unmounting</h3>
    <p>When a component is being removed from the DOM, the following lifecycle methods are called in this order:</p>
    <ol>
      <li><b>componentWillUnmount()</b> - Do clean-up here. Cancel any subscriptions, intervals, timeouts,
        event listeners, or pending API requests.</li>
    </ol>
  </div>
);

export default Introduction;
