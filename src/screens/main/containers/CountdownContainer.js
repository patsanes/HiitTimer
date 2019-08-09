import React from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';

import { colors } from 'HiitTimer/src/utils/theme';
import { Countdown } from '../components';

class CountdownContainer extends React.Component {
  onFinish = () => {
    const {
      session: { timeCompleteWorkout, timePased, setStop },
      goToCongratsFromHome,
      // Reset progress
    } = this.props;
    if (timeCompleteWorkout === timePased) {
      setStop();
      goToCongratsFromHome();
    }
  };

  render() {
    const { session } = this.props;
    const {
      isRest,
      timePasedWorkout,
      timePasedPerSerie,
      // playSound,
    } = session;

    const currentCircleColor = isRest ? colors.restGreen : colors.restBlue;
    // const count = isRest ? rest : training;
    // console.log({ currentTime, count });

    // console.log({ timePasedPerSerie, timePasedWorkout });

    return (
      <Countdown
        currentCircleColor={currentCircleColor}
        fill={timePasedPerSerie}
        fillComplete={timePasedWorkout}
        _onFinish={this.onFinish}
        // playSound={playSound}
      />
    );
  }
}

CountdownContainer.propTypes = {
  session: PropTypes.object.isRequired,
  goToCongratsFromHome: PropTypes.func.isRequired,
};

export default inject('session')(observer(CountdownContainer));
