import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

import { useStores } from 'HiitTimer/src/stores/hooks';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import TimerMachine from 'react-timer-machine';

momentDurationFormatSetup(moment);

const TimerMachineContainer = observer(props => {
  const { session } = useStores();
  const { _onFinish } = props;
  const {
    isPlay,
    isStop,
    increaseSerie,
    increaseTime,
    inProgress,
    playSound,
    rest,
    training,
    isRest,
  } = session;

  const count = isRest ? rest : training;
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
          timeEnd={-1 * 1000}
          paused={!isPlay}
          started={!isStop}
          countdown
          interval={1000}
          formatTimer={(time, ms) => moment.duration(ms, 'milliseconds').format('h, m, s')}
          onTick={() => {
            increaseTime();
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
});

TimerMachineContainer.propTypes = {
  _onFinish: PropTypes.func.isRequired,
};

export default TimerMachineContainer;
