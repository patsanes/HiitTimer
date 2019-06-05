import React from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';

import { TimeElapsed } from '../components';

class TimeElapsedContainer extends React.Component {
  render() {
    const { session, onCompleteWorkout } = this.props;
    const { isPlay, isStop, increaseTime } = session;
    return <TimeElapsed isPlay={isPlay} isStop={isStop} increaseTime={increaseTime} />;
  }
}

TimeElapsedContainer.propTypes = {
  session: PropTypes.object.isRequired,
  onCompleteWorkout: PropTypes.func.isRequired,
};

export default inject('session')(observer(TimeElapsedContainer));
