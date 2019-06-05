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

    const fill = -[[(currentTime / count) * 100] - 100];

    console.log('Current time:', { currentTime });
    console.log('REST LKJHGFCDXFGCHVJKJLKJLHKGJFDSGFHCGVJHBKJLKHULGK:', { isRest });

    // console.log('Current time Countdown:', { training });
    console.log('Current time Rest:', { rest });

    console.log('Current time:', { currentTime });
    console.log('Current time Count:', { count });
    // const fill = -[[(currentTime / count) * 100] - 100];

    console.log('Fill', { fill });

    // const fillRest = -[[(currentTime / rest) * 100] - 100];

    // const totalTime = (count + rest) * cycle * serie;
    // const fillComplete = -[(currentTime / totalTime) * 100];
    // const fill = isRest ? fillRest : fillCountdown;

    return (
      <Countdown
        count={count}
        rest={rest}
        cycle={cycle}
        serie={serie}
        isPlay={isPlay}
        isRest={isRest}
        isStop={isStop}
        increaseSerie={increaseSerie}
        saveTime={saveTime}
        currentTime={currentTime}
        resetTime={resetTime}
        setInProgress={setInProgress}
        inProgress={inProgress}
        fill={fill}
      />
    );
  }
}

CountdownContainer.propTypes = {
  session: PropTypes.object.isRequired,
};

export default inject('session')(observer(CountdownContainer));
