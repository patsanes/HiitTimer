import React from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';
import { Countdown } from '../components';

class CountdownContainer extends React.Component {
  render() {
    const { session } = this.props;
    const {
      training,
      rest,
      cycle,
      serie,

      isRest,
      isPlay,
      isStop,

      increaseSerie,
      saveTime,
      currentTime,
      resetTime,

      setInProgress,
      inProgress,
    } = session;

    const count = isRest ? rest : training;
    return (
      <Countdown
        count={count}
        rest={rest}
        cycle={cycle}
        serie={serie}
        isPlay={isPlay}
        isStop={isStop}
        increaseSerie={increaseSerie}
        saveTime={saveTime}
        currentTime={currentTime}
        resetTime={resetTime}
        setInProgress={setInProgress}
        inProgress={inProgress}
      />
    );
  }
}

CountdownContainer.propTypes = {
  session: PropTypes.object.isRequired,
};

export default inject('session')(observer(CountdownContainer));
