import React, { useEffect } from 'react'

const Demo3 = () => {
  useEffect(() => {
    console.log('Effect was run, and the interval has started running');
    const myInterval = setInterval(() => console.log('Interval is running'), 500);
    // If you return a function, that gets run when the component unmounts, so similar to componentWillUnmount:
    return (() => {
      clearInterval(myInterval);
      console.log('Effect cleanup was run, and the interval has been cleared');
    });
  });

  return (
    <div className="demo-section hooks-demo-3">
      <h3>Demo 3 - The Effect Hook and Cleanup</h3>
      <p>This effect sets up an interval to console log every 500ms. Open up your browser's JavaScript console to see the logs.</p>
      <p>Navigate away from this page using the Home button at the top-right of your screen.</p>
      <p>This component will unmount, and the cleanup will be performed so that the interval is cleared and no longer console logs.</p>
    </div>
  );
}

export default Demo3;
