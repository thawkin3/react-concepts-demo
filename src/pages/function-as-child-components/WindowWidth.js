import { Component } from 'react';

class WindowWidth extends Component {
  constructor(props) {
    super(props);

    this.state = { windowWidth: window.innerWidth };

    this.onResize = this.onResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize(e) {
    this.setState({ windowWidth: e.target.innerWidth });
  }

  render() {
    const { children } = this.props;
    const { windowWidth } = this.state;

    if (typeof children === 'function') {
      return children(windowWidth);
    }
    return null;
  }
}

export default WindowWidth;
