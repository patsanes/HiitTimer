import React from 'react';
import PropTypes from 'prop-types';
import { ButtonTimer } from '../../../components';

export default class PlayPause extends React.PureComponent {
  render() {
    const { inProgress, isPlay, onPlay, onPause, onStop, onPress, setInProgress } = this.props;
    return (
      <>
        {!inProgress ? (
          <ButtonTimer disabled={false} name={isPlay ? 'pause' : 'play'} onPress={onPress} />
        ) : (
          <ButtonTimer
            disabled={false}
            name={isPlay ? 'pause' : 'play'}
            onPress={isPlay ? onPause : onPlay}
          />
        )}
        <ButtonTimer
          disabled={!isPlay}
          name="stop"
          onPress={onStop}
          setInProgress={setInProgress}
        />
      </>
    );
  }
}

PlayPause.propTypes = {
  inProgress: PropTypes.bool.isRequired,
  isPlay: PropTypes.bool.isRequired,
  onPlay: PropTypes.func.isRequired,
  onPause: PropTypes.func.isRequired,
  onStop: PropTypes.func.isRequired,
  onPress: PropTypes.func.isRequired,
  setInProgress: PropTypes.func.isRequired,
};
