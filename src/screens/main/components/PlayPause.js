import React from 'react';
import PropTypes from 'prop-types';
import { ButtonTimer } from '../../../components';

export default class PlayPause extends React.PureComponent {
  render() {
    const { isPlay, onPlay, onPause, onStop, setInProgress } = this.props;
    return (
      <>
        <ButtonTimer
          disabled={false}
          name={isPlay ? 'pause' : 'play'}
          onPress={isPlay ? onPause : onPlay}
        />
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
  isPlay: PropTypes.bool.isRequired,
  onPlay: PropTypes.func.isRequired,
  onPause: PropTypes.func.isRequired,
  onStop: PropTypes.func.isRequired,
  setInProgress: PropTypes.func.isRequired,
};
