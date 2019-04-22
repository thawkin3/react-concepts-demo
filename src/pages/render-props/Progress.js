import { Component } from 'react';

class Progress extends Component {
  state = { progress: 0 };

  incrementProgress = () => {
    this.setState(prevState => ({ progress: Math.min(100, prevState.progress + 1) }));
  };

  decrementProgress = () => {
    this.setState(prevState => ({ progress: Math.max(0, prevState.progress - 1) }));
  };

  resetProgress = () => {
    this.setState({ progress: 0 });
  };

  setProgress = (value) => {
    this.setState({ progress: Math.min(100, Math.max(0, value)) })
  };

  render() {
    const { render } = this.props;
    const { progress } = this.state;

    if (typeof render === 'function') {
      return render({
        progress,
        incrementProgress: this.incrementProgress,
        decrementProgress: this.decrementProgress,
        resetProgress: this.resetProgress,
        setProgress: this.setProgress,
      });
    }
    return null;
  }
}

export default Progress;
