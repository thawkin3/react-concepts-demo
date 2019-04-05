import React, { Component, createRef } from 'react';
import Demo1Child from './Demo1Child';

class Demo1Parent extends Component {
  constructor(props) {
    console.log('Demo1 Parent constructor');
    super(props);

    this.state = {
      showChild: true,
      textColor: '#000',
    };

    this.parentContainerRef = createRef();

    this.toggleChildVisibility = this.toggleChildVisibility.bind(this);
    this.handleTextInputChange = this.handleTextInputChange.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('Demo1 Parent getDerivedStateFromProps', 'nextProps:', nextProps, 'prevState:', prevState);
    return null;
  }

  componentDidMount() {
    console.log('Demo1 Parent componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Demo1 Parent shouldComponentUpdate', 'nextProps:', nextProps, 'nextState:', nextState);
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('Demo1 Parent getSnapshotBeforeUpdate', 'prevProps:', prevProps, 'prevState:', prevState);
    return { parentHeight: this.parentContainerRef.current && this.parentContainerRef.current.clientHeight };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(
      'Demo1 Parent componentDidUpdate',
      'prevProps:', prevProps,
      'props:', this.props,
      'prevState:', prevState,
      'state:', this.state,
      'snapshot:', snapshot, 'new parentHeight:', { parentHeight: this.parentContainerRef.current && this.parentContainerRef.current.clientHeight },
    );
  }

  componentWillUnmount() {
    console.log('Demo1 Parent componentWillUnmount');
  }

  toggleChildVisibility() {
    this.setState(prevState => ({ showChild: !prevState.showChild }));
  }

  handleTextInputChange(e) {
    this.setState({ textColor: e.target.value });
  }

  render() {
    console.log('Demo1 Parent render');
    const { showChild, textColor } = this.state;
    return (
      <div className="demo1-parent" ref={this.parentContainerRef}>
        <p>I'm the parent component. I have state for whether or not to show the child component and what color the child component's text should be.</p>
        <button
          type="button"
          onClick={this.toggleChildVisibility}
        >
          Toggle child visibility
        </button>
        <label htmlFor="textColorInput">Text color:</label>
        <input
          type="text"
          id="textColorInput"
          value={textColor}
          onChange={this.handleTextInputChange}
        />
        {showChild && <Demo1Child textColor={textColor} />}
      </div>
    );
  }
}

export default Demo1Parent;
