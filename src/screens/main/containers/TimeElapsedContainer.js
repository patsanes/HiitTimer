import React from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';

import { TimeElapsed } from '../components';

class TimeElapsedContainer extends React.Component {
  render() {
    const { session } = this.props;
    const { isPlay, isStop, increaseTime, timePased } = session;
    return (
      <TimeElapsed
        isPlay={isPlay}
        isStop={isStop}
        increaseTime={increaseTime}
        timePased={timePased}
      />
    );
  }
}

TimeElapsedContainer.propTypes = {
  session: PropTypes.object.isRequired,
};

export default inject('session')(observer(TimeElapsedContainer));
