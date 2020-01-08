import React from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';
import { colors } from 'HiitTimer/src/utils/theme';
import { Countdown } from '../components';

const CountdownContainer = props => {
  const onFinish = () => {
    const {
      session: { timeCompleteWorkout, timePased, setStop },
      goToCongratsFromHome,
      // Reset progress
    } = props;
    if (timeCompleteWorkout === timePased) {
      setStop();
      goToCongratsFromHome();
    }
  };

  const { session } = props;
  const {
    isRest,
    timePasedWorkout,
    timePasedPerSerie,
    // playSound,
  } = session;

  const currentCircleColor = isRest ? colors.restGreen : colors.restBlue;

  return (
    <Countdown
      currentCircleColor={currentCircleColor}
      fill={timePasedPerSerie}
      fillComplete={timePasedWorkout}
      _onFinish={onFinish}
      // playSound={playSound}
    />
  );
};

CountdownContainer.propTypes = {
  session: PropTypes.object.isRequired,
  goToCongratsFromHome: PropTypes.func.isRequired,
};

export default inject('session')(observer(CountdownContainer));
