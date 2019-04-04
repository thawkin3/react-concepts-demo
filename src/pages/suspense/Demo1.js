import React, { Suspense, lazy } from 'react';

const ComponentToLazyLoad = lazy(() => import('./ComponentToLazyLoad'));

const Demo1 = () => (
  <div className="demo-section suspense-demo-1">
    <h3>Demo 1 - Suspense and Lazy Loading</h3>
    <p>When this lazy-loaded content is being fetched, you need to show some fallback UI. In this example, we show the text <span className="loading">"Loading..."</span> while the component is being loaded.</p>
    <p>This component is small, so to see the fallback UI you may want to slow down your internet connection using Chrome's dev tools. To do this, open the developer tools for your browser, click on the Network tab, then click on "Online" to show the dropdown menu of different options. Choose "Slow 3G", then refresh your page. You should see the fallback content first, and then once the second chunk has been fetched, you'll see the actual component we want to show.</p>
    <Suspense fallback={<div className="loading">Loading...</div>}>
      <ComponentToLazyLoad />
    </Suspense>
  </div>
);

export default Demo1;
