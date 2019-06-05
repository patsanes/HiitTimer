import React from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';
import { Countdown } from '../components';

class CountdownContainer extends React.Component {
  _onFinish = () => {
    const {
      session: { timeCompleteWorkout, timePased },
      onCompleteWorkout,
    } = this.props;
    if (timeCompleteWorkout == timePased) {
      onCompleteWorkout();
    }
  };
  render() {
    const { session } = this.props;
    const {
      training,
      rest,
      isRest,
      isPlay,
      isStop,
      increaseSerie,
      currentTime,
      resetTime,
      timePased,
      inProgress,
      timeCompleteWorkout,
    } = session;

    const count = isRest ? rest : training;
    const fill = -((currentTime / count) * 100 - 100);
    const fillComplete = (timePased / timeCompleteWorkout) * 100;

    return (
      <Countdown
        count={count}
        isPlay={isPlay}
        isStop={isStop}
        increaseSerie={increaseSerie}
        currentTime={currentTime}
        resetTime={resetTime}
        inProgress={inProgress}
        fill={fill}
        fillComplete={fillComplete}
        _onFinish={this._onFinish}
      />
    );
  }
}

CountdownContainer.propTypes = {
  session: PropTypes.object.isRequired,
  onCompleteWorkout: PropTypes.func.isRequired,
};

export default inject('session')(observer(CountdownContainer));
