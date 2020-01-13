import React from 'react';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { colors } from 'HiitTimer/src/utils/theme';
import { useStores } from 'HiitTimer/src/stores/hooks';
import { Countdown } from '../components';

const CountdownContainer = observer(props => {
  const { session } = useStores();
  const { goToCongratsFromHome } = props;
  const onFinish = () => {
    const { timeCompleteWorkout, timePased, setStop } = session;
    if (timeCompleteWorkout === timePased) {
      setStop();
      goToCongratsFromHome();
    }
  };

  const { isRest, rest, training, currentTime, timePased, timeCompleteWorkout } = session;

  const count = isRest ? rest : training;
  const fillTime = 100 - (currentTime / count) * 100;

  const timePasedWorkout = (timePased / timeCompleteWorkout) * 100;

  const currentCircleColor = isRest ? colors.restGreen : colors.restBlue;

  return (
    <Countdown
      currentCircleColor={currentCircleColor}
      fill={fillTime}
      fillComplete={timePasedWorkout}
      _onFinish={onFinish}
    />
  );
});

CountdownContainer.propTypes = {
  goToCongratsFromHome: PropTypes.func.isRequired,
};

export default CountdownContainer;
