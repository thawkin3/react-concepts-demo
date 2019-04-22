import React, { Component } from 'react';

class ListViewerWithDifferentRenderPropName extends Component {
  render() {
    const { formatListItem, data } = this.props;

    if (typeof formatListItem === 'function' && data && typeof data === 'object') {
      return (
        <ul>
          {data.map(item => formatListItem(item))}
        </ul>
      );
    }
    return null;
  }
}

export default ListViewerWithDifferentRenderPropName;
