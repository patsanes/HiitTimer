import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import TimerMachine from 'react-timer-machine';

momentDurationFormatSetup(moment);

class TimerMachineContainer extends React.Component {
  render() {
    const { session, count, _onFinish } = this.props;
    const {
      isPlay,
      isStop,
      increaseSerie,
      currentTime,
      resetTime,
      inProgress,
      playSound,
    } = session;
    return (
      <>
        {!inProgress ? (
          <TimerMachine
            timeStart={0}
            interval={1000}
            formatTimer={(time, ms) => moment.duration(ms, 'milliseconds').format('h, m, s')}
          />
        ) : (
          <TimerMachine
            timeStart={count * 1000} // empieza a los 20 segundos
            paused={!isPlay}
            started={!isStop}
            countdown
            interval={1000}
            formatTimer={(time, ms) => moment.duration(ms, 'milliseconds').format('h, m, s')}
            onStop={() => {
              // ChangeState
              resetTime(false);
            }}
            onTick={() => {
              if (currentTime <= -1) {
                // ChangeState
                resetTime(false);
              } else {
                // SaveState
                resetTime(true);
              }
            }}
            onComplete={() => {
              increaseSerie();
              playSound();
              _onFinish();
            }}
          />
        )}
      </>
    );
  }
}

TimerMachineContainer.propTypes = {
  session: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
  _onFinish: PropTypes.func.isRequired,
};

export default inject('session')(observer(TimerMachineContainer));
