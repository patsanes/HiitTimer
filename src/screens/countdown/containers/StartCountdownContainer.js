import React from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';
import { StartCountdown } from '../components';

class StartCountdownContainer extends React.Component {
  constructor(props) {
    const { session } = props;
    const { startCountdown } = session;
    super(props);
    this.state = { currentCount: startCountdown };
  }

  componentDidMount() {
    this.intervalId = setInterval(this.timer.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  timer() {
    const { currentCount } = this.state;
    const { goToHome } = this.props;
    if (currentCount > 0) {
      this.setState({
        currentCount: currentCount - 1,
      });
    }

    if (currentCount < 1) {
      goToHome();
      clearInterval(this.intervalId);
    }
  }

  render() {
    const { currentCount } = this.state;
    return <StartCountdown currentCount={currentCount} />;
  }
}

StartCountdownContainer.propTypes = {
  session: PropTypes.object.isRequired,
  goToHome: PropTypes.func.isRequired,
};

export default inject('session')(observer(StartCountdownContainer));
