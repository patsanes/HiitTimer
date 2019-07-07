import React from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';
import { Countdown } from '../components';

class CountdownContainer extends React.Component {
  onFinish = () => {
    const {
      session: { timeCompleteWorkout, timePased, setStop },
      goToCongratsFromHome,
    } = this.props;
    if (timeCompleteWorkout === timePased) {
      setStop();
      goToCongratsFromHome();
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
      setStop,
      timePased,
      inProgress,
      timeCompleteWorkout,
      playSound,
    } = session;

    const count = isRest ? rest : training;
    const fill = -((currentTime / count) * 100 - 100);
    const fillComplete = (timePased / timeCompleteWorkout) * 100;

    return (
      <Countdown
        count={count}
        isRest={isRest}
        isPlay={isPlay}
        isStop={isStop}
        increaseSerie={increaseSerie}
        currentTime={currentTime}
        resetTime={resetTime}
        setStop={setStop}
        inProgress={inProgress}
        fill={fill}
        fillComplete={fillComplete}
        _onFinish={this.onFinish}
        playSound={playSound}
      />
    );
  }
}

CountdownContainer.propTypes = {
  session: PropTypes.object.isRequired,
  goToCongratsFromHome: PropTypes.func.isRequired,
};

export default inject('session')(observer(CountdownContainer));
