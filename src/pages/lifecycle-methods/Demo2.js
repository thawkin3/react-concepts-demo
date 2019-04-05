import React, { Component, createRef } from 'react';

class Demo2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showShoppingList: true,
      currentHeight: null,
      previousHeight: null,
    };

    this.containerRef = createRef();

    this.toggleShoppingList = this.toggleShoppingList.bind(this);
  }

  componentDidMount() {
    this.setState({ currentHeight: this.containerRef.current && this.containerRef.current.clientHeight });
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    return { previousHeight: this.containerRef.current && this.containerRef.current.clientHeight };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.showShoppingList !== this.state.showShoppingList) {
      this.setState({
        currentHeight: this.containerRef.current && this.containerRef.current.clientHeight,
        previousHeight: snapshot.previousHeight,
      });
    }
  }

  toggleShoppingList() {
    this.setState(prevState => ({ showShoppingList: !prevState.showShoppingList }));
  }

  render() {
    const { showShoppingList, currentHeight, previousHeight } = this.state;

    return (
      <div className="demo-section lifecycle-methods-demo-2">
        <h3>Demo 2 - getSnapshotBeforeUpdate</h3>
        <p>This lifecycle method is great for capturing DOM information right before the component renders, so you can compare before and after values. In this example, we'll see the captured value of the container's height before and after the component updates.</p>
        <div className="bigger-container" ref={this.containerRef}>
          <p><b>Main Container Current Height:</b> {currentHeight ? `${currentHeight}px` : 'N/A'}</p>
          <p><b>Main Container Previous Height:</b> {previousHeight ? `${previousHeight}px` : 'N/A'}</p>
          <p>This is the main container. It has some children that we'll toggle showing and hiding.</p>
          <button
            type="button"
            onClick={this.toggleShoppingList}
          >
            Toggle shopping list visibility
          </button>
          {showShoppingList && (
            <div className="smaller-container">
              <p>Shopping List</p>
              <ul>
                <li>Bread</li>
                <li>Milk</li>
                <li>Eggs</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Demo2;
