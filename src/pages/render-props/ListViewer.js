import React, { Component } from 'react';

class ListViewer extends Component {
  render() {
    const { render, data } = this.props;

    if (typeof render === 'function' && data && typeof data === 'object') {
      return (
        <ul>
          {data.map(item => render(item))}
        </ul>
      );
    }
    return null;
  }
}

export default ListViewer;
