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
    const { render } = this.props;
    const { windowWidth } = this.state;

    if (typeof render === 'function') {
      return render(windowWidth);
    }
    return null;
  }
}

export default WindowWidth;
