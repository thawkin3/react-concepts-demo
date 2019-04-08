import React, { Component } from 'react';

class Demo2 extends Component {
  static handleDefaultClick() {
    import('./functionsToDynamicallyImport').then(module => {
      module.default();
    });
  }

  static handleNamedClick() {
    import('./functionsToDynamicallyImport').then(module => {
      module.alertAboutNamedExport();
    });
  }

  render() {
    return(
      <div className="demo-section code-splitting-demo-2">
        <h3>Demo 2 - Dynamic Imports</h3>
        <p>Dynamic imports are not currently part of ECMAScript, but it is a stage 3 proposal. Rather than loading all dependencies up front when the module requiring them loads, your module can now only load the imports when they are actually needed or used.</p>
        <p>In this example, we have two buttons. Each has a click handler that calls another method. Both methods are dynamically imported. The first method is the default export and the second method is a named export. Dynamic imports work with either!</p>
        <p>Also note that we have a console log from the imported module. This message only gets logged once when the module first loads when you first click either button, but not every time a button is clicked since the module has already been loaded at that point.</p>
        <button
          type="button"
          onClick={Demo2.handleDefaultClick}
        >
          Click me for the default export!
        </button>
        <button
          type="button"
          onClick={Demo2.handleNamedClick}
        >
          Click me for the named export!
        </button>
      </div>
    );
  }
}

export default Demo2;
